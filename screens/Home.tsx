import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AlarmClock from './Alarm';
import moment from 'moment-timezone';
import { Picker } from '@react-native-picker/picker';
import { styles, textStyles } from '../styles/index';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(moment.tz.guess());
  const [screenClock, setScreenClock] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const timeZones = moment.tz.names();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

    useEffect(() => {
        // Set the navigation header options based on dark mode
        navigation.setOptions({
            headerStyle: {
                backgroundColor: isDarkMode ? '#333333' : '#F0F0F0',
            },
            headerTintColor: isDarkMode ? '#fff' : '#000',
            headerTitleStyle: {
                color: isDarkMode ? '#fff' : '#000',
            },
        });
    }, [isDarkMode]);

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
      container: {
      flex:1,
      backgroundColor: isDarkMode ? '#121212' : 'white',

    },
    text: {
      color: isDarkMode ? 'white' : 'black',
    },
    button: {
      backgroundColor: isDarkMode ? '#333333' : 'lightgreen',
      color: isDarkMode ? 'white' : 'black',
    },
    box: {
      backgroundColor: isDarkMode ? '#333333' : '#F0F0F0',
    },
    deleteButtonText: {
      color: isDarkMode ? 'red' : 'red',
    },
    picker: {
    backgroundColor: isDarkMode ? '#2C2C2C' : 'white',
    color: isDarkMode ? 'white' : 'black',
    },
    pickerItem: {
    color: isDarkMode ? 'white' : 'black',
    },
  };

  const addNewTimeZone = (zone: string) => {
    if (!screenClock.includes(zone)) {
      setScreenClock([...screenClock, zone]);
    }
  };

  const removeTimeZone = (index: number) => {
    setScreenClock((screenClock) => screenClock.filter((_, i) => i !== index));
  };

  const showTimeZonePicker = () => {
    setModalVisible(!modalVisible);
  };

    return (
      < SafeAreaView style = { dynamicStyles.container } >
      <ScrollView style={[styles.container, dynamicStyles.container]}>
          <Text style={[textStyles.titleText, { padding: 20 }, dynamicStyles.text]}>
        World Clock
      </Text>

      <View style={{ height: 10 }} />
      {/* Managing picker for the time zones */}
      <View>
        <TouchableOpacity
          onPress={() => {
            showTimeZonePicker();
            if (modalVisible) {
              addNewTimeZone(selectedTimeZone); // Add the selected time zone
            }
          }}
          style={[styles.button, dynamicStyles.button]}
        >
          <Text style={textStyles.buttonText}>
            {modalVisible ? 'Confirm Clock' : 'Add New World Clock'}
          </Text>
        </TouchableOpacity>
        {modalVisible && (
          <Picker
            style={[dynamicStyles.picker]}
            itemStyle={[dynamicStyles.pickerItem]}
            selectedValue={selectedTimeZone}
            onValueChange={(itemValue) => {
              setSelectedTimeZone(itemValue);
            }}
          >
            {timeZones.map((zone) => (
              <Picker.Item key={zone} label={zone} value={zone} />
            ))}
          </Picker>
        )}
      </View>
      {/* Displays different timezones */}
      <View>
        {screenClock.map((zone, index) => (
          <View
            key={index}
                style={[styles.time, dynamicStyles.box]}
          >
                <Text style={[styles.buttonText, dynamicStyles.text]}>{zone}</Text>
                <TouchableOpacity onPress={() => removeTimeZone(index)} style={[styles.deleteButton, dynamicStyles.deleteButton]}>
                    <Text style={dynamicStyles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
            <View style={[styles.box, dynamicStyles.box]}>
              <Text style={[styles.time, dynamicStyles.text]}>
                {moment().tz(zone).format('hh:mm:ss A')}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ height: 200 }} />
            </ScrollView>
        </ SafeAreaView>
  );
}

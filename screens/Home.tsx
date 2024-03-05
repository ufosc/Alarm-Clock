import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AlarmClock from './Alarm';
import moment from 'moment-timezone';
import { Picker } from '@react-native-picker/picker';
import { styles, textStyles } from '../styles/styles';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(moment.tz.guess());
  const [screenClock, setScreenClock] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const timeZones = moment.tz.names();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  const addNewTimeZone = (zone) => {
    if (!screenClock.includes(zone)) {
      setScreenClock([...screenClock, zone]);
    }
  };

  const removeTimeZone = (index) => {
    setScreenClock((screenClock) => screenClock.filter((_, i) => i !== index));
  };

  const showTimeZonePicker = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <Text style={{ ...textStyles.titleText, padding: 20, color: dynamicStyles.color }}>
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
          style={styles.button}
        >
          <Text style={textStyles.buttonText}>
            {modalVisible ? 'Confirm Clock' : 'Add New World Clock'}
          </Text>
        </TouchableOpacity>
        {modalVisible && (
          <Picker
            style={styles.picker}
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
            style={[styles.time, { backgroundColor: dynamicStyles.backgroundColor }]}
          >
            <Text style={{ ...styles.buttonText, color: dynamicStyles.color }}>{zone}</Text>
            <TouchableOpacity onPress={() => removeTimeZone(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
            <View style={[styles.box, { backgroundColor: dynamicStyles.backgroundColor }]}>
              <Text style={{ ...styles.time, color: dynamicStyles.color }}>
                {moment().tz(zone).format('hh:mm:ss A')}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ height: 200 }} />
    </ScrollView>
  );
}

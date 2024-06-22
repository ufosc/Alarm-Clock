import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment-timezone';
import { Picker } from '@react-native-picker/picker';
import { styles, textStyles } from '../styles/index';
import { useDarkMode } from '../contexts/DarkModeContext';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
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

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? '#000000' : 'white',
    color: isDarkMode ? 'white' : 'black',
    buttonBackgroundColor: isDarkMode ? '#FFFFFF' : '#000000',
    buttonTextColor: isDarkMode ? '#000000' : '#FFFFFF',
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
    <SafeAreaView style={{ flex: 1, backgroundColor: dynamicStyles.backgroundColor }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={dynamicStyles.backgroundColor}
      />
      <ScrollView 
        style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor, paddingTop: insets.top }]}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
      >
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
            style={[styles.button, { backgroundColor: dynamicStyles.buttonBackgroundColor }]}
          >
            <Text style={[textStyles.buttonText, { color: dynamicStyles.buttonTextColor }]}>
              {modalVisible ? 'Confirm Clock' : 'Add New World Clock'}
            </Text>
          </TouchableOpacity>
          {modalVisible && (
            <Picker
              selectedValue={selectedTimeZone}
              onValueChange={(itemValue) => {
                setSelectedTimeZone(itemValue);
              }}
              itemStyle={{ color: dynamicStyles.color }} // Style for the picker items
            >
              {timeZones.map((zone) => (
                <Picker.Item key={zone} label={zone} value={zone} color={dynamicStyles.color} />
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
    </SafeAreaView>
  );
}

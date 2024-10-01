import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
// import AlarmClock from './Alarm';
import { Picker } from '@react-native-picker/picker';
import { styles, textStyles } from '../styles/index';
import { useDarkMode } from '../contexts/DarkModeContext';
import { timeZones, type TimeZone } from '../constants/timezones';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [screenClock, setScreenClock] = useState<TimeZone[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const addNewTimeZone = (zone: TimeZone) => {
    if (!screenClock.includes(zone)) {
      setScreenClock([...screenClock, zone]);
    }
  };

  const removeTimeZone = (index: number) => {
    Alert.alert('Confirm deletion', 'Are you sure you want to delete this clock?', [
      {
        text: 'Cancel',
      },
      { text: 'OK', onPress: () => setScreenClock((screenClock) => screenClock.filter((_, i) => i !== index)) },
    ]);
  };

  const showTimeZonePicker = () => {
    setModalVisible(!modalVisible);
  };

  const formatDate = (date: Date, timeZone: TimeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timeZone,
    }).format(date);
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
              addNewTimeZone(selectedTimeZone as TimeZone); // Add the selected time zone
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
            // style={styles.picker}: Unused style
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
                {formatDate(currentTime, zone)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ height: 200 }} />
    </ScrollView>
  );
}

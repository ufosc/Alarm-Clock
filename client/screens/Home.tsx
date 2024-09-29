import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
// import AlarmClock from './Alarm';
import { Picker } from '@react-native-picker/picker';
import { styles, textStyles } from '../styles/index';
import { useDarkMode } from '../contexts/DarkModeContext';
import { timeZones, type TimeZone } from '../constants/timezones';
import { getDynamicStyles } from '../styles/AlarmStyles';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [screenClock, setScreenClock] = useState<TimeZone[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const alarmDynamicStyles = getDynamicStyles(isDarkMode);

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
    setScreenClock((screenClock) => screenClock.filter((_, i) => i !== index));
  };

  const showTimeZonePicker = () => {
    setModalVisible(!modalVisible);
  };

  const formatDate = (date: Date, timeZone: TimeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
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
            style={[alarmDynamicStyles.card, { backgroundColor: dynamicStyles.backgroundColor }]}
          >
            <View style={[alarmDynamicStyles.content]}>
              <Text style={{ ...textStyles.clockHeadingText, color: dynamicStyles.color }}>{zone.split("/").pop().replace('_', ' ')}</Text>
              {/*emulates same style as the alarm page with empty text at the bottom to pad it out, not the smartest but makes it consistent*/}
              <Text style={{ ...textStyles.clockHeadingText, color: dynamicStyles.color }}>{'         '}</Text>

            </View>
              <View style={[alarmDynamicStyles.controls, { backgroundColor: dynamicStyles.backgroundColor }]}>
                <Text style={{ ...alarmDynamicStyles.time, color: dynamicStyles.color }}>
                  {formatDate(currentTime, zone)}
                </Text>
                <TouchableOpacity onPress={() => removeTimeZone(index)} style={[alarmDynamicStyles.deleteButton, { backgroundColor: dynamicStyles.backgroundColor }]}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              </View>
          </View>
        ))}
      </View>

      <View style={{ height: 200 }} />
    </ScrollView>
  );
}

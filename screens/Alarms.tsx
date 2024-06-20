import React, {useEffect,useState } from 'react';
import { Switch, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles, textStyles } from '../styles';
import { StatusBar } from 'expo-status-bar';
import AlarmClock from '../components/AlarmClock';
import AlarmCard from '../components/AlarmCard';
import { Alarm } from '../types/AlarmTypes';

import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

export default function Alarms() {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [selectedAlarm, setSelectedAlarm] = useState<Alarm>();

    const { isDarkMode } = useDarkMode();

  

    // Define dynamic styles based on isDarkMode
    const dynamicStyles = {
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? '#121212' : 'white', // Adjust background color for dark mode
        },
        text: {
            color: isDarkMode ? 'white' : 'black',
        },
        button: {
            backgroundColor: isDarkMode ? '#333333' : '#DDDDDD',
            color: isDarkMode ? 'white' : 'black',
        },
        box: {
            backgroundColor: isDarkMode ? '#1E1E1E' : '#F0F0F0',
        },
        deleteButton: {
            backgroundColor: isDarkMode ? '#B22222' : '#FF4444',
        },
        deleteButtonText: {
            color: 'white',
        },
        picker: {
            backgroundColor: isDarkMode ? '#2C2C2C' : 'white',
            color: isDarkMode ? 'white' : 'black',
        },
        pickerItem: {
            color: isDarkMode ? 'white' : 'black',
        },
    };

  // Function to handle saving alarm data
  const handleSaveAlarm = (alarmData: Alarm) => {
    if (alarms.some((alarm) => alarm.id === alarmData.id)) {
      // Update existing alarm
      setAlarms(alarms.map((alarm) => (alarm.id === alarmData.id ? alarmData : alarm)));
    } else {
      // Add new alarm
      setAlarms([...alarms, alarmData]);
    }
    // Close modal or navigate back
  };

  const handleDeleteAlarm = (alarmId: number) => {
    setAlarms(alarms.filter((alarm: Alarm) => alarm.id !== alarmId));
  };

  const handleToggleAlarm = (alarmId: number): void => {
    setAlarms(
      alarms.map((alarm) => {
        if (alarm.id === alarmId) {
          return { ...alarm, isActive: !alarm.isActive };
        }
        return alarm;
      })
    );
  };

  const handleEditAlarm = (alarm: Alarm) => {
    setSelectedAlarm(alarm);
  };

  const containerStyle = isDarkMode
    ? styles.darkContainer
    : { ...styles.container, ...{ marginTop: 10 } }; // Adjust as necessary for dark mode
  const buttonTextStyle = isDarkMode
    ? { ...textStyles.buttonText, color: 'white' }
    : textStyles.buttonText;

    return (
       < SafeAreaView style={dynamicStyles.container} >
       <ScrollView style={[styles.container, dynamicStyles.container]}>
      <Text style={[textStyles.titleText, { padding: 20 }, dynamicStyles.text]}>
        Alarm Clock
      </Text>

      <AlarmClock editingAlarm={selectedAlarm} onAlarmSave={handleSaveAlarm} />

      {/* Render a list of AlarmCards */}
      {alarms.map((alarm) => (
        <AlarmCard
          key={alarm.id}
          alarm={alarm}
          onToggleAlarm={handleToggleAlarm}
          onDelete={handleDeleteAlarm}
        />
      ))}

      <StatusBar />
      </ScrollView>
      </ SafeAreaView>
  );
}

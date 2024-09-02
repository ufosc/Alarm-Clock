import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
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
    <ScrollView>
      <Text style={{ ...textStyles.titleText, padding: 20, color: dynamicStyles.color }}>
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
  );
}

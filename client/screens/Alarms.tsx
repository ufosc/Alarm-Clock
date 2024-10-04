import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles, textStyles } from '../styles';
import { StatusBar } from 'expo-status-bar';
import AlarmClock from '../components/AlarmClock';
import AlarmCard from '../components/AlarmCard';
import { Alarm } from '../types/AlarmTypes';
import * as Notifications from 'expo-notifications'; // For Notifications.cancelScheduledNotificationAsync

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

  const handleDeleteAlarm = async (alarmId: string) => {
    try {
      // Assuming 'alarms' is your current alarm state
      const alarmToDelete = alarms.find((alarm: Alarm) => alarm.id === alarmId);

      // Cancel the scheduled notification for the alarm being deleted
      if (alarmToDelete && alarmToDelete.id) {
        await Notifications.cancelScheduledNotificationAsync(alarmToDelete.id);
        console.log(`Notification for alarm ${alarmId} has been canceled.`);
      }

      // Filter out the alarm with the matching ID
      setAlarms(alarms.filter((alarm: Alarm) => alarm.id !== alarmId));

      console.log(`Alarm with ID ${alarmId} has been deleted.`);
    } catch (error) {
      console.error('Error deleting alarm:', error);
    }
  };

  const handleToggleAlarm = (alarmId: string): void => {
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
    <View style={[styles.container, dynamicStyles]}>
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
    </View>
  );
}

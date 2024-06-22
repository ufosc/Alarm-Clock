import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getDynamicStyles } from '../styles'; // Import the dynamic styles
import AlarmClock from '../components/AlarmClock';
import AlarmCard from '../components/AlarmCard';
import { Alarm } from '../types/AlarmTypes';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

export default function Alarms() {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [selectedAlarm, setSelectedAlarm] = useState<Alarm>();

  const { isDarkMode } = useDarkMode();

  // Get dynamic styles based on isDarkMode
  const dynamicStyles = getDynamicStyles(isDarkMode);

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

  return (
    <View style={dynamicStyles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'} // Set the correct background color
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[dynamicStyles.topBarTitle, { padding: 20 }]}>Alarm Clock</Text>

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
      </ScrollView>
    </View>
  );
}

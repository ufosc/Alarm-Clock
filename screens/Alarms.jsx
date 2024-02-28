import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { StatusBar } from 'expo-status-bar';
import { textStyles, styles } from '../styles/styles';
import AlarmClock from '../components/AlarmClock';
import AlarmCard from '../components/AlarmCard';


export default function Alarms({ isDarkMode }) {
  const [alarms, setAlarms] = useState([]);
  const [selectedAlarm, setSelectedAlarm] = useState(null);

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  // Function to handle saving alarm data
  const handleSaveAlarm = (alarmData) => {
    if (alarms.some((alarm) => alarm.id === alarmData.id)) {
      // Update existing alarm
      setAlarms(alarms.map((alarm) => (alarm.id === alarmData.id ? alarmData : alarm)));
    } else {
      // Add new alarm
      setAlarms([...alarms, alarmData]);
    }
    // Close modal or navigate back
  };

  const handleDeleteAlarm = (alarmId) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== alarmId));
  };

  const handleToggleAlarm = (alarmId) => {
    setAlarms(
      alarms.map((alarm) => {
        if (alarm.id === alarmId) {
          return { ...alarm, isActive: !alarm.isActive };
        }
        return alarm;
      })
    );
  };

  const handleEditAlarm = (alarm) => {
    setSelectedAlarm(alarm);
  };

  return (
    <ScrollView>
      <Text style={{ ...textStyles.titleText, padding: 20, color: dynamicStyles.color }}>
        Alarm Clock
      </Text>

      {/* <View style={[styles.box, { backgroundColor: dynamicStyles.backgroundColor }]}>
        <Text style={{ ...styles.time, color: dynamicStyles.color }}>{currentTime.toLocaleTimeString()}</Text>
      </View> */}

      <AlarmClock
        editingAlarm={selectedAlarm}
        onAlarmSave={handleSaveAlarm}
        onAlarmDelete={handleDeleteAlarm}
        style={{ marginTop: 100, padding: 100, paddingTop: 100 }}
      />

      {/* Render a list of AlarmCards */}
      {alarms.map((alarm) => (
        <AlarmCard
          key={alarm.id}
          alarm={alarm}
          onToggleAlarm={handleToggleAlarm}
          onDelete={handleDeleteAlarm}
        />
      ))}

      <StatusBar style={{ marginTop: 500 }} />
    </ScrollView>
  );
}

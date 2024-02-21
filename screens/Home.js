import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
// import AlarmClock from './Alarm';
import AlarmClock from './AlarmClock/AlarmClock';
import { styles, textStyles } from '../styles/styles';
import FooterTab from '../components/FooterTab';
import AlarmCard from './AlarmCard';

export default function Home({ isDarkMode }) {
  // Accept isDarkMode as a prop
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarms, setAlarms] = useState([]);
  const [selectedAlarm, setSelectedAlarm] = useState(null);

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

  // When rendering AlarmCards
  {
    alarms.map((alarm, index) => (
      <AlarmCard
        key={alarm.id} 
        alarm={alarm}
        onToggleAlarm={handleToggleAlarm}
        onPress={handleEditAlarm}
      />
    ));
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
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

      <View style={{ height: 200 }} />
      <StatusBar style={{ marginTop: 500 }} />
      <FooterTab style={{ marginTop: 500 }} />
    </ScrollView>
  );
}

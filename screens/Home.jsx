import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlarmClock from '../components/AlarmClock';
import { styles, textStyles } from '../styles/styles';
import AlarmCard from '../components/AlarmCard';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Use the hook
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

  const containerStyle = isDarkMode ? styles.darkContainer : styles.container;
  const textStyle = isDarkMode ? { color: 'white' } : { color: 'black' };

  // When rendering AlarmCards
  // {
  //   alarms.map((alarm, index) => (
  //     <AlarmCard
  //       key={alarm.id}
  //       alarm={alarm}
  //       onToggleAlarm={handleToggleAlarm}
  //       onPress={handleEditAlarm}
  //     />
  //   ));
  // }

  return (
    <ScrollView style={containerStyle}>
      <Text style={[textStyles.titleText, textStyle, { padding: 20 }]}>Alarm Clock</Text>

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
    </ScrollView>
  );
}

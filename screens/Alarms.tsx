import React, { useEffect, useState } from 'react';
import { Switch, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles, textStyles } from '../styles';
import { StatusBar } from 'expo-status-bar';
import AlarmClock from '../components/AlarmClock';
import AlarmCard from '../components/AlarmCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alarm } from '../types/Alarm';

import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook
import { getAlarms } from '../services/store';

export default function Alarms() {
  const [alarms, setAlarms] = useState<any>([]);
  const [selectedAlarm, setSelectedAlarm] = useState<Alarm>();

  const { isDarkMode } = useDarkMode();

  const updateAlarms = async () => {
    // let currentAlarms: any = await getAlarms();
    let currentAlarms: string = await AsyncStorage.getItem('Alarms');
    if (currentAlarms != null) {
      setAlarms(currentAlarms);
    }
    // setAlarms(currentAlarms);
  };

  // Get current Alarms
  useEffect(() => {
    updateAlarms();
  }, [updateAlarms]);

  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  // Function to handle saving alarm data
  const handleSaveAlarm = async (alarmData: any) => {
    if (alarms.some((alarm) => alarm.id === alarmData.id)) {
      // Update existing alarm
      setAlarms(alarms.map((alarm) => (alarm.id === alarmData.id ? alarmData : alarm)));
    } else {
      // Add new alarm
      const alarmDataJson: string = JSON.stringify(alarmData);
      let currentAlarms: any = await getAlarms();
      // const updatedAlarms: Alarm[] = [...currentAlarms, alarmData];
      // await AsyncStorage.setItem('Alarms', JSON.stringify(updatedAlarms));
      // setAlarms([...alarms, alarmData]);
      // console.log(alarmData);
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

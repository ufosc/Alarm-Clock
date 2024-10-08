import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Platform, Button, SafeAreaView } from 'react-native';
import { styles, textStyles } from '../styles';
import { getDynamicStyles } from '../styles/AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';
import DayPicker from './DayPicker';
import { AlarmDays } from '../types/AlarmTypes';
import AlarmNameInput from './AlarmNameInput';
import SoundPicker from './SoundPicker';
import SnoozeSwitch from './SnoozeSwitch';
import TimePickerIOS from './TimePickerIOS';
import TimePickerAndroid from './TimePickerAndroid';
import * as Notifications from 'expo-notifications';

interface AlarmData {
  id: string;
  alarmTime: Date;
  alarmName: string;
  days: AlarmDays;
  isSnoozeEnabled: boolean;
  isActive: boolean;
}

interface AlarmClockProps {
  onAlarmSave: (alarmData: AlarmData) => void;
  editingAlarm?: AlarmData;
}

function AlarmClock({ onAlarmSave, editingAlarm }: AlarmClockProps) {
  const { isDarkMode } = useDarkMode();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [alarmName, setAlarmName] = useState('');
  const [days, setDays] = useState({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });
  const [isSnoozeEnabled, setIsSnoozeEnabled] = useState(true);
  const [isAlarmSettingVisible, setAlarmSettingVisible] = useState(false);
  const isEditing = editingAlarm != null;
  const dynamicStyles = getDynamicStyles(isDarkMode);

  const toggleDay = (day: keyof AlarmDays) => {
    setDays({ ...days, [day]: !days[day] });
  };

  const saveAlarm = () => {
    const alarmData = {
      id: isEditing ? editingAlarm.id : '', // Use empty string to indicate that this is a new alarm that needs an ID
      alarmTime,
      alarmName,
      days,
      isSnoozeEnabled,
      isActive: true,
    };
    scheduleAlarmNotification(alarmData);

    onAlarmSave(alarmData);

    // Close the alarm setting modal
    closeAlarmSetting();
  };

  const openAlarmSetting = () => {
    setAlarmSettingVisible(true);
  };

  const closeAlarmSetting = () => {
    setAlarmSettingVisible(false);
  };

  const dynamicStylesLocal = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  const scheduleAlarmNotification = async (alarmData: AlarmData) => {
    try {
      const { id, alarmTime, alarmName } = alarmData;
      const hour = alarmTime.getHours();
      const minute = alarmTime.getMinutes();

      // Set the trigger for the notification
      const trigger = {
        hour,
        minute,
        repeats: true, // Repeat the notification daily if needed
      };

      // Prepare notification content
      const notificationContent = {
        title: 'Alarm',
        body: `Time to wake up! ${alarmName}`,
      };

      // Schedule the notification
      const notificationID = await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger: trigger,
      });

      // Update the alarm ID if it is not defined already
      if (!id)
        alarmData.id = notificationID;

      console.log(`Notification scheduled for alarm ${notificationID}`);
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  const scheduleNotification = async () => {
    try {
      // Set the content and trigger for the notification
      const notificationContent = {
        title: 'Hello!',
        body: 'This is a basic Expo notification.',
      };

      const trigger = {
        seconds: 5, // Notify after 5 seconds
      };

      // Schedule the notification
      await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger: trigger,
      });
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: dynamicStylesLocal.backgroundColor, padding: 20 }]}>
      <Text style={{ ...textStyles.subtitleText, paddingBottom: 20, color: dynamicStylesLocal.color }}>
        {isEditing ? 'Edit Alarm' : 'Add Alarm'}
      </Text>

      <TouchableOpacity onPress={openAlarmSetting} style={[styles.button, { marginBottom: 20 }]}>
        <Text style={[textStyles.buttonText, { color: "white" }]}>Set Alarm Time</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isAlarmSettingVisible}
        onRequestClose={closeAlarmSetting}
        presentationStyle='pageSheet'
      >
        <SafeAreaView style={[dynamicStyles.modalContainer, { flex: 1, padding: 20 }]}>
          <View style={[dynamicStyles.topNavBar, { marginBottom: 20 }]}>
            <TouchableOpacity onPress={closeAlarmSetting}>
              <Text style={[dynamicStyles.topBarText, { color: dynamicStylesLocal.color }]}>Cancel</Text>
            </TouchableOpacity>
            <Text style={[dynamicStyles.topBarTitle, { color: dynamicStylesLocal.color, fontWeight: 'bold' }]}>
              {isEditing ? 'Edit Alarm' : 'Add Alarm'}
            </Text>
            <TouchableOpacity onPress={saveAlarm}>
              <Text style={[dynamicStyles.topBarText, { color: dynamicStylesLocal.color }]}>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 20 }}>
            {Platform.OS === 'ios' ? (
              <TimePickerIOS alarmTime={alarmTime} setAlarmTime={setAlarmTime} />
            ) : (
              <TimePickerAndroid
                isPickerVisible={isDatePickerVisible}
                setPickerVisible={setDatePickerVisibility}
                alarmTime={alarmTime}
                setAlarmTime={setAlarmTime}
              />
            )}
          </View>

          <DayPicker days={days} toggleDay={toggleDay} />
          <AlarmNameInput alarmName={alarmName} setAlarmName={setAlarmName} />
          <SoundPicker /* pass any props needed */ />
          <SnoozeSwitch isSnoozeEnabled={isSnoozeEnabled} setIsSnoozeEnabled={setIsSnoozeEnabled} />

          <View style={{ marginTop: 20 }}>
            <Button title="Schedule Notification" onPress={scheduleNotification} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

export default AlarmClock;

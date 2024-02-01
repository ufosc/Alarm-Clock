import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AlarmClock = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarmTime, setAlarmTime] = useState(null);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [countdown, setCountdown] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setAlarmTime(date);
    setIsAlarmSet(true);

    // Set a timeout to trigger the alarm
    const currentTime = new Date();
    const timeUntilAlarm = date - currentTime;
    setTimeout(() => {
      alert('Wake up!');
      setIsAlarmSet(false);
      setCountdown('');
    }, timeUntilAlarm);

    // Start updating the countdown every second
    const intervalId = setInterval(() => {
      const remainingTime = date - new Date();
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setCountdown('');
      } else {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        setCountdown(`${minutes}:${seconds}`);
      }
    }, 1000);

    hideDatePicker();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alarm Status: {isAlarmSet ? 'Set' : 'Not Set'}</Text>
      {isAlarmSet && <Text>Countdown: {countdown}</Text>}
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Set Alarm Time</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 100, padding: 100, paddingTop: 100 }}>
      <AlarmClock />
    </View>
  );
};

export default App;

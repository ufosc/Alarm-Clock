import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles, textStyles } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

export default function Alarms() {
  const { isDarkMode } = useDarkMode(); // Use the hook
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarmTime, setAlarmTime] = useState(null);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [isAlarmOn, setIsAlarmOn] = useState(true);

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
        const formatMinutes = String(minutes).padStart(2, '0');
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        const formatSeconds = String(seconds).padStart(2, '0');
        setCountdown(`${formatMinutes} min : ${formatSeconds} sec`);
      }
    }, 1000);

    hideDatePicker();
  };

  const containerStyle = isDarkMode ? styles.darkContainer : { ...styles.container, ...{ marginTop: 10 } }; // Adjust as necessary for dark mode
  const buttonTextStyle = isDarkMode ? { ...textStyles.buttonText, color: 'white' } : textStyles.buttonText;

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <Text style={buttonTextStyle}>New Alarm</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        textColor="black"
        isVisible={isDatePickerVisible}
        mode="time"
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Text>{isAlarmOn ? 'Alarm Status: On' : isAlarmSet? 'Alarm Status: Off' : ''}</Text> */}
      {/* {isAlarmSet && <Text>Time Left: {countdown}</Text>} */}
      {isAlarmSet && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <View style={styles.alarmTimeBox}>
            <Text style={textStyles.timeText}>
              {alarmTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}{' '}
            </Text>
          </View>

          {/* This switch doesn't do anything yet but it totally could! */}
          <Switch
            style={{ marginLeft: 100 }}
            trackColor={{ false: '#767577', true: 'lightgreen' }}
            thumbColor={isAlarmOn ? 'f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsAlarmOn(!isAlarmOn)}
            value={isAlarmOn}
          />
        </View>
      )}
      <StatusBar style={{ marginTop: 500 }} />
    </View>
  );
}

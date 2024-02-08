import React, { useState, useEffect } from 'react';
import { Switch, View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { textStyles, styles } from "./styles";

const AlarmClock = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarmTime, setAlarmTime] = useState(null);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmOn, setIsAlarmOn] = useState(true);
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

    // Countdown not needed, so this is commented out.
    // Start updating the countdown every second
    // const intervalId = setInterval(() => {
    //   const remainingTime = date - new Date();
    //   if (remainingTime <= 0) {
    //     clearInterval(intervalId);
    //     setCountdown('');
    //   } else {
    //     const minutes = Math.floor(remainingTime / 60000);
    //     const formatMinutes = String(minutes).padStart(2, '0');
    //     const seconds = Math.floor((remainingTime % 60000) / 1000);
    //     const formatSeconds = String(seconds).padStart(2, '0');
    //     setCountdown(`${formatMinutes} min : ${formatSeconds} sec`);
    //   }
    // }, 1000);

    hideDatePicker();
  };

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <Text style={textStyles.buttonText}>Set Alarm Time</Text>
      </TouchableOpacity>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>Alarm Status: {isAlarmSet ? 'Set' : 'Not Set'}</Text>
      {/* {isAlarmSet && <Text>Time Left: {countdown}</Text>} */}
      {isAlarmSet &&
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <View style={styles.alarmTimeBox}>


            <Text style={textStyles.timeText}>{alarmTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} </Text>
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
      }


      <TouchableOpacity onPress={() => console.log(alarmTime)} style={{ ...styles.button, marginTop: 30 }}>
        <Text style={textStyles.buttonText}>Button to Log Stuff</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AlarmClock;
import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { StatusBar } from 'expo-status-bar';
import * as SMS from 'expo-sms';
import { textStyles, styles } from '../styles/styles';

export default function Alarms() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarms, setAlarms] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {

    // Set a timeout to trigger the alarm
    const currentTime = new Date();
    const timeUntilAlarm = date - currentTime;
    const timeout = setTimeout(() => {
      alert('Wake up!');
      // setIsAlarmSet(false);
      // setCountdown('');
    }, timeUntilAlarm);

    const newAlarm = {
      date,
      timeout,
      enabled: true,
    };

    setAlarms(alarms.concat([newAlarm]));
    console.log(alarms);

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

  // sendAlarmNotification();--> Need to implement feature in settings that takes phone number input

  const sendAlarmNotification = async (phoneNumber) => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(phoneNumber, 'Alarm missed! Wake up!');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <Text style={textStyles.buttonText}>New Alarm</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        textColor="black"
        isVisible={isDatePickerVisible}
        mode="time"
        date={new Date()}
        onConfirm={(d) => handleConfirm(d)}
        onCancel={() => hideDatePicker()}
      />
      {/* <Text>{isAlarmOn ? 'Alarm Status: On' : isAlarmSet? 'Alarm Status: Off' : ''}</Text> */}
      {/* {isAlarmSet && <Text>Time Left: {countdown}</Text>} */}

      {alarms &&
        alarms.map((a) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <View style={styles.alarmTimeBox}>
              <Text style={textStyles.timeText}>
                {a.date.toLocaleTimeString([], {
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
              thumbColor={a.enabled ? 'f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                // eslint-disable-next-line no-param-reassign
                a.enabled = !a.enabled;
              }}
              value={a.enabled}
            />
          </View>
        ))}

      <StatusBar style={{ marginTop: 500 }} />
    </View>
  );
}

import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDarkMode } from '../contexts/DarkModeContext';

function TimePickerIOS({ alarmTime, setAlarmTime }) {
  const { isDarkMode } = useDarkMode();

  return (
    <DateTimePicker
      value={alarmTime}
      mode="time"
      display="spinner"
      onChange={(event, selectedDate) => {
        const currentDate = selectedDate || alarmTime;
        setAlarmTime(currentDate);
      }}
      style={{
        width: '100%',
        backgroundColor: isDarkMode ? 'darkgrey' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    />
  );
}

export default TimePickerIOS;

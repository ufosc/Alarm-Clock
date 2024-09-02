import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDarkMode } from '../contexts/DarkModeContext';

interface TimePickerIOSProp{
  alarmTime: Date;
  setAlarmTime: (alarmTime: Date) => void;
}


function TimePickerIOS({ alarmTime, setAlarmTime }: TimePickerIOSProp) {
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
      themeVariant={isDarkMode ? 'dark' : 'light'}
      style={{
        width: '100%',
        backgroundColor: isDarkMode ? 'darkgrey' : 'white',
      }}
    />
  );
}

export default TimePickerIOS;

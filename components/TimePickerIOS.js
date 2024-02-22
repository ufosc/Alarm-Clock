import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePickerIOS = ({ alarmTime, setAlarmTime }) => {
  return (
    <DateTimePicker
      value={alarmTime}
      mode="time"
      display="spinner"
      onChange={(event, selectedDate) => {
        const currentDate = selectedDate || alarmTime;
        setAlarmTime(currentDate);
      }}
      style={{ width: '100%', backgroundColor: 'white' }}
    />
  );
};

export default TimePickerIOS;

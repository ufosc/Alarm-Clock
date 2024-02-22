import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePickerAndroid = ({ isPickerVisible, setPickerVisible, alarmTime, setAlarmTime }) => {
  return (
    <DateTimePickerModal
      isVisible={isPickerVisible}
      mode="time"
      date={alarmTime}
      onConfirm={(selectedDate) => {
        setAlarmTime(selectedDate);
        setPickerVisible(false);
      }}
      onCancel={() => setPickerVisible(false)}
    />
  );
};

export default TimePickerAndroid;

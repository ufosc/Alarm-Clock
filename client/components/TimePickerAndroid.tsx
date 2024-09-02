import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles, textStyles } from '../styles';

interface TimePickerAndroidProps {
  isPickerVisible: boolean;
  setPickerVisible: (isPickerVisible: boolean) => void;
  alarmTime: Date;
  setAlarmTime: (alarmTime: Date) => void;
}

function TimePickerAndroid({
  isPickerVisible,
  setPickerVisible,
  alarmTime,
  setAlarmTime,
}: TimePickerAndroidProps) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setPickerVisible(true);
        }}
        style={styles.button}
      >
        <Text style={textStyles.buttonText}>
          Set alarm time -{' '}
          {alarmTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </Text>
      </TouchableOpacity>
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
    </View>
  );
}

export default TimePickerAndroid;

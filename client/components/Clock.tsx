import React, { useState } from 'react';
import { Switch, View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { textStyles, styles } from '../styles';

function AlarmClock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Alarm Status: {isAlarmSet ? 'Set' : 'Not Set'}</Text> */}
      {/* {isAlarmSet && <Text>Time Left: {countdown}</Text>} */}
    </View>
  );
}

export default AlarmClock;

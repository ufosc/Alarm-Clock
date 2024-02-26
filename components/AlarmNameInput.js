import React from 'react';
import { View, Text } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';
import { styles, getStyle } from '../styles/AlarmStyles';

function AlarmNameInput({ alarmName, setAlarmName }) {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={getStyle(styles.container, isDarkMode)}>
      <Text style={getStyle(styles.label, isDarkMode)}>Label</Text>
      <TextInput
        style={getStyle(styles.textInput, isDarkMode)}
        onChangeText={setAlarmName}
        value={alarmName}
        placeholder="Alarm"
      />
    </View>
  );
}

export default AlarmNameInput;

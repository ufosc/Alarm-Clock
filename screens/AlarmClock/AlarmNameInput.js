import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/AlarmStyles';

const AlarmNameInput = ({ alarmName, setAlarmName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Label</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setAlarmName}
        value={alarmName}
        placeholder="Alarm"
      />
    </View>
  );
};


export default AlarmNameInput;

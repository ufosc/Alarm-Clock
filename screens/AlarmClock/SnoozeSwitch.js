import React from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../../styles/AlarmStyles';

const SnoozeSwitch = ({ isSnoozeEnabled, setIsSnoozeEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Snooze</Text>
      <Switch
        trackColor={{ false: 'blue', true: 'lightgrey' }}
        thumbColor={isSnoozeEnabled ? 'green' : 'lightgrey'}
        ios_backgroundColor="green"
        onValueChange={setIsSnoozeEnabled}
        value={isSnoozeEnabled}
      />
    </View>
  );
};

export default SnoozeSwitch;

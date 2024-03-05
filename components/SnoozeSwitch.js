import React from 'react';
import { View, Text, Switch } from 'react-native';
import { getDynamicStyles } from '../styles/AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';

function SnoozeSwitch({ isSnoozeEnabled, setIsSnoozeEnabled }) {
  const { isDarkMode } = useDarkMode();
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.label}>Snooze</Text>
      <Switch
        trackColor={{ false: 'blue', true: 'lightgrey' }}
        thumbColor={isSnoozeEnabled ? 'green' : 'lightgrey'}
        ios_backgroundColor="green"
        onValueChange={setIsSnoozeEnabled}
        value={isSnoozeEnabled}
      />
    </View>
  );
}

export default SnoozeSwitch;

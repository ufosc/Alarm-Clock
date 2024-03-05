import React from 'react';
import { View, Text, Switch } from 'react-native';
import { settingStyles } from '../styles/index';

function SettingsToggle({ name, value, onValueChange }) {
  return (
    <View style={settingStyles.container}>
      <View style={settingStyles.content}>
        <Text style={settingStyles.settingText}>{name}</Text>
      </View>
      <View style={settingStyles.controls}>
        <Switch style={settingStyles.toggle} value={value} onValueChange={onValueChange} />
      </View>
    </View>
  );
}
export default SettingsToggle;

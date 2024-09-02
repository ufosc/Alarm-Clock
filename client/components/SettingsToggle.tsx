import React from 'react';
import { View, Text, Switch } from 'react-native';
import { settingStyles } from '../styles/index';

interface SettingsToggleProp {
  name: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const SettingsToggle: React.FC<SettingsToggleProp> = ({ name, value, onValueChange }) => {
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
};
export default SettingsToggle;

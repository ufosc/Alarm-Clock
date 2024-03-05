import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { styles, textStyles } from '../styles/styles';
import { useDarkMode } from '../contexts/DarkModeContext'; // Make sure to import useDarkMode
import SettingsToggle from '../components/SettingsToggle';

function Setting() {
  const { isDarkMode, toggleSwitch } = useDarkMode(); // Use the useDarkMode hook

  const backgroundColor = isDarkMode ? 'darkgrey' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: textColor }]}>Settings</Text>

      <SettingsToggle name='Dark Mode' value={isDarkMode} onValueChange={toggleSwitch}></SettingsToggle>
      
    </View>
  );
}

export default Setting;

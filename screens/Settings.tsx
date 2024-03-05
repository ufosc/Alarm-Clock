import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { styles, textStyles } from '../styles';
import { useDarkMode } from '../contexts/DarkModeContext'; // Make sure to import useDarkMode

function Setting() {
  const { isDarkMode, toggleSwitch } = useDarkMode(); // Use the useDarkMode hook

  const backgroundColor = isDarkMode ? 'darkgrey' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: textColor }]}>Settings</Text>
      <View style={toggleStyle.toggleContainer}>
        {/* Corrected from container to toggleContainer */}
        <Text style={toggleStyle.baseText}>Dark Mode</Text>
        <Switch onValueChange={toggleSwitch} value={isDarkMode} />
      </View>
    </View>
  );
}

const toggleStyle = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginLeft: 10,
  },
});

export default Setting;

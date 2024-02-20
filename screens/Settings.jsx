import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { styles, textStyles } from '../styles/styles';

function Setting({ isDarkMode, toggleSwitch }) {
  // Receives isDarkMode and toggleSwitch as props
  const backgroundColor = isDarkMode ? 'darkgrey' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: textColor }]}>Settings</Text>
      <View style={toggleStyle.container}>
        <Text style={toggleStyle.baseText}>Dark Mode</Text>
        <Switch onValueChange={toggleSwitch} value={isDarkMode} style={toggleStyle.toggleButton} />
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
  },
  toggleButton: {
    flex: 2,
  },
  toggleText: {
    flex: 1,
  },
});

export default Setting;

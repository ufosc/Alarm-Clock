import React from 'react';
import { View, Text, Switch } from 'react-native';
import { styles, textStyles } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import FooterTab from '../components/FooterTab';

function Setting({ isDarkMode, toggleSwitch }) { // Receives isDarkMode and toggleSwitch as props
  const backgroundColor = isDarkMode ? 'darkgrey' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: textColor }]}>Settings</Text>
      <Switch onValueChange={toggleSwitch} value={isDarkMode} />

      <StatusBar />
      <FooterTab />
    </View>
  );
}

export default Setting;

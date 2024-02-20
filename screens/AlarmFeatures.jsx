import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles, textStyles } from '../styles/styles';

function AlarmFeatures({ isDarkMode }) {
  // Accept isDarkMode as a prop
  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <View style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: dynamicStyles.color }]}>Alarm Features</Text>

      <StatusBar />
    </View>
  );
}

export default AlarmFeatures;

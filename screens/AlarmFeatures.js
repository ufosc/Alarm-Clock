import React from 'react';
import { View, Text } from 'react-native';
import { styles, textStyles } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import FooterTab from '../components/FooterTab';

function AlarmFeatures({ isDarkMode }) { // Accept isDarkMode as a prop
  // Define dynamic styles based on isDarkMode
  const dynamicStyles = {
    backgroundColor: isDarkMode ? 'darkgrey' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <View style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <Text style={[textStyles.titleText, { color: dynamicStyles.color }]}>Alarm Features</Text>

      <StatusBar />
      <FooterTab />
    </View>
  );
}

export default AlarmFeatures;

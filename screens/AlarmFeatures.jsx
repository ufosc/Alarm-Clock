import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDarkMode } from '../contexts/DarkModeContext'; 
import { styles, textStyles } from '../styles/styles';

function AlarmFeatures() {
  const { isDarkMode } = useDarkMode(); 

  // Define dynamic styles based on isDarkMode
  const containerStyle = isDarkMode ? styles.darkContainer : styles.container;
  const textStyle = isDarkMode ? { color: 'white' } : { color: 'black' }; 

  return (
    <View style={containerStyle}> 
      <Text style={[textStyles.titleText, textStyle]}>Alarm Features</Text>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}

export default AlarmFeatures;

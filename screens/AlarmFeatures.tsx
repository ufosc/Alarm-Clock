import React from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';
import { getDynamicStyles } from '../styles'; // Import the dynamic styles

function AlarmFeatures() {
  const { isDarkMode } = useDarkMode();

  // Get dynamic styles based on isDarkMode
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={StyleSheet.absoluteFill}>
        <Text style={[dynamicStyles.topBarTitle, { padding: 20 }]}>Alarm Features</Text>
        {/* Add your Alarm Features component content here */}
      </View>
    </SafeAreaView>
  );
}

export default AlarmFeatures;

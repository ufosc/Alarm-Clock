import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles, textStyles } from '../styles/styles'; // Adjust the path as needed
import { StatusBar } from 'expo-status-bar';
import FooterTab from '../components/FooterTab';



function AlarmFeatures() {


  return (
    <View style={styles.container}>
      <Text style={textStyles.titleText}>Alarm Features</Text>

      <StatusBar />
      <FooterTab />
    </View>
  );
}

export default AlarmFeatures;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AlarmClock from './Alarm';
import { styles, textStyles } from '../styles/styles';  // Adjust the path as needed
import { useNavigation } from '@react-navigation/native';
import FooterTab from '../components/FooterTab';


export default function Home() {
    const navigation = useNavigation();


  const [showWow, setShowWow] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.container}>


      <Text style={{ ...textStyles.titleText, padding: 20, paddingTop: 100 }}>Alarm Clock</Text>
      
      <View style={styles.box}>
        <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      </View>

      <TouchableOpacity onPress={() => setShowWow(!showWow)} style={styles.button}>
        <Text style={textStyles.buttonText}>Button</Text>
      </TouchableOpacity>
      {showWow && (
        <Text style={{ padding: 40 }}>Wow it actually farts!</Text>
      )}

        <AlarmClock style={{marginTop: 100, padding: 100, paddingTop: 100 }}/>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.button}>
            <Text style={textStyles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>



      <StatusBar style="auto" />
      <FooterTab />
    </ScrollView>
  );
}
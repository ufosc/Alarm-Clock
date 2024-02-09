import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AlarmClock from './screens/Alarm';
import FooterTab from './components/FooterTab';
import HomeScreen from './screens/Home';
import Setting from './screens/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="./screens/Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

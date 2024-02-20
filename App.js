import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AlarmFeatures from './screens/AlarmFeatures';
import Alarms from './screens/Alarms';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  // TODO: FIX DARK MODE
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Clock" component={Home} />
        <Tab.Screen name="Alarms" component={Alarms} />
        <Tab.Screen name="Alarm Features" component={AlarmFeatures} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AlarmFeatures from './screens/AlarmFeatures';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  // TODO: FIX DARK MODE
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="AlarmFeatures" component={AlarmFeatures} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

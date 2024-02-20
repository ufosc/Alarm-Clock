import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AlarmFeatures from './screens/AlarmFeatures';
import Alarms from './screens/Alarms';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  // TODO: FIX DARK MODE
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
        name="Clock" 
        component={Home} 
        options={{
          tabBarLabel: 'Clock',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Alarms" 
        component={Alarms} 
        options={{
          tabBarLabel: 'Alarms',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alarm-multiple" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Alarm Features" 
        component={AlarmFeatures} 
        options={{
          tabBarLabel: 'Alarm Features',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="mace" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

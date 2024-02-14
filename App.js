import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Setting from './screens/Setting';
import AlarmFeatures from './screens/AlarmFeatures';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} isDarkMode={isDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Setting">
          {props => <Setting {...props} isDarkMode={isDarkMode} toggleSwitch={toggleSwitch} />}
        </Stack.Screen>
        <Stack.Screen name="AlarmFeatures">
          {props => <AlarmFeatures {...props} isDarkMode={isDarkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

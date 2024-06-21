import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AlarmFeatures from './screens/AlarmFeatures';
import Alarms from './screens/Alarms';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'; // Import useDarkMode

const Tab = createBottomTabNavigator();

const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F0F0F0', // Custom background color
        primary: '#F0F0F0', // Custom primary color
        card: '#F0F0F0', // Custom color for navigation bar
        text: 'black', // Custom text color
    },
};

const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#333', // Custom background color
        primary: '#333', // Custom primary color
        card: '#333', // Custom color for navigation bar (lighter grey)
        text: 'white', // Custom text color
    },
};

export default function App() {
    return (
        <DarkModeProvider>
            <AppContent />
        </DarkModeProvider>
    );
}

function AppContent() {
    const { isDarkMode } = useDarkMode();

    // Define dynamic theme
    const navigationTheme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

    return (
        <NavigationContainer theme={navigationTheme}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Clock') {
                            iconName = 'clock';
                        } else if (route.name === 'Alarms') {
                            iconName = 'alarm-multiple';
                        } else if (route.name === 'Alarm Features') {
                            iconName = 'mace';
                        } else if (route.name === 'Settings') {
                            iconName = 'cog';
                        }

                        // You can return any component that you like here!
                        return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
                    },
                    tabBarActiveTintColor: isDarkMode ? 'white' : 'black',
                    tabBarInactiveTintColor: isDarkMode ? 'gray' : 'darkgray',
                    tabBarStyle: { backgroundColor: isDarkMode ? '#333' : '#f8f9fa' }, 
                })}
            >
                <Tab.Screen
                    name="Clock"
                    component={Home}
                    options={{
                        tabBarLabel: 'Clock',
                    }}
                />
                <Tab.Screen
                    name="Alarms"
                    component={Alarms}
                    options={{
                        tabBarLabel: 'Alarms',
                    }}
                />
                <Tab.Screen
                    name="Alarm Features"
                    component={AlarmFeatures}
                    options={{
                        tabBarLabel: 'Alarm Features',
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarLabel: 'Settings',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

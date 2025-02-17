import React, { useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';
import { styles, textStyles } from '../styles';
import { useDarkMode } from '../contexts/DarkModeContext'; // Make sure to import useDarkMode
import SettingsToggle from '../components/SettingsToggle';
import * as Notifications from 'expo-notifications';
import { SafeAreaView } from 'react-native';


function Setting() {
  useEffect(() => {
    // Request permission to send notifications (this will prompt the user)
    Notifications.requestPermissionsAsync().then(({ status }) => {
      if (status === 'granted') {
        // Schedule a notification for 5 seconds from now
        scheduleNotification();
      } else {
        console.warn('Permission to receive notifications was denied');
      }
    });

    // Clean up any scheduled notifications when the component unmounts
    return () => {
      Notifications.cancelAllScheduledNotificationsAsync();
    };
  }, []);

  const scheduleNotification = () => {
    // Set the content and trigger for the notification
    console.log('here');
    const notificationContent = {
      title: 'Hello!',
      body: 'This is a basic Expo notification.',
    };

    const trigger = {
      seconds: 5, // Notify after 5 seconds
    };

    // Schedule the notification
    Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger,
    });
  };

  useEffect(() => {
    // ... existing permission request logic

    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      // Handle notification in foreground
      console.log('Notification received in foreground:', notification.request.content.title);
      // Play a sound, display an alert, or update UI here
    });

    return () => Notifications.removeNotificationSubscription(notificationListener);
  }, []);

  const { isDarkMode, toggleSwitch } = useDarkMode(); // Use the useDarkMode hook

  const backgroundColor = isDarkMode ? '#1c1c1c' : '#ffffff';

  const textColor = isDarkMode ? 'white' : 'black';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#1c1c1c' : '#ffffff' }}>
      <View style={isDarkMode ? styles.darkTopBar : styles.topNavBar}>
        <Text style={isDarkMode ? styles.darkTopBarText : styles.topBarText}>Settings</Text>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={isDarkMode ? styles.darkToggleContainer : styles.container}>
          <SettingsToggle
            name="Dark Mode"
            value={isDarkMode}
            onValueChange={toggleSwitch}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Schedule Notification" onPress={scheduleNotification} color="#007AFF" />
        </View>
      </View>
    </SafeAreaView>
  );
  
  
  
    
}

export default Setting;

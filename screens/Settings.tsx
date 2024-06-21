import React, { useEffect } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { styles, textStyles } from '../styles';
import { useDarkMode } from '../contexts/DarkModeContext';
import SettingsToggle from '../components/SettingsToggle';
import * as Notifications from 'expo-notifications';

function Setting() {
  useEffect(() => {
    // Request permission to send notifications
    const requestPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') {
        scheduleNotification();
      } else {
        console.warn('Permission to receive notifications was denied');
      }
    };

    requestPermission();

    // Clean up any scheduled notifications when the component unmounts
    return () => {
      Notifications.cancelAllScheduledNotificationsAsync();
    };
  }, []);

  const scheduleNotification = async () => {
    const notificationContent = {
      title: 'Hello!',
      body: 'This is a basic Expo notification.',
    };

    const trigger = {
      seconds: 5,
    };

    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger,
    });
  };

  useEffect(() => {
    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification received in foreground:', notification.request.content.title);
    });

    return () => Notifications.removeNotificationSubscription(notificationListener);
  }, []);

  const { isDarkMode, toggleSwitch } = useDarkMode();

  const backgroundColor = isDarkMode ? 'darkgrey' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[textStyles.titleText, { color: textColor }]}>Settings</Text>

      <SettingsToggle
        name="Dark Mode"
        value={isDarkMode}
        onValueChange={toggleSwitch}
      />

      <Button title="Schedule Notification" onPress={scheduleNotification} />
    </View>
  );
}

export default Setting;

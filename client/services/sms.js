import * as SMS from 'expo-sms';

const sendAlarmNotification = async (phoneNumber) => {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    await SMS.sendSMSAsync(phoneNumber, 'Alarm missed! Wake up!');
  }
};

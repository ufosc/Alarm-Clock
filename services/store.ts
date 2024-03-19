import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alarm } from '../types/Alarm';

export const getAlarms = async (): Promise<any> => {
  let alarms: string = await AsyncStorage.getItem('Alarms');
  return JSON.parse(alarms);
};

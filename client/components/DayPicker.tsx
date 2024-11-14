import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';
import { getDynamicStyles } from '../styles/AlarmStyles';
import AlarmClock from './AlarmClock';
import { AlarmDays } from '../types/AlarmTypes';

interface DayPickerProps {
  days: AlarmDays;
  toggleDay: (name: string) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({ days, toggleDay }) => {
  const { isDarkMode } = useDarkMode();
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.dayContainer}>
      {Object.keys(days).map((day, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleDay(day)}
          style={[dynamicStyles.dayButton, days[day] && dynamicStyles.dayButtonSelected]} // Adjust as needed
        >
          <Text style={[dynamicStyles.dayText, days[day] && dynamicStyles.dayTextSelected]}>
            {day.charAt(0)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DayPicker;

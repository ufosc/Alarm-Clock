import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AlarmStyles';

function DayPicker({ days, toggleDay }) {
  return (
    <View style={styles.dayContainer}>
      {Object.keys(days).map((day, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleDay(day)}
          style={[styles.dayButton, days[day] && styles.dayButtonSelected]}
        >
          <Text style={[styles.dayText, days[day] && styles.dayTextSelected]}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default DayPicker;

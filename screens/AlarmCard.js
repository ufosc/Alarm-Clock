import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AlarmStyles';

const AlarmCard = ({ alarm, onToggleAlarm, onDelete }) => {
  const formattedTime = new Date(alarm.alarmTime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.name}>{alarm.alarmName}</Text>
      </View>
      <View style={styles.controls}>
        <Switch
          onValueChange={() => onToggleAlarm(alarm.id)}
          value={alarm.isActive}
          style={styles.switch}
        />
        <TouchableOpacity onPress={() => onDelete(alarm.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlarmCard;

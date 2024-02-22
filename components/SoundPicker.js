import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AlarmStyles';

function SoundPicker(
  {
    /* pass in any props needed */
  }
) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sound</Text>
      <TouchableOpacity
        onPress={() => {
          /* Placeholder for sound selection functionality */
        }}
        style={styles.touchable}
      >
        <Text style={styles.placeholder}>Select Sound</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SoundPicker;

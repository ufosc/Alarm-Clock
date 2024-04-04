import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getDynamicStyles } from '../styles/AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';

function SoundPicker(
  {
    /* pass in any props needed */
  }
) 

{
  const { isDarkMode } = useDarkMode();
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.label}>Sound</Text>
      <TouchableOpacity
        onPress={() => {
          /* Placeholder for sound selection functionality */
        }}
        style={dynamicStyles.touchable}
      >
        <Text style={dynamicStyles.placeholder}>Select Sound</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SoundPicker;

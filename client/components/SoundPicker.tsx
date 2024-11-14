import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Touchable} from 'react-native';
import { getDynamicStyles } from '../styles/AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';

function SoundPicker(
  {
    /* pass in any props needed */
  }
) {
  const { isDarkMode } = useDarkMode();
  const dynamicStyles = getDynamicStyles(isDarkMode);

  return (
    <View style={dynamicStyles.container}>
      <FlatList data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'}
        ]}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => {
            /* Placeholder for sound selection functionality */
          }}>
            <Text style={dynamicStyles.textList}>{item.key}</Text>
          </TouchableOpacity>
      }
      />
    </View>
  );
}

export default SoundPicker;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { textStyles, styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';


function FooterTab() {
  const navigation = useNavigation();

  return (
    <View style={styles.tab}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={textStyles.buttonText}>Clock</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AlarmFeatures')}>
        <Text style={textStyles.buttonText}>Alarm Features</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text style={textStyles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterTab;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { textStyles, styles } from '../styles/styles';

function FooterTab() {
  return (
    <View style={styles.tab}>
      <TouchableOpacity>
        <Text style={textStyles.buttonText}>Clock</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyles.buttonText}>Alarm Features</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterTab;

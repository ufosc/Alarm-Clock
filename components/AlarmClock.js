import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Platform } from 'react-native';
import { styles, textStyles } from '../styles/styles';
import { getDynamicStyles } from '../styles/AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';
import DayPicker from './DayPicker';
import AlarmNameInput from './AlarmNameInput';
import SoundPicker from './SoundPicker';
import SnoozeSwitch from './SnoozeSwitch';
import TimePickerIOS from './TimePickerIOS';
import TimePickerAndroid from './TimePickerAndroid';

function AlarmClock({ onAlarmSave, editingAlarm }) {
  const { isDarkMode } = useDarkMode(); 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [alarmName, setAlarmName] = useState('');
  const [days, setDays] = useState({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });
  const [isSnoozeEnabled, setIsSnoozeEnabled] = useState(true);
  const [isAlarmSettingVisible, setAlarmSettingVisible] = useState(false);
  const isEditing = editingAlarm != null;
  const dynamicStyles = getDynamicStyles(isDarkMode);

  const toggleDay = (day) => {
    setDays({ ...days, [day]: !days[day] });
  };

  const saveAlarm = () => {
    const alarmData = {
      id: isEditing ? editingAlarm.id : Date.now(), // Use the existing ID or generate a new one
      alarmTime,
      alarmName,
      days,
      // sound, // When you've implemented sound selection
      isSnoozeEnabled,
    };
    onAlarmSave(alarmData);

    // Close the alarm setting modal
    closeAlarmSetting();
  };

  const openAlarmSetting = () => {
    setAlarmSettingVisible(true);
  };

  const closeAlarmSetting = () => {
    setAlarmSettingVisible(false);
  };

  return (
    <View style={dynamicStyles.container}>
      <TouchableOpacity onPress={openAlarmSetting} style={styles.button}>
        <Text style={textStyles.buttonText}>Set Alarm Time</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isAlarmSettingVisible}
        onRequestClose={closeAlarmSetting}
        style={dynamicStyles.modalContainer} 
      >
        <View style={{ flex: 1, paddingTop: 22 }}>
          <View style={dynamicStyles.topNavBar}>
            <TouchableOpacity onPress={closeAlarmSetting}>
              <Text style={dynamicStyles.topBarText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={dynamicStyles.topBarTitle}>{isEditing ? 'Edit Alarm' : 'Add Alarm'}</Text>
            <TouchableOpacity onPress={saveAlarm}>
              <Text style={dynamicStyles.topBarText}>Save</Text>
            </TouchableOpacity>
          </View>

          {Platform.OS === 'ios' ? (
            <TimePickerIOS alarmTime={alarmTime} setAlarmTime={setAlarmTime} />
          ) : (
            <TimePickerAndroid
              isPickerVisible={isDatePickerVisible}
              setPickerVisible={setDatePickerVisibility}
              alarmTime={alarmTime}
              setAlarmTime={setAlarmTime}
            />
          )}

          <DayPicker days={days} toggleDay={toggleDay} />
          <AlarmNameInput alarmName={alarmName} setAlarmName={setAlarmName} />
          <SoundPicker /* pass any props needed */ />
          <SnoozeSwitch isSnoozeEnabled={isSnoozeEnabled} setIsSnoozeEnabled={setIsSnoozeEnabled} />
        </View>
      </Modal>
    </View>
  );
}

export default AlarmClock;

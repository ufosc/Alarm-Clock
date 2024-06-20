import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { settingStyles } from '../styles/index';
import { useDarkMode } from '../contexts/DarkModeContext';

interface SettingsToggleProp {
    name: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const SettingsToggle: React.FC<SettingsToggleProp> = ({ name, value, onValueChange }) => {
    const { isDarkMode } = useDarkMode(); // Get dark mode state
    const containerStyle = isDarkMode ? styles.darkContainer : settingStyles.container;
    const textStyle = isDarkMode ? { color: 'white' } : { color: 'black' };

    return (
        <View style={containerStyle}>
            <View style={settingStyles.content}>
                <Text style={[settingStyles.settingText, textStyle]}>{name}</Text>
            </View>
            <View style={settingStyles.controls}>
                <Switch
                    style={settingStyles.toggle}
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: 'gray', true: 'green' }}
                    thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    darkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333', // Dark mode background color
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default SettingsToggle;

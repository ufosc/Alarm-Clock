import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles, textStyles } from '../styles'; // Adjust the path as needed

const Setting = () => {
    const [toggle, setToggle] = useState(false);

    const toggleSwitch = () => setToggle(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={textStyles.titleText}>Settings</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={toggle}
            />
        </View>
    );
};

export default Setting;
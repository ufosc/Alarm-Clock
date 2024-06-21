import { StyleSheet, Dimensions } from 'react-native';
import * as AlarmStyles from './AlarmStyles';
import { useDarkMode } from '../contexts/DarkModeContext';

const isDarkMode = useDarkMode;

const getDynamicStyles = (isDarkMode: boolean) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? '#1212' : '#fff',
            padding: 20,
            paddingBottom: 5,
            marginTop: 20,
        },
        button: {
            backgroundColor: isDarkMode ? '#333' : 'lightgreen',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginBottom: 50,
        },
        deleteButtonText: {
            color: 'red',
            fontSize: 14,
        },
        box: {
            width: 300,
            height: 100,
            backgroundColor: 'white',
            padding: 30,
            margin: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'green',
            alignItems: 'center',
        },
        alarmTimeBox: {
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'green',
            alignItems: 'center',
        },
        time: {
            fontWeight: 'bold',
            fontSize: 30,
            color: 'green',
        },
        tab: {
            backgroundColor: '#1212',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 40,
        },
        page: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        topNavBar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
        },
        topBarText: {},
        topBarTitle: {
            fontWeight: 'bold',
        },
    });
};

const styles = getDynamicStyles(isDarkMode);

const textStyles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    timeText: {
        alignSelf: 'flex-start',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

const settingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    content: {
        flexDirection: 'column',
    },
    settingText: {
        fontSize: 20,
        flex: 1,
    },
    controls: {
        alignItems: 'flex-end',
    },
    toggle: {},
});

export { styles, textStyles, settingStyles };

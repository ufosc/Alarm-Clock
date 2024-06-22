// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const getDynamicStyles = (isDarkMode) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000000' : '#fff', // Use pure black for dark mode
      padding: 20,
      paddingBottom: 5,
      marginTop: 20,
    },
    button: {
      backgroundColor: 'lightgreen',
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
      backgroundColor: isDarkMode ? '#333' : 'white', // Adjust color for dark mode
      padding: 30,
      margin: 10,
      borderRadius: 700,
      borderWidth: 2,
      borderColor: 'green',
      alignItems: 'center',
    },
    alarmTimeBox: {
      backgroundColor: isDarkMode ? 'blue' : 'lightblue', // Adjust color for dark mode
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
      backgroundColor: isDarkMode ? 'darkgray' : 'gray',
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
    topBarText: {
      color: isDarkMode ? 'white' : 'black',
    },
    topBarTitle: {
      fontWeight: 'bold',
      color: isDarkMode ? 'white' : 'black',
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : 'white', // Adjust color for dark mode
      padding: 20,
      marginVertical: 10,
      borderRadius: 8,
      borderColor: isDarkMode ? 'lightgray' : 'gray',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
      color: isDarkMode ? 'white' : 'black',
    },
    time: {
      fontSize: 24,
      color: isDarkMode ? 'lightgray' : 'black',
    },
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 5,
    marginTop: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    paddingBottom: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightgreen',
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
    backgroundColor: 'gray',
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
  topBarText: {
    color: 'orange',
  },
  topBarTitle: {
    fontWeight: 'bold',
  },
});

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

export { styles, textStyles, settingStyles, getDynamicStyles };

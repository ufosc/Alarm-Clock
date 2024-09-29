import { StyleSheet } from 'react-native';

function getDynamicStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    container: {
      borderBottomColor: isDarkMode ? 'white' : 'grey',
      backgroundColor: isDarkMode ? '#333' : 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
    },
    label: {
      fontSize: 18,
      color: isDarkMode ? 'white' : 'black',
    },
    textInput: {
      fontSize: 18,
      color: isDarkMode ? 'white' : 'black',
      flex: 1,
      textAlign: 'right',
    },
    modalContainer: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: isDarkMode ? '#333' : 'white',
    },
    topBarTitle: {
      fontWeight: 'bold',
      color: isDarkMode ? 'white' : 'black',
    },
    topNavBar: {
      backgroundColor: isDarkMode ? '#444' : '#f0f0f0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    topBarText: {
      color: isDarkMode ? 'white' : 'black',
    },
    dayContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    dayButton: {
      borderWidth: 1,
      borderColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
    dayButtonSelected: {
      backgroundColor: isDarkMode ? 'lightgrey' : 'green',
    },
    dayText: {
      color: isDarkMode ? 'green' : 'black',
    },
    dayTextSelected: {
      color: isDarkMode ? 'green' : 'white',
    },

    touchable: {
      backgroundColor: isDarkMode ? '#444' : 'lightgray',
      borderColor: isDarkMode ? 'lightgray' : 'gray',
      flex: 1,
    },
    placeholder: {
      color: isDarkMode ? 'gray' : 'black',
      fontSize: 18,
      textAlign: 'right',
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : 'white',
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
    content: {
      flexDirection: 'column',
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
    controls: {
      alignItems: 'flex-end',
    },
    switch: {},
    deleteButton: {
      marginTop: 10,
      fontSize: 40
    },
    deleteButtonText: {
      color: 'red',
    },
  });
}

export { getDynamicStyles };

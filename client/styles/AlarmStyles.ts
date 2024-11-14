import { StyleSheet } from 'react-native';

let customLightGray = '#EDEDED';

function getDynamicStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    container: {
      borderBottomColor: isDarkMode ? 'white' : 'grey',
      backgroundColor: isDarkMode ? 'darkgrey' : 'white',
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
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: isDarkMode ? '#333' : `${customLightGray}`,
      borderRadius: 16,
      margin: 16,
    },
    dayButton: {
      borderWidth: 0,
      borderColor: isDarkMode ? `${customLightGray}` : 'gray',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    dayButtonSelected: {
      backgroundColor: isDarkMode ? 'lightgrey' : 'green',
    },
    dayText: {
      color: isDarkMode ? 'green' : 'black',
      fontWeight : 'bold',
      fontSize: 22,
    },
    dayTextSelected: {
      color: isDarkMode ? 'green' : 'white',
    },

    touchable: {
      backgroundColor: isDarkMode ? '#444' : `${customLightGray}`,
      borderColor: isDarkMode ? `${customLightGray}` : 'gray',
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
      borderColor: isDarkMode ? `${customLightGray}` : 'gray',
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
      color: isDarkMode ? `${customLightGray}` : 'black',
    },
    controls: {
      alignItems: 'flex-end',
    },
    switch: {},
    deleteButton: {
      marginTop: 10,
    },
    deleteButtonText: {
      color: 'red',
    },
    textList: {
      fontSize: 24,
      margin: 10,
      borderBottomColor: isDarkMode ? 'white' : 'black',
      borderBottomWidth: 1
    },
  });
}

export { getDynamicStyles };

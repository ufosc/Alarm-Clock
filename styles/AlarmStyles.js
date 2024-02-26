import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  label: {
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    flex: 1,
    textAlign: 'right',
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  dayButtonSelected: {
    backgroundColor: 'green',
  },
  dayText: {
    color: 'black',
  },
  dayTextSelected: {
    color: 'white',
  },
  card: {
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
  time: {
    fontSize: 24,
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
  touchable: {
    flex: 1,
  },
  placeholder: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'right',
  },
});

export const getDynamicStyles = (isDarkMode) => StyleSheet.create({
  container: {
    ...styles.container,
    borderBottomColor: isDarkMode ? 'darkgrey' : 'grey',
    backgroundColor: isDarkMode ? '#333' : 'white',
  },
  label: {
    ...styles.label,
    color: isDarkMode ? 'white' : 'black',
  },
  // ... Add dark mode styles for other components
});

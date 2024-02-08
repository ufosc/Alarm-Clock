import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingBottom: 500,
      marginTop: 100
    },
    button: {
      backgroundColor: 'lightgreen',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 50
    },
    box: {
      width: 300,
      height: 100,
      backgroundColor: 'white',
      padding: 30,
      margin: 10,
      borderRadius: 700,
      borderWidth: 2,
      borderColor: "green",
      alignItems: "center"
    },
    time:
    {
      // padding: 80,
      fontWeight: "bold",
      fontSize: 30,
      color: "green"
  
  
    }
  
  });

const textStyles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

export { styles, textStyles };

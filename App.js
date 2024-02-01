import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';




export default function App() {

  const [showWow, setShowWow] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.container}>


      <Text style={{ ...textStyles.titleText, padding: 20, paddingTop: 100 }}>Alarm Clock</Text>
      <View style={styles.box}>

        <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      </View>
      <TouchableOpacity onPress={() => setShowWow(!showWow)} style={styles.button}>
        <Text style={textStyles.buttonText}>Button</Text>
      </TouchableOpacity>

      {showWow && (
        <Text style={{ padding: 40 }}>Wow it actually works!</Text>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 500
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
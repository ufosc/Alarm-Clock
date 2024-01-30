import { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/alarm.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {

    async function configAudio() {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        playThroughEarpieceAndroid: false
      });
    }
    configAudio();
    
  })

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Haptics.selectionAsync</Text>
      <View style={styles.buttonContainer}>
        <Button title="Selection" onPress={() => Vibration.vibrate(100)} />
        <Button title="Sound" onPress={() => playSound()} />
      </View>
      <Text style={styles.text}>Haptics.notificationAsync</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Success"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
          }
        />
        <Button
          title="Error"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
              )
          }
        />
        <Button
          title="Warning"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
              )
          }
        />
      </View>
      <Text style={styles.text}>Haptics.impactAsync</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Light"
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          }
        />
        <Button
          title="Medium"
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          }
        />
        <Button
          title="Heavy"
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
});

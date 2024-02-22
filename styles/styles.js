import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // width: 300,
    // height: 100,
    backgroundColor: 'blue',
    padding: 10,
    // margin: 10,
    borderRadius: 700,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
  },
  time: {
    // padding: 80,
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
    // color: 'orange',
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

export { styles, textStyles };

import { StyleSheet,  Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
  },
  headerButton: {
    width: 60,
    alignItems: 'center',
  },
  divider: {
    height: 35,
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderColor: '#859398',
  },
  headerTitleText: {
    fontFamily: 'Default',
    fontSize: 18
  },
  scrollviewContainer:{
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '100%',
  },
  iconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Default',
    fontSize: 18,
    marginBottom: 5,
  },
  createdAt:{
    fontFamily: 'Default',
    color: 'grey',
    fontSize: 16,
  },
  messageContainer: {
    padding: 15,
  },
  message: {
    fontFamily: 'Default',
    fontSize: 16,
  }
})

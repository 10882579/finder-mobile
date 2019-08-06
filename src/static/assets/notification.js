import { StyleSheet,  Dimensions } from 'react-native';
import { Constants } from 'expo';
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
})

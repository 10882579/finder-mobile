import { StyleSheet,  Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 0
  },
  headerButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: 50,
    overflow: 'hidden',
  },
  headerButton: {
    width: 50,
    alignItems: 'center',
  },
  divider: {
    height: 32,
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderColor: '#859398',
  },
  headerTitleText: {
    fontFamily: 'Default',
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
})

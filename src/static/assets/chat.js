import { StyleSheet,  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    paddingHorizontal: 7,
  },
  conversationItem: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 5,
  },
  imageContainer:{
    height: 80,
    width: 80,
    borderRadius: radius,
    overflow: 'hidden'
  },
  usernameContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  username: {
    fontFamily: 'Default',
    fontSize: 16
  },
})

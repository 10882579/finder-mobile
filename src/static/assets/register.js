import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  registerContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  registerBtn: {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 18,
    fontFamily: 'Default',
  },
  registerBodyContainer: {
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  header: {
    top: 0,
    width: width,
    position: 'absolute',
    backgroundColor: 'white',
    height: Constants.statusBarHeight + 50,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 999,
  },
  headerBodyContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnContainer: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    marginVertical: 30,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain'
  },
  registration: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userNameInputContainer: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userNameInput: {
    paddingHorizontal: 10,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: 4,
    width: width / 2 - 25,
  },
  inputContainer: {
    marginTop: 10,
    borderColor: 'lightgrey',
    borderRadius: 4,
    borderWidth: 0.5,
    width: width -40,
    height: 50,
    flexDirection: 'row'
  },
  inputIcon:{
    width: 60,
    height: 49,
    marginRight: 10,
    borderRightWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: 'Default',
    flex: 1,
  },
  countryCode:{
    fontSize: 17,
    fontFamily: 'Default',
    color: 'lightgrey'
  },
  submitBtn: {
    width: width - 40,
    height: 50,
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16222A'
  },
  submitText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20,
  }
})

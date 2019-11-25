import { StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16222A',
  },
  header: {
    position: 'absolute',
    top: 0
  },
  logoViewContainer: {
    width: width,
    height: height*3/5,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android:{
        paddingTop: Constants.statusBarHeight,
      }
    })
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 150,
    width: 190,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#1aa3ff'
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain'
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginInputContainer: {
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: 'white',
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  closeLoginContainer:{
    width: width,
    height: 50,
    overflow: 'hidden',
  },
  closeLoginButton:{
    width: 50,
    height: 50,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: 'center',
  },
  inputContainer: {
    width: width - 80,
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  loginInput: {
    flex:1,
    height: '100%',
    fontSize: 17,
    fontFamily: 'Default',
    marginLeft: 10,
  },
  errorContainer: {
    marginTop: 20,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontFamily: 'Default',
    color: '#dc3545',
    fontSize: 14,
  },
  errorStyle: {
    borderBottomColor: '#dc3545'
  },
  submitBtn: {
    width: width - 80,
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#095D00'
  },
  submitText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20,
  },
  registerContainer: {
    height: 45,
    width: width - 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontFamily: 'Default',
    fontSize: 17,
  }
})

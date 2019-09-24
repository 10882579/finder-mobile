import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  registerContainer: {
    flex: 1,
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  userNameInputContainer: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userNameInput: {
    paddingLeft: 10,
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
  errorContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: width,
    alignItems: 'flex-start',
  },
  errorText: {
    fontFamily: 'Default',
    color: '#dc3545',
    fontSize: 14,
  },
  errorStyle: {
    borderColor: '#dc3545'
  },
  submitBtn: {
    width: width - 40,
    height: 50,
    marginTop: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003d66'
  },
  submitText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20,
  }
})

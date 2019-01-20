import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16222A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    position: 'absolute',
    top: 0
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
  inputContainer: {
    width: width - 80,
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  loginInput: {
    flex:1,
    height: '100%',
    color: 'white',
    fontSize: 17,
    fontFamily: 'Default',
    marginLeft: 10,
  },
  submitBtn: {
    width: width - 80,
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1aa3ff'
  },
  submitText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20,
  }
})

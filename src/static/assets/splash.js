import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16222A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
})

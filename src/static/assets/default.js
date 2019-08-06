import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: { backgroundColor: '#f2f2f2', flex: 1},
  customHeaderContainer: {
    width: width,
    padding: 0,
    paddingHorizontal: 5,
    borderWidth: 0,
    borderBottomWidth: 0,
    height: 60 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: '#16222A',
  },
  shadow: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: 'lightgrey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
      }
    })
  },
  headerIconContainer:{
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerIcon: {
    fontSize: 24,
    color: 'white',
  },
  headerBodyContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  headerBodyText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20
  },
  body:{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#F8F9FA'
  },
  flex: {
    flex: 1
  },
  displayInLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#16222A",
  },
  loadingText: {
    fontFamily: 'Default',
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
})

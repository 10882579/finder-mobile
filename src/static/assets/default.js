import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: { backgroundColor: '#f2f2f2', flex: 1},
  customHeaderContainer: {
    width: width,
    borderBottomWidth: 0,
    padding: 0,
    paddingHorizontal: 5,
    borderWidth: 0,
    height: 50 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: '#16222A',
  },
  transparentHeaderContainer:{
    position: 'absolute',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: '#16222A',
    top: Constants.statusBarHeight + 10,
    marginHorizontal: 10,
    height: 50,
    width: width - 20,
    borderBottomWidth: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 4,
    zIndex: 999
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
  alignCenterHorizontal: {
    alignItems: 'center',
  },
  alignCenterVertical: {
    justifyContent: 'center',
  },
  displayInLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  alert:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  alertContainer: {
    backgroundColor:'white',
    width: width - 40,
    borderRadius: 5,
    overflow: 'hidden'
  },
  errorLogoContainer:{
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    width: '100%',
    justifyContent: 'center',
  },
  errorText: {
    fontFamily: 'Default',
    marginBottom: 10,
  },
  dismissBtn: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3575a',
  },
  dismissBtnText: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Default'
  }
})

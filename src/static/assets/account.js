import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  container: {
    width: width,
    height: 450,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  topContainer: {
    width: width,
    height: '50%',
    backgroundColor: '#16222A',
  },
  accountImageContainer: {
    position: 'absolute',
    top: 140,
    left: ((width)/2)-85,
    width: 170,
    height: 170,
    borderRadius: radius,
    backgroundColor: 'white',
    padding: 10,
    zIndex: 999,
  },
  accountImage: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: radius,
    overflow: 'hidden',
  },
  accountImageUploadButton:{
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  bottomContainer: {
    paddingTop: 80,
    width: width,
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  userNameContainer:{
    height: 45,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    fontFamily: 'Default',
    fontSize: 22,
  },
  reatingContainer: {
    height: 45,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigation: {
    width: width,
    height: 55,
    flexDirection: 'row',
  },
  navigationList: {
    height: '100%',
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyContainer:{
    flex: 1,
    width: width,
    backgroundColor: '#f7f7f7',
  },
  listItem: {
    width: width - 20,
    height: 120,
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  itemImageContainer: {
    width: (width - 20) /2,
    height: '100%',
    backgroundColor: 'white'
  },
  itemInformation: {
    width: (width - 20) /2,
    height: '100%',
    backgroundColor: 'white'
  },
  itemTitleContainer: {
    alignItems: 'flex-start',
    width: '100%',
    height: 80,
    padding: 10,
  },
  itemTitle:{
    fontFamily: 'Default',
    fontSize: 15,
    textAlign: 'justify',
  },
  itemPriceContainer:{
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  itemPrice: {
    fontFamily: 'Default',
    color: 'grey',
    fontSize: 18
  }
})

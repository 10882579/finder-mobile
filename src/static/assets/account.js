import { StyleSheet, Dimensions } from 'react-native';
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
    marginBottom: 10,
  },
  topContainer: {
    width: width,
    height: '50%',
    backgroundColor: '#16222A',
  },
  accountImageContainer: {
    position: 'absolute',
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
    width: width,
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  userNameContainer:{
    marginTop: 80,
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
    height: 55 + Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  navigationList: {
    height: 55,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationListBorder: {
    position: 'absolute',
    bottom: 0,
    width: width/3,
    height: 3,
    backgroundColor: '#1aa3ff'
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
  },
  followingUserContainer:{
    width: width -20,
    height: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
  },
  followingUserImage: {
    height: 80,
    width: 80,
    borderRadius: radius,
    overflow: 'hidden',
  },
  followingUserNameContainer: {
    padding: 10,
    width: width - 100,
    height: '50%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  followingUserName: {
    fontFamily: 'Default',
    fontSize: 18,
    width: width - 140,
  },
  likeButtonContainer: {
    position: 'absolute',
    right: 10,
  },
  likeIcon: {
    fontSize: 18,
    color: 'red',
  }
})

import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: width,
    top: 0,
  },
  topContainer: {
    width: width,
    backgroundColor: '#16222A',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5,
  },
  backBtnContainer:{
    width: 50,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountContainer: {
    position: 'absolute',
    left: 60,
    right: 60,
  },
  accountImageContainer: {
    marginVertical: 7.5,
    borderRadius: radius,
    backgroundColor: 'white',
  },
  accountImage: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: radius,
    overflow: 'hidden',
  },
  accountImageUploadButton:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 25,
    bottom: 0,
  },
  nameContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 55,
  },
  name: {
    fontFamily: 'Default',
  },
  ratingContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontFamily: 'Default',
    fontSize: 17,
    marginRight: 7,
    color: 'grey',
  },
  ratingStarContainer:{
    flexDirection: 'row',
  },
  ratingStar: {
    width: 20,
    fontSize: 20,
    color: 'gold',
    marginHorizontal: 2,
  },
  bottomContainer: {
    width: width,
    overflow: 'hidden'
  },
  navigationContainer: {
    width: width,
    height: 55,
    flexDirection: 'row',
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
    width: width/3,
    bottom: 0,
    height: 3,
    backgroundColor: '#1aa3ff'
  },
  scrollviewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    paddingTop: 10,
    paddingHorizontal: 5,
    marginTop: 450,
  },
  listItem: {
    width: width/2 - 15,
    marginHorizontal: 5,
    height: width *2/3,
    marginBottom: 15,
    borderRadius: 4,
    backgroundColor: 'lightgrey',
  },
  itemInformation: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  itemTitleContainer: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  itemTitle:{
    fontFamily: 'Default-Bold',
    fontSize: 17,
    color: 'white',
  },
  itemPriceContainer:{
    top: 5,
    right: 5,
    height: 30,
    borderRadius: 4,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  itemPrice: {
    fontFamily: 'Default-Bold',
    fontSize: 15,
    color: '#01B18C',
  },
  followScrollviewContainer: {
    flex: 1,
    width: width,
    paddingVertical: 10,
    marginTop: 450,
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
    borderWidth: 1,
    borderColor: '#16222A',
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
    fontSize: 22,
    color: '#1aa3ff',
  },
  contactContainer: {
    position: 'absolute',
    borderRadius: radius,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    left: ((width/2)-145),
    bottom: 235,
    width: 50,
    height: 50,
    zIndex: 999,
  },
  likeContainer: {
    position: 'absolute',
    borderRadius: radius,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    right: ((width/2)-145),
    bottom: 235,
    width: 50,
    height: 50,
    zIndex: 999,
  },
  userScreenNavList: {
    height: 55,
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userScreenNavListBorder: {
    position: 'absolute',
    bottom: 0,
    width: width/2,
    height: 3,
    backgroundColor: '#1aa3ff'
  },
})

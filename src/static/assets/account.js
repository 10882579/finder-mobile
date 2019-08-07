import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: width,
    height: height*3/5,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#16222A',
  },
  nameContainer:{
    marginTop: width /4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  name: {
    fontFamily: 'Default',
    fontSize: 22,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 22,
    fontSize: 22,
    marginHorizontal: 2,
  },
  accountContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: width /2,
    height: width /2,
    top: (height*3/10)-(width/4),
  },
  accountImageContainer: {
    borderRadius: radius,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 8,
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
  navigationContainer: {
    flex: 1,
    padding: 10,
  },
   navigationList: {
    height: height/15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
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
  navigationText: {
    fontSize: 17,
    fontFamily: 'Default',
    marginLeft: 20,
  },
  detailContainer:{
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    width: width,
    zIndex: 999999
  },
  detailHeader: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#16222A',
  },
  scrollviewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  listItem: {
    width: width/2 - 15,
    marginHorizontal: 5,
    height: width/2,
    marginBottom: 15,
  },
  itemTitleContainer: {
    marginTop: 7,
    paddingHorizontal: 5,
  },
  itemTitle:{
    fontFamily: 'Default-Bold',
    fontSize: 17,
  },
  itemPriceContainer:{
    paddingHorizontal: 5,
  },
  itemPrice: {
    fontFamily: 'Default',
    fontSize: 15,
    color: '#01B18C',
  },
  followScrollviewContainer: {
    flex: 1,
    width: width,
    paddingVertical: 10,
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
  followingUsernameContainer: {
    flex: 1,
    padding: 10,
  },
  usernameContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  followingUserName: {
    fontFamily: 'Default',
    fontSize: 20,
    flex: 1,
  },
  likeButtonContainer: {
    width: 30,
    alignItems: 'center',
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
    left: (width / 8) - 25,
    bottom: 20,
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
    right: (width / 8) - 25,
    bottom: 20,
    width: 50,
    height: 50,
    zIndex: 999,
  },
  // commentListItem: {
  //   width: width - 20,
  //   backgroundColor: 'white',
  //   marginHorizontal: 5,
  //   borderRadius: 5,
  //   padding: 15,
  // },
  // reviewerContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 10,
  // },
  // reviewerImage: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: radius,
  //   borderWidth: 1,
  //   borderColor: 'darkgrey',
  //   overflow: 'hidden',
  //   marginRight: 10,
  // },
  // reviewerName: {
  //   fontFamily: 'Default',
  //   fontSize: 17,
  // },
  // reviewRatingContainer: {
  //   width: width - 110,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // reviewerRatingStar: {
  //   width: 17,
  //   fontSize: 16,
  //   marginHorizontal: 0,
  // },
  // reviewCreatedAt:{
  //   fontFamily: 'Default',
  //   color: 'grey',
  //   fontSize: 16,
  // },
  // review: {
  //   fontFamily: 'Default',
  //   fontSize: 15,
  //   textAlign: 'justify',
  // },
})

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
    fontFamily: 'Default-Bold',
    fontSize: 20,
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
})

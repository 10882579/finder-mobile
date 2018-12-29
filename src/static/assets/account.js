import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Constants } from 'expo';
const winWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  topContainer:{
    width: winWidth,
    borderWidth: 0,
    backgroundColor: '#16222A',
    marginBottom: 5,
  },
  topContainerHeight: {
    height: winWidth * 2/3 - 40
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 5,
    borderWidth: 0,
    paddingTop: Constants.statusBarHeight,
    height: 50 + Constants.statusBarHeight,
    flexDirection: 'row',
    zIndex: 999,
  },

  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImageContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 10,
  },
  accountImageChangeButton:{
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  userImageContainerDimension: {
    width: winWidth/3 - 45,
    height: winWidth/3 - 45,
    marginHorizontal: 20,
  },
  userNameContainer: {
    width: winWidth * 2/3,
    justifyContent: 'center',
  },
  userFullName: {
    color: 'white',
    fontFamily: 'Default',
  },
  userFullNameForAccount: {
    fontSize: 22,
    marginLeft: 10,
  },
  accountImageSelect: {
    position: 'absolute',
    bottom:  0,
    height: '20%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // counterContainer: {
  //   position: 'absolute',
  //   top: 20,
  //   height: 100,
  //   width: winWidth -40,
  //   marginHorizontal: 20,
  //   backgroundColor: 'rgb(25, 39, 48)',
  //   borderRadius: 5,
  //   ...Platform.select({
  //     android: {
  //       elevation: 2,
  //     },
  //     ios: {
  //       shadowColor: '#16222A',
  //       shadowOffset: { width: 0, height: 3 },
  //       shadowOpacity: 0.9,
  //     }
  //   })
  // },
  accountActivityListContainer: {
    width: winWidth,
    height: 300,
    paddingHorizontal: 20,
  },
  activityItem: {
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey'
  },
  activityItemName: {
    fontFamily: 'Default',
    fontSize: 16,
  },
  postListItem: {
    flexDirection: 'row',
    marginHorizontal: 15,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingVertical: 15,
    overflow: 'hidden'
  },
  postListItemImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    marginRight: 10,
    backgroundColor: '#F8F9FA',
  },
  postItemDetail: {
    flex: 1,
    justifyContent: 'space-between'
  },
  postItemTitleContainer:{
    justifyContent: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  postItemTitle: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Default',
  },
  postItemPostedStatusContainer:{
    width: 'auto',
    justifyContent: 'center',
  },
  postItemPrice: {
    fontFamily: 'Default',
    fontSize: 15,
    // letterSpacing: 0.5,
    color: '#007acc'
  },
  postItemDate: {
    color: '#859398',
    fontFamily: 'Default'
  },

  postListItemUserImage: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    marginRight: 10,
    backgroundColor: 'white',
  },
  postItemUsernameContainer: {
    justifyContent: 'center'
  },
  postItemUsername: {
    marginHorizontal: 15,
    fontFamily: 'Default',
    fontSize: 19,
    // letterSpacing: 1,
  },
  soldStatusContainer:{
    position: 'absolute',
    right: -60,
    top: 65,
    height: 20,
    width: Math.sqrt(140*140 + 140*140),
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-45deg'}]

  }
})

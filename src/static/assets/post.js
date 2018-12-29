import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { Constants } from 'expo';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height
const hyp = Math.sqrt((winWidth * winWidth + winHeight * winHeight))
module.exports = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#16222A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  imageContainer: {
    width: winWidth,
    height: winWidth + Constants.statusBarHeight + 50,
    backgroundColor: 'rgba(22, 34, 42, 0.9)',
    overflow: 'hidden'
  },
  soldLabelContainer:{
    position: 'absolute',
    top: 0,left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  soldLabel:{
    height: 50,
    width: hyp,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkred',
    transform: [{ rotate: '-45deg'}]
  },
  soldLabelText:{
    color: 'white',
    fontFamily: 'Default',
    fontSize: 18
  },
  priceContainer:{
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 150,
    height: 35,
    paddingHorizontal: 7,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price:{
    color: 'white',
    fontFamily: 'Default',
    fontSize: 20,
  },
  imagePagination: {
    width: 100,
    height: 35,
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  itemInformationContainer: {
    padding: 20,
    backgroundColor: '#16222A',
    flexDirection: 'row'
  },
  itemInformationLeftContainer:{

  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Default',
  },
  locationContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  locationIcon: {
    marginRight: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  location: {
    color: '#1aa3ff',
    fontFamily: 'Default',
    fontSize: 15,
  },
  contactContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007acc',
    zIndex: 99,
    borderRadius: 100,
    overflow: 'hidden'
  },
  contactIcon: {
    fontSize: 32,
    color: 'white',
  },
  userInformationContainer:{
    backgroundColor: '#16222A',
    paddingHorizontal: 20,
    height: 70,
  },
  userContainer:{
    borderTopWidth: 1,
    borderTopColor: 'grey',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userImageContainer:{
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: 'hidden'
  },
  userDetailIcon: {
    fontSize: 25,
    color: 'white',
  },
  userName: {
    color: 'white',
    fontFamily: 'Default',
    // letterSpacing: 0.5,
    fontSize: 17,
    marginHorizontal: 20,
  },
  itemDescriptionContainer:{
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  descriptionBlock: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  descriptionBlockLeft: {
    width: 'auto',
    maxWidth: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  descriptionBlockRight: {
    // paddingRight: 10,
  },
  descriptionBlockIcon: {
    fontSize: 35,
    color: '#003d66',
  },
  descriptionName: {
    fontSize: 12,
    fontFamily: 'Default',
  },
  descriptionValue: {
    fontSize: 16,
    fontFamily: 'Default',
    color: '#007acc',
  },
  descriptionDetail: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'white'
  },
  descriptionDetailValue: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'Default',
    textAlign: 'justify'
  },
  negotiationContainer:{
    backgroundColor: 'white',
  },
  negotiationInnerContainer:{
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'darkgrey',
    marginHorizontal: 15,
    paddingVertical: 20

  },
  negotiationContainerIcon:{
    fontSize: 22,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalInnerContainer:{
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalBottomContainer:{
    height: 'auto',
    width: 'auto',
    margin: 20,
  },
  confirmationContainer:{
    height: 50,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F44236',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmationText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Default',
    // letterSpacing: 1,
  },
  warningContainer: {
    width: winWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffc107',
    padding: 20,
    flexDirection: 'row',
  },
  warningIconContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningTextContainer:{
    flex: 1,
  },
  warningText: {
    fontFamily: 'Default',
    // letterSpacing: 1,
  }
})

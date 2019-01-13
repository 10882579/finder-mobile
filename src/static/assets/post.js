import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');
const hyp = Math.sqrt((width * width + height * height))
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#16222A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  imageContainer: {
    width: width,
    height: width + Constants.statusBarHeight + 50,
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
  itemInfoContainer: {
    backgroundColor: '#16222A',
    flexDirection: 'row'
  },
  titleContainer:{
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Default',
  },
  locationContainer: {
    paddingHorizontal: 15,
    height: 45,
    alignItems: 'center',
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
  editBtnContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007acc',
    zIndex: 99,
    borderRadius: radius,
    overflow: 'hidden'
  },
  contactIcon: {
    fontSize: 32,
    color: 'white',
  },
  userInfoContainer:{
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
    borderRadius: radius,
    overflow: 'hidden'
  },
  userDetailIcon: {
    fontSize: 25,
    color: 'white',
  },
  userName: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 17,
    marginHorizontal: 20,
  },
  itemDescriptionContainer:{
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
  },
  descriptionBlock: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  blockIconContainer: {
    height: '100%',
    width: 'auto',
    justifyContent: 'center',
    marginRight: 10,
  },
  blockIcon: {
    fontSize: 35,
    color: '#003d66',
  },
  blockContextContainer: {
    justifyContent: 'center',
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
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  negotiationInnerContainer:{
    flexDirection: 'row',
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
  },
  warningContainer: {
    width: width,
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
  }
})

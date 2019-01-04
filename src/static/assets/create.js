import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({

  stepContainer: {
    width: width,
    height: 'auto',
  },
  imageUploadContainerIcon:{
    fontSize: 40,
    color: 'white'
  },
  imageUploadContainer: {
    width: width,
    height: width + 75,
  },
  titleContainer: {
    position: 'absolute',
    top: Constants.statusBarHeight + 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    minWidth: 100,
    paddingHorizontal: 10,
    paddingVertical: 7,
    zIndex: 999,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Default',
    fontSize: 22,
  },
  imageUploadBtn:{
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 9999,
    backgroundColor: '#1aa3ff',
  },
  imageUploadIcon: {
    fontSize: 35,
    color: 'white',
    ...Platform.select({
      ios: {
        marginTop: 2,
        marginLeft: 1,
      }
    })
  },
  uploadedImageContainer: {
    flex: 1,
    backgroundColor: '#142530',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteImageBtn: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    zIndex: 99
  },
  imageListContainer: {
    width: width,
    height: width/4,
    flexDirection: 'row',
    backgroundColor: '#16222A'
  },
  imageListContainerItem: {
    width: width /4 - 10,
    height: width /4 - 10,
    margin: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageListItemIcon: {
    color: 'white',
    fontSize: 20
  },
  postTitleAddressContainer: {
    height: 'auto',
    backgroundColor: '#16222A',
    flexDirection: 'row',
  },
  postTitleContainer: {
    flex: 1,
    padding: 10,
  },
  postTitleInputContainer: {
    height: 50,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingLeft: 10,
    marginBottom: 10,
  },
  postTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Default',
    color: 'white',
  },
  postAddressContaner: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  addressIcon:{
    fontSize: 20,
    color: '#1aa3ff',
    marginLeft: 5,
    marginRight: 10,
  },
  postCityAddressContainer: {
    height: 40,
    width: width /2-15,
    paddingLeft: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginRight: 10,
  },
  postAddressInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Default',
    color: 'white',
  },
  postStateAddressContainer: {
    height: 40,
    width: width /2 - 50,
    paddingLeft: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center'
  },
  postStateAddressText: {
    fontSize: 14,
    fontFamily: 'Default',
    color: 'white',
  },
  postDescriptionContainer: {
    backgroundColor: 'white'
  },
  descriptionBlock: {
    width: width,
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  descriptionBlockLeft: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  descriptionBlockIcon: {
    fontSize: 28,
    color: '#003d66',
  },
  descriptionNameContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  descriptionName: {
    fontSize: 18,
    fontFamily: 'Default',
  },
  categoryModalContainer: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-end',
  },
  categoryListContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 6,
  },
  categoryList: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    height: 200,
    borderRadius: 6,
  },
  categoryListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  cancelBtn: {
    marginTop: 15,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderRadius: 6,
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Default',
  },
  descriptionValueContainer: {
    width: 'auto',
    height: '100%',
    flexDirection: 'row'
  },
  descriptionValueContainerItem: {
    height: '100%',
    justifyContent: 'center',
  },
  descriptionArrowDownIcon: {
    marginLeft: 10,
    marginTop: 3,
    color: '#007acc',
    fontSize: 25,
  },
  descriptionValue: {
    fontSize: 18,
    fontFamily: 'Default',
    color: '#007acc',
  },
  descriptionDetail: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'white'
  },
  descriptionDetailValue: {
    fontSize: 16,
    fontFamily: 'Default',
    textAlign: 'justify'
  },
  conditionSelectContainer: {
    width: '100%',
    paddingHorizontal: 30,
    height: 50,
    justifyContent: 'center',
  },
  priceBlock: {
    width: width,
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  priceInputContainer: {
    marginVertical: 20,
    width: width /3,
    height: 40,
    paddingLeft: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center'
  },
  checkBoxContainer: {
    height: '100%',
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
  },
  checkBoxStyle:{
    width: 50,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    backgroundColor: 'white'
  },
  additionalDescriptionContainer: {
    width: width,
    height: 220,
    padding: 20,
  },
  additionalDescriptionText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Default'
  },
  descriptionInput: {
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#16222A',
    padding: 10,
    height: 150,
    fontFamily: 'Default',
    textAlignVertical: "top",
    marginBottom: 20,
  },
  publishPostContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  publishBtn: {
    marginTop: 20,
    backgroundColor: '#003d66',
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderRadius: 4,
  },
  publishBtnText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Default'
  },
})

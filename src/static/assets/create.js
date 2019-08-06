import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#16222A',
    ...Platform.select({
      android : {
        paddingTop: Constants.statusBarHeight
      }
    })
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
  },
  division: {
    width: width,
    height: height,
    ...Platform.select({
      ios: {
        paddingBottom: 30
      }
    })
  },
  divisionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        marginTop: Constants.statusBarHeight + 80,
      },
      android: {
        marginTop: 80
      }
    })
  },
  largeImageContainer:{
    flex: 1,
    width: width,
    backgroundColor: '#16222A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteImageButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    zIndex: 99
  },
  smallImageContainer: {
    width: width,
    height: width/4 + 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  smallImage: {
    width: width/4 -10,
    height: width/4 -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionContainer: {
    width: width,
    height: 80,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  actionButton: {
    width: width - 120,
    backgroundColor: '#003d66',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  actionButtonText: {
    fontFamily: 'Default-Bold',
    fontSize: 20,
    color: 'white',
  },
  nextButton: {
    width: 60,
    height: 60,
    backgroundColor: '#003d66',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  categoryContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categorySelectText: {
    color: 'darkgrey',
    fontFamily: 'Default',
    fontSize: 18,
  },
  titleInputContainer: {
    height: 50,
    marginVertical: 10,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Default'
  },
  addressContainer: {
    flexDirection: 'row',
  },
  addressIntputContainer: {
    flex: 1,
    height: 50,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  conditionContainer: {
    paddingVertical: 20,
  },
  conditionText: {
    fontFamily: "Default-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  conditionListContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  conditionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    flex: 1,
  },
  conditionName: {
    fontFamily: 'Default',
    fontSize: 14,
    color: 'white'
  },
  selectedCondition: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#003d66',
    backgroundColor: '#003d66',
  },
  priceInputContainer: {
    flex: 1,
    height: 50,
    marginVertical: 10,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  negotiationContainer: {
    height: 70,
    width: 70,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  negotiationText: {
    fontFamily: 'Default',
    fontSize: 12,
  },
  categoryModalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 99999,
  },
  categoryListContainer: {
    backgroundColor:'white',
    width: width,
    height: height*3/5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  categoryTitleText: {
    fontFamily: 'Default-Bold',
    alignSelf: 'center',
    fontSize: 20,
    padding: 20,
  },
  categoryListItem: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryNameText: {
    fontFamily: 'Default',
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'Default-Bold'
  },
  descriptionInput: {
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#16222A',
    padding: 10,
    height: 170,
    fontFamily: 'Default',
    textAlignVertical: "top",
    marginBottom: 20,
  },
})

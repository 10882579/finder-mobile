import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  header: {
    position: "absolute",
    top: Constants.statusBarHeight,
    justifyContent: 'space-between',
    flexDirection: "row",
    left: 0,
    right: 0,
    height: 60,
  },
  headerButton : {
    width: 60, 
    height: 60,
    justifyContent: "center",
    alignItems: 'center',
  },
  imageContainer: {
    position: "absolute",
    width: width,
    height: width + Constants.statusBarHeight + 60,
    backgroundColor: 'rgba(22, 34, 42, 0.9)',
    overflow: 'hidden'
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
  container: {
    marginTop: width + Constants.statusBarHeight + 60,
  },
  titleContainer: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: "Default",
    fontSize: 20,
  },
  locationContainer: {
    paddingHorizontal: 20,
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
  userContainer:{
    width: width,
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: "center"
  },
  userImageContainer: {
    width: 50,
    height: 50,
    borderRadius: radius,
    overflow: 'hidden',
  },
  userNameContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userName: {
    fontFamily: 'Default',
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  conditionContainer: {
    width: width,
    paddingHorizontal: 20,
  },
  conditionText: {
    fontFamily: "Default",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  conditionListContainer: {
    flex: 1,
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
  descriptionContainer: {
    padding: 20,
  },
  description: {
    fontFamily: "Default",
    fontSize: 15,
    textAlign: "justify",
  },
  contactButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#003d66',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  contactIcon: {
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    left: 20,
  },
  contactText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Default'
  },
})

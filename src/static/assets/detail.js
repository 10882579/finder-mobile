import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

module.exports = StyleSheet.create({
  detailContainer:{
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
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
    fontSize: 14,
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
  detailRatingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userRatingContainer:{
    width: '40%',
    alignItems: 'center',
  },
  userRating: {
    fontFamily: 'Default',
    fontSize: 60,
    height: 70,
  },
  userRatingItemized: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userRatingItemizedText: {
    fontFamily: 'Default-Bold',
    textAlign: 'center',
    fontSize: 14,
    width: 18,
  },
  userRatingPercentage: {
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
    marginHorizontal: 5,
    borderRadius: 50,
    height: 10,
    flex: 1,
  },
  reviewItemContainer:{
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    marginBottom: 10,
  },
  reviewerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: 'darkgrey',
    overflow: 'hidden',
    marginRight: 10,
  },
  reviewerName: {
    fontFamily: 'Default',
    fontSize: 17,
  },
  reviewRatingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  ratingStarContainer:{
    flexDirection: "row",
  },
  ratingStar: {
    fontSize: 14, 
    marginHorizontal: 1
  },
  reviewCreatedAt:{
    fontFamily: 'Default',
    marginHorizontal: 10,
    color: 'grey',
    fontSize: 16,
  },
  review: {
    fontFamily: 'Default',
    fontSize: 15,
    textAlign: 'justify',
  },
})

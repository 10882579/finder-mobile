import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  headerSearchContainer: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5
  },
  searchIcon: {
    fontSize: 20,
    paddingHorizontal: 8,
    color: 'darkgrey'
  },
  headerFilterBtn: {
    fontSize: 35,
    color: 'white',
    marginBottom: 5
  },
  progressBarContainer: {
    width: width,
    padding: 10,
    flexDirection: 'row',
  },
  progressContainer:{
    flex: 1,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'darkgrey',
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  progress: {
    height: 30,
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgb(0,128,0)',
  },
  percentContainer:{
    width: 45,
    height: 30,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  progressText: {
    fontSize: 16,
    fontFamily: 'Default',
  },
  listImageGrid: {
    flexDirection: 'row',
  },
  premiumImageSingleGrid: {
    width: width - (width / 3) - 5,
    height: width - (width / 3) - 5,
    marginRight: 5,
    marginBottom: 5,
  },
  premiumImageDoubleGrid: {
    width: width - (width * 2/3) - 10,
    height: width - (width * 2/3) - 5,
  },
  imageFieldPress: {
    height: '100%',
    width: '100%',
    marginBottom: 5
  },
  regularImageGrid: {
    width: (width / 3) -5,
    height: (width / 3) -5,
    marginRight: 5,
    marginBottom: 5,
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  bookmark: {
    fontSize: 32,
    color: 'white'
  },
})

import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

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
  progressBar: {
    width: '100%',
    marginVertical: 5,
    padding: 5,
    height: 'auto',
  },
  progressContainer:{
    backgroundColor: 'white',
    height: 5,
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'lightgreen'
  },
  progress: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 4
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

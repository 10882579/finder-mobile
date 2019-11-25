import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  postContainer: {
    width: (width - 20)/3,
    height: (width/3),
    margin: 2.5,
  },
  searchContainer: {
    width: width,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  searchInputContainer: {
    height: 50,
    paddingLeft: 5,
    marginVertical: 5,
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Default',
  },
  searchButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceFilterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    marginVertical: 10,
    height: 50,
  },
  priceFilterInput: {
    height: 40,
    width: width /4,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'center',
  },
  filterText: {
    fontFamily: 'Default',
    fontSize: 16
  },
})

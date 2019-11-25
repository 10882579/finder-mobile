import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyle } from '@src/static/index';

export default (props) => {

  const { home, updateFilter, fetchPosts, isVisible } = props;

  if(isVisible){
    return (
      <View style={homeStyle.searchContainer}>
        <View style={homeStyle.searchInputContainer}>
          <TextInput 
            placeholder='Search'
            autoCorrect={false}
            autoCapitalize='none'
            value={home.filter.search}
            style={homeStyle.searchInput}
            onChangeText={ (v) => updateFilter({search: v})}
          />
          <TouchableOpacity style={homeStyle.searchButton} onPress={ fetchPosts }>
            <Ionicons name='ios-search' size={24} />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.priceFilterContainer}>
          <Text style={homeStyle.searchInput}>Summa:</Text>
          <View style={homeStyle.priceFilterInput}>
            <TextInput 
              keyboardType='numeric'
              placeholder='Dan'
              underlineColorAndroid="transparent"
              style={homeStyle.filterText}
              autoCorrect={false}
              returnKeyType='next'
              value={home.filter.gte}
              onChangeText={ (v) => updateFilter({gte: v})}
            />
          </View>
          <View style={homeStyle.priceFilterInput}>
            <TextInput 
              keyboardType='numeric'
              placeholder='Gacha'
              underlineColorAndroid="transparent"
              style={homeStyle.filterText}
              autoCorrect={false}
              returnKeyType='next'
              value={home.filter.lte}
              onChangeText={ (v) => updateFilter({lte: v})}
            />
          </View>
        </View>
      </View>
    )
  }
  else return null;
}

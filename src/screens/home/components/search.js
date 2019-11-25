import React from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView } from 'react-native';
import { homeStyle, defaultStyle } from '@src/static/index';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component{

  closeSearchComponent = () => {
    this.props.updateFilter({search: ''});
    this.props.toggleSearch();
  }

  searchPosts = () => {
    this.props.fetchPosts();
    this.props.toggleSearch();
  }

  render(){
    const { home, updateFilter } = this.props;
    return (
      <View style={[defaultStyle.flex, {backgroundColor: 'white'}]}>
        <View style={homeStyle.searchContainer}>
          <TouchableOpacity 
            style={homeStyle.searchIconContainer}
            onPress={ this.closeSearchComponent }
          >
            <Ionicons name='ios-close' size={35} />
          </TouchableOpacity>
          <View style={homeStyle.searchInputContainer}>
            <TextInput 
              placeholder='Search'
              autoCorrect={false}
              autoCapitalize='none'
              value={home.searchInput}
              style={homeStyle.searchInput}
              onChangeText={ (v) => updateFilter({search: v})}
            />
            <TouchableOpacity 
              style={homeStyle.searchIconContainer}
              onPress={ this.searchPosts }
            >
              <Ionicons name='ios-search' size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeStyle.filterContainer}>
          <TouchableOpacity style={homeStyle.filterItem} activeOpacity={1}>
            <Text style={homeStyle.filterText}>Kategoriya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyle.filterItem} activeOpacity={1}>
            <Text style={homeStyle.filterText}>Holati</Text>
          </TouchableOpacity>
          <View style={[homeStyle.filterItem, homeStyle.priceFilter]} activeOpacity={1}>
            <Text style={homeStyle.filterText}>Narx</Text>
            <View style={homeStyle.priceFilterInput}>
              <TextInput 
                keyboardType='numeric'
                placeholder='Dan'
                underlineColorAndroid="transparent"
                style={homeStyle.filterText}
                autoCorrect={false}
                returnKeyType='next'
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
              />
            </View>
          </View>
          <TouchableOpacity style={homeStyle.filterItem} activeOpacity={1}>
            <Text style={homeStyle.filterText}>Viloyat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyle.filterItem} activeOpacity={1}>
            <Text style={homeStyle.filterText}>Shahar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

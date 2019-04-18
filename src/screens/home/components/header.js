import React from 'react';
import { View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { homeStyle, defaultStyle } from '@src/static/index'

export default (props) => {

  return (
    <View style={[defaultStyle.customHeaderContainer, defaultStyle.shadow]}>
      <StatusBar barStyle="light-content"/>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        onPress={ () => props.navigation.toggleDrawer() }
        >
        <Feather name='menu' size={25} color='white'/>
      </TouchableOpacity>
      <View style={defaultStyle.headerBodyContainer}>
        <View style={homeStyle.headerSearchContainer}>
          <Ionicons name='ios-search' style={homeStyle.searchIcon} />
          <TextInput
            placeholder='Qidirmoq'
            style={homeStyle.searchInput}
            underlineColorAndroid="transparent"
            autoCorrect={false}
          />
        </View>
      </View>
    </View>
  )
}

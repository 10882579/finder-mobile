import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome as FIcon, MaterialIcons as MIcon, Ionicons } from '@expo/vector-icons';

import { homeStyle, defaultStyle } from '@src/static/index'

export default (props) => {

  return (
    <View style={[defaultStyle.customHeaderContainer, defaultStyle.shadow]}>
      <View style={defaultStyle.headerBodyContainer}>
        <View style={homeStyle.headerSearchContainer}>
          <FIcon name='search' style={homeStyle.searchIcon} />
          <TextInput
            placeholder='Qidirmoq'
            style={homeStyle.searchInput}
            underlineColorAndroid="transparent"
            autoCorrect={false}
          />
        </View>
      </View>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        >
        <MIcon
          name='filter-list'
          style={homeStyle.headerFilterBtn}
        />
      </TouchableOpacity>

    </View>
  )
}

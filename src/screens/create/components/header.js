import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import { Ionicons, Feather }  from '@expo/vector-icons';
import { defaultStyle }       from '@src/static/index'

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={defaultStyle.headerIconContainer}
      activeOpacity={0.8}
      onPress={ props.action }
    >
      <Feather
        name={props.name}
        style={defaultStyle.headerIcon}
      />
    </TouchableOpacity>
  )
}

export default (props) => {

  return (
    <View style={defaultStyle.transparentHeaderContainer}>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        activeOpacity={0.8}
        onPress={ () => props.handleGoBack(props.navigation) }
      >
        <Ionicons
          name='md-arrow-round-back'
          style={defaultStyle.headerIcon}
        />
      </TouchableOpacity>
      <View style={defaultStyle.headerBodyContainer} />
      <HeaderButton name='trash' action={ props.eraseCreateDataState }/>
      <HeaderButton name='share-2'/>
    </View>
  )
}

import React from 'react';
import { Animated, TouchableOpacity, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { defaultStyle, createStyle } from '@src/static/index'

export default (props) => {

  return (
    <Animated.View style={[defaultStyle.customHeaderContainer, createStyle.header, {backgroundColor: props.color}]}>
      <StatusBar barStyle='light-content'/>
      <TouchableOpacity 
        style={defaultStyle.headerIconContainer}
        onPress={ () => props.navigation.toggleDrawer() }
        activeOpacity={0.8}
        >
        <Feather name='menu' size={25} color='white'/>
      </TouchableOpacity>
    </Animated.View>
  )
}

import React from 'react';
import { Animated, TouchableOpacity, StatusBar, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { defaultStyle, createStyle } from '@src/static/index'

export default (props) => {

  toggleDrawer = () => {
    Keyboard.dismiss()
    props.navigation.toggleDrawer();
  }

  return (
    <Animated.View style={[defaultStyle.customHeaderContainer, createStyle.header, {backgroundColor: props.color}]}>
      <StatusBar barStyle='light-content'/>
      <TouchableOpacity 
        style={defaultStyle.headerIconContainer}
        onPress={ this.toggleDrawer }
        activeOpacity={0.8}
        >
        <Feather name='menu' size={25} color='white'/>
      </TouchableOpacity>
    </Animated.View>
  )
}

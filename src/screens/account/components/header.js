import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, StatusBar } from 'react-native';

import { Ionicons }     from '@expo/vector-icons';
import { defaultStyle } from '@src/static/index';

export default (props) => {
  const { navigation, showSettings } = props;
  return (
    <Animated.View style={[defaultStyle.customHeaderContainer, props.style, {opacity: props.opacity}]}>
      <StatusBar barStyle='light-content'/>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        activeOpacity={0.8}
        onPress={ () => props.handleGoBack(navigation) }
      >
        <Ionicons
          name='md-arrow-round-back'
          style={defaultStyle.headerIcon}
        />
      </TouchableOpacity>
      <View style={defaultStyle.headerBodyContainer}/>
      {
        showSettings ? (
          <TouchableOpacity
            style={defaultStyle.headerIconContainer}
            activeOpacity={0.8}
            onPress={ () => navigation.navigate('Settings') }
          >
            <Ionicons
              name='md-settings'
              style={defaultStyle.headerIcon}
            />
          </TouchableOpacity>
        ) : null
      }
    </Animated.View>
  )
}

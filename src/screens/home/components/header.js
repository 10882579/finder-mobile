import React from 'react';
import { View,TouchableOpacity, StatusBar, Image, Keyboard } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { defaultStyle } from '@src/static/index'

export default (props) => {

  toggleDrawer = () => {
    Keyboard.dismiss()
    props.navigation.toggleDrawer();
  }

  return (
    <View style={[defaultStyle.customHeaderContainer, defaultStyle.shadow]}>
      <StatusBar barStyle="light-content"/>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        onPress={ this.toggleDrawer }
        >
        <Feather name='menu' size={25} color='white'/>
      </TouchableOpacity>
      <View style={defaultStyle.headerBodyContainer}>
        <View style={defaultStyle.headerLogoContainer}>
          <Image source={require('@src/static/imgs/logo-grey.png')} style={defaultStyle.headerLogo}/>
        </View>
      </View>
      <TouchableOpacity 
        style={defaultStyle.headerIconContainer}
        onPress={ props.toggleSearch }
      >
        {
          props.show ? (
            <Ionicons name='ios-search' style={defaultStyle.headerIcon}/>
          ) : (
            <Ionicons name='md-close' style={defaultStyle.headerIcon}/>
          )
        }
      </TouchableOpacity>
    </View>
  )
}

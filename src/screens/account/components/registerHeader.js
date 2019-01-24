import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { registerStyle } from '@src/static/index';

export default (props) => {
  return (
    <View style={registerStyle.header}>
      <TouchableOpacity style={registerStyle.closeBtnContainer} onPress={props.action}>
        <Ionicons name="ios-close" size={40} color='black'/>
      </TouchableOpacity>
      <View style={registerStyle.headerBodyContainer}>
        <Text style={registerStyle.registerText}>Registratsiya</Text>
      </View>
      <View style={registerStyle.closeBtnContainer}/>
    </View>
  )
}

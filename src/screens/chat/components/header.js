import React from 'react';
import { View, TouchableOpacity, Image, Text, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { chatStyle, defaultStyle } from '@src/static/index';

export default (props) => {

  const { navigation } = props;
  const { params } = navigation.state;

  return (
    <View style={[defaultStyle.customHeaderContainer, chatStyle.header, defaultStyle.shadow]}>
      <StatusBar barStyle={ Platform.OS == 'ios' ? 'dark-content' : 'light-content'}/>
      <TouchableOpacity style={[defaultStyle.headerIconContainer]} 
        activeOpacity={0.8}
        onPress={ () => navigation.goBack() }
      >
        <Ionicons
          name='md-arrow-round-back'
          style={chatStyle.headerIcon}
          color='black'
        />
      </TouchableOpacity>
      <View style={[defaultStyle.headerBodyContainer, defaultStyle.displayInLine]}>
        <View style={chatStyle.userImageContainer}>
          <Image source={{uri: params.image}} style={defaultStyle.image}/>
        </View>
        <View style={chatStyle.headerUsernameContainer}>
          <Text style={chatStyle.usernameText} numberOfLines={1}>{params.first_name} {params.last_name}</Text>
        </View>
      </View>
      <View style={defaultStyle.headerIconContainer}/>
    </View>
  )
}

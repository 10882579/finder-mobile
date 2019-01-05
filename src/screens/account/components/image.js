import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { ImagePicker } from 'expo';
import { EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';


export default (props) => {
  const { image, navigation, updateAccountImage } = props;

  uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Images',
      aspect: [1, 1],
    });
    if (!result.cancelled){
      updateAccountImage({image: result.uri}, navigation)
    }
  }

  return (
    <View style={accountStyle.accountImageContainer}>
      <View style={accountStyle.accountImage}>
        <Image source={{uri: image}} style={defaultStyle.image}/>
        <TouchableOpacity
          style={accountStyle.accountImageUploadButton}
          activeOpacity={0.9} onPress={ this.uploadImage }
        >
          <EvilIcons name='camera' color='white' size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

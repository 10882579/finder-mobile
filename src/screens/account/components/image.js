import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { ImagePicker } from 'expo';
import { EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

import Animation from '../animations/image';


export default (props) => {
  const { image, navigation, updateAccountImage, scrollY } = props;

  const { position, opacity, height } = Animation(scrollY)

  const imageStyle = {
    top: position,
    opacity: opacity,
    height: height
  }

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
    <Animated.View style={[accountStyle.accountImageContainer, imageStyle]}>
      <View style={accountStyle.accountImage}>
        <Image source={{uri: image}} style={defaultStyle.image}/>
        <TouchableOpacity
          style={accountStyle.accountImageUploadButton}
          activeOpacity={0.9} onPress={ this.uploadImage }
        >
          <EvilIcons name='camera' color='white' size={20}/>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

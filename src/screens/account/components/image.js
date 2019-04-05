import React from 'react';
import { View, TouchableOpacity, Image, Animated, Text } from 'react-native';
import { ImagePicker } from 'expo';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

import Animation from '../animations/image';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default (props) => {
  const { account, image, navigation, updateAccountImage, scrollY } = props;

  const { position, scale, nameScale, namePosition, opacity } = Animation(scrollY)

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

  const rating    = 4.3;
  const ratings   = Array.from({length: Math.floor(rating)});
  const remainder = (rating - Math.floor(rating))


  return (
    <Animated.View style={[accountStyle.accountContainer, position]}>
      <Animated.View style={[accountStyle.accountImageContainer, scale]}>
        <View style={accountStyle.accountImage}>
          <Image source={{uri: image}} style={defaultStyle.image}/>
          <AnimatedButton
            style={[accountStyle.accountImageUploadButton, {opacity: opacity}]}
            activeOpacity={0.9} onPress={ this.uploadImage }
          >
            <EvilIcons name='camera' color='white' size={20}/>
          </AnimatedButton>
        </View>
      </Animated.View>
      <Animated.View style={[accountStyle.nameContainer, {top: namePosition}]}>
        <Animated.Text style={[accountStyle.name, {fontSize: nameScale}]} numberOfLines={1}>
          {account.first_name} {account.last_name}
        </Animated.Text>
        <View style={accountStyle.ratingContainer}>
          <Text style={accountStyle.rating}>{rating}</Text>
          <View style={accountStyle.ratingStarContainer}>
            {
              ratings.map( (_, i) => (
                <FontAwesome name='star' style={accountStyle.ratingStar}/>
              ))
            }
            {
              remainder !== 0 && remainder <= 0.5 ? (
                <FontAwesome name='star-half' style={accountStyle.ratingStar}/>
              ) : (
                <FontAwesome name='star' style={accountStyle.ratingStar}/>
              )
            }
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  )
}

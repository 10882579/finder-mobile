import React from 'react';
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { ImagePicker } from 'expo';
import { EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';
import Rating from '@screens/account/components/rating';

import Animation from '../animations/image';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default (props) => {
  const { account, image, navigation, updateAccountImage, scrollY } = props;

  const { position, scale, nameScale, namePosition, opacity, fadeOut } = Animation(scrollY)

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
      <Animated.View style={[accountStyle.nameContainer, {top: namePosition, opacity: fadeOut}]}>
        <Animated.Text style={[accountStyle.name, {fontSize: nameScale}]} numberOfLines={1}>
          {account.first_name} {account.last_name}
        </Animated.Text>
        <Rating rating={account.rating} />
      </Animated.View>
    </Animated.View>
  )
}

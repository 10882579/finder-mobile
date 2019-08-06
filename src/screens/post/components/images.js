import React from 'react';
import { View, Image, Text, Animated } from 'react-native';

import Swiper from "react-native-swiper";
import { postStyle, defaultStyle } from '@src/static/index';

export default (props) => {

  const { post } = props;

  return (
    <Animated.View style={[postStyle.imageContainer, {height: props.height}]}>
      <Swiper loop={false}
        activeDotColor='rgba(250, 250, 250, 0.9)'
        dotColor='rgba(250, 250, 250, 0.3)'
        paginationStyle={postStyle.imagePagination}
      >
        {
          post.photos.map( (item, index) => (
            <View key={index} style={defaultStyle.flex}>
              <Image source={{uri: item.uri}} style={defaultStyle.image}/>
            </View>
          ))
        }
      </Swiper>
      <View style={postStyle.priceContainer}>
        <Text style={postStyle.price}>{post.price}</Text>
      </View>
    </Animated.View>
  )
}

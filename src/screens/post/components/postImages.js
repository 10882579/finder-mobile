import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Swiper from "react-native-swiper";
import { postStyle, defaultStyle } from '@src/static/index';

export default (props) => {

  const { post } = props;

  return (

    <View style={postStyle.imageContainer}>
      <Swiper loop={false}
        activeDotColor='rgba(250, 250, 250, 0.9)'
        dotColor='rgba(250, 250, 250, 0.3)'
        paginationStyle={postStyle.imagePagination}
      >
        {
          post.photos ? post.photos.map( (item, index) => (
            <View key={index} style={defaultStyle.flex}>
              <Image source={{uri: item.uri}} style={defaultStyle.image}/>
            </View>
          )) : null
        }
      </Swiper>
      <View style={postStyle.priceContainer}>
        <Text style={postStyle.price} numberOfLines={1}>{post.price}</Text>
      </View>
      {
        post.sold ? (
          <View style={postStyle.soldLabelContainer}>
            <View style={postStyle.soldLabel}>
              <Text numberOfLines={1} style={postStyle.soldLabelText}>
                Mahsulot sotildi | Servis mavjud emas
              </Text>
            </View>
          </View>
        ) : null
      }
    </View>

  )
}

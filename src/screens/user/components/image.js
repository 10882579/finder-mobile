import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

const { width } = Dimensions.get('window');

export default (props) => {
  const { data } = props;
  const scale = {
    width: 170,
    height: 170,
    padding: 10,
    left: (width-120)/2-85
  }

  const rating    = 4.3;
  const ratings   = Array.from({length: Math.floor(rating)});
  const remainder = (rating - Math.floor(rating))

  return (
    <View style={[accountStyle.accountContainer, {top: 140}]}>
      <View style={[accountStyle.accountImageContainer, scale]}>
        <View style={accountStyle.accountImage}>
          <Image source={{uri: data.image}} style={defaultStyle.image}/>
        </View>
      </View>
      <View style={[accountStyle.nameContainer, {top: 175}]}>
        <Text style={[accountStyle.name, {fontSize: 22}]} numberOfLines={1}>
          {data.first_name} {data.last_name}
        </Text>
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
      </View>
    </View>
  )
}

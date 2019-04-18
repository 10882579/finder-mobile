import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import Rating from '@screens/user/components/rating';

const { width } = Dimensions.get('window');

export default (props) => {
  const { data } = props;
  const scale = {
    width: 170,
    height: 170,
    padding: 10,
    left: (width-120)/2-85
  }

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
        <Rating rating={data.rating} />
      </View>
    </View>
  )
}

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';

export default (props) => {
  const { image } = props;

  return (
    <View style={[accountStyle.accountImageContainer, {top: 140}]}>
      <View style={accountStyle.accountImage}>
        <Image source={{uri: image}} style={defaultStyle.image}/>
      </View>
    </View>
  )
}

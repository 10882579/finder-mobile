import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { postStyle, defaultStyle } from '@src/static/index';

import axios from 'axios';

export default (props) => {

  const { post, navigation, account, mode } = props;

  const navigateToAccount = (id) => {
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${id}/`
    ) : (
      `http://localhost:8000/account/${id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({status, data}) => {
      navigation.navigate('User', {id, ...data})
    })
    .catch((err) => {

    })
  }

  return (
    <View style={postStyle.userInfoContainer}>
      <View style={postStyle.userContainer}>
        <View style={postStyle.userImageContainer}>
          <Image source={{uri: post.account.image}} style={defaultStyle.image}/>
        </View>
        <View activeOpacity={1} style={defaultStyle.flex}>
          <Text style={postStyle.userName} numberOfLines={1}>
            {post.account.first_name} {post.account.last_name}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={postStyle.userDetailIconContainer}
          onPress={ () => navigateToAccount(post.account.account_id) }
        >
          <Entypo name='dots-three-vertical' style={postStyle.userDetailIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

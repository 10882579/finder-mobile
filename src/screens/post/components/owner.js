import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { postStyle, defaultStyle } from '@src/static/index';

const navigateToAccount = async (props) => {
  // const {
  //   navigation,
  //   account,
  //   post,
  //   updateNavigationState,
  //   eraseNavigationState,
  //   eraseAccountDataState
  // } = props;
  // await updateNavigationState({direction: 'Post', id: navigation.state.params.id})
  // if(post.account.account_id === account.account_id){
  //   await eraseNavigationState()
  //   await eraseAccountDataState()
  //   navigation.navigate('Account')
  // }
  // else{
  //   navigation.navigate('AccountById', { id: post.account.account_id })
  // }
}

export default (props) => {
  const { post } = props;

  return (
    <View style={postStyle.userInformationContainer}>
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
          onPress={ () => navigateToAccount(props) }
        >
          <Entypo name='dots-three-vertical' style={postStyle.userDetailIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

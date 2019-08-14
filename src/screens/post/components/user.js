import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { postStyle, defaultStyle } from '@src/static/index';
import Rating from './rating';

export default (props) => {
  const { post, navigation, account } = props;

  navigateToAccount = () => {
    if(account.account_id !== post.account.account_id){
      navigation.navigate("User", {
        id: post.account.account_id,
        from: {
          screen: 'Post',
          id: post.id
        }
      });
    }
  }

  return (
    <View style={postStyle.userContainer}>
      <View style={postStyle.userImageContainer}>
        <Image source={{uri: post.account.image}} style={defaultStyle.image}/>
      </View>
      <TouchableOpacity activeOpacity={1} style={postStyle.userNameContainer} onPress={navigateToAccount}>
        <Text style={postStyle.userName} numberOfLines={1}>
          {post.account.first_name} {post.account.last_name}
        </Text>
        <Rating rating={post.account.rating}/>
      </TouchableOpacity>
    </View>
  )
}
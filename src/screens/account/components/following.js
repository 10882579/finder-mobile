import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { defaultStyle, accountStyle } from '@src/static/index';

export default (props) => {
  const { following, followAccount } = props;

  return (
    <FlatList
      data={following}
      scrollEventThrottle={1}
      renderItem={ ({item, index}) => (
        <TouchableOpacity
          activeOpacity={0.9}
          style={[accountStyle.followingUserContainer, defaultStyle.shadow]}
        >
          <View style={accountStyle.followingUserImage}>
            <Image source={{uri: item.image}} style={defaultStyle.image}/>
          </View>
          <View style={accountStyle.followingUserNameContainer}>
            <Text style={accountStyle.followingUserName} numberOfLines={1}>
              {item.first_name} {item.last_name}
            </Text>
            <TouchableOpacity style={accountStyle.likeButtonContainer} onPress={ () => followAccount(item.id) }>
              <AntDesign name={item.following ? 'heart' : 'hearto'} style={accountStyle.likeIcon}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={ (item, index) => String(item.id)}
    />
  )
}

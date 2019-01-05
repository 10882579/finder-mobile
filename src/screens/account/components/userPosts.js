import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import { defaultStyle, accountStyle } from '@src/static/index';

export default (props) => {

  const { posts } = props;

  return (
    <FlatList
      data={posts}
      scrollEventThrottle={1}
      // onScroll={ (e) => fetchPostOnScroll(e.nativeEvent) }
      renderItem={ ({item, index}) => (
        <TouchableOpacity
          activeOpacity={0.9}
          style={[accountStyle.listItem, defaultStyle.shadow]}
        >
          <View style={accountStyle.itemImageContainer}>
            <Image source={{uri: item.photos[0].uri}} style={defaultStyle.image}/>
          </View>
          <View style={accountStyle.itemInformation}>
            <View style={accountStyle.itemTitleContainer}>
              <Text style={accountStyle.itemTitle} numberOfLines={2}>{item.title}</Text>
            </View>
            <View style={accountStyle.itemPriceContainer}>
              <Text style={accountStyle.itemPrice} numberOfLines={1}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={ (item, index) => String(item.id)}
    />
  )
}

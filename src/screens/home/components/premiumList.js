import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { homeStyle, defaultStyle } from '@src/static/index';

const Post = (props) => {

  const { navigation, item } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={homeStyle.imageFieldPress}
      onPress={ () => navigation.navigate('PostById', {id: item.id}) }
      >
      <Image source={{uri: item.photos.uri}} style={defaultStyle.image}/>
      {
        item.premium ? (
          <View style={homeStyle.bookmarkContainer}>
            <Ionicons name='md-pricetag' style={homeStyle.bookmark}/>
          </View>
        ) : null
      }
    </TouchableOpacity>
  )
}


export default (props) => {
  const { item }        = props;
  const { homeStyle }   = props.style;

  return (
    <View key={item.index} style={homeStyle.listImageGrid}>
      <View style={homeStyle.premiumImageSingleGrid}>
        <Post {...props} item={item[0]}/>
      </View>
      <View style={homeStyle.premiumImageDoubleGrid}>
        <Post {...props} item={item[1]}/>
        <Post {...props} item={item[2]}/>
      </View>
    </View>
  )
}

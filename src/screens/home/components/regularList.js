import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { homeStyle, defaultStyle } from '@src/static/index';


export default (props) => {

  const { navigation, item } = props;

  handleFetchPost = (id) => {
    navigation.navigate('Post', {
      id: id, 
      from: {
        screen: 'Home'
      }
    })
  }

  return (
    <View key={item.id} >
      {
        item.map( (j, i) => (
          <View key={j.id} style={[homeStyle.regularImageGrid, {marginLeft: 0}]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={homeStyle.imageFieldPress}
              onPress={ () => this.handleFetchPost(j.id) }
              >
              <Image source={{uri: j.photos.uri}} style={defaultStyle.image}/>
              {
                j.premium ? (
                  <View style={homeStyle.bookmarkContainer}>
                    <Ionicons name='md-pricetag' style={homeStyle.bookmark}/>
                  </View>
                ) : null
              }
            </TouchableOpacity>
          </View>
        ))
      }
    </View>
  )
}

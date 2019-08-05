import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { postStyle } from '@src/static/index';


export default (props) => {

  const ratings = Array.from({length: Math.round(props.rating)});

  return (
    <View style={postStyle.ratingContainer}>
      {
        ratings.map( (v, i) => (
          <FontAwesome name='star' key={i} color='gold' size={16}/>
        ))
      }
      {
        Array.from({length: 5 - Math.round(props.rating)}).map( (v, i) => (
          <FontAwesome name='star' color='lightgrey' key={i} size={16}/>
        ))
      }
    </View>
  )
}

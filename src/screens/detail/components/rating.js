import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { chatStyle } from '@src/static/index';


export default (props) => {

  const ratings   = Array.from({length: Math.round(props.rating)});

  return (
    <View style={chatStyle.ratingContainer}>
      <View style={chatStyle.ratingStarContainer}>
        {
          ratings.map( (v, i) => (
            <FontAwesome name='star' color='gold' key={i} style={chatStyle.ratingStar}/>
          ))
        }
        {
          Array.from({length: 5 - Math.round(props.rating)}).map( (v, i) => (
            <FontAwesome name='star' color='lightgrey' key={i} style={chatStyle.ratingStar}/>
          ))
        }
      </View>
    </View>
  )
}

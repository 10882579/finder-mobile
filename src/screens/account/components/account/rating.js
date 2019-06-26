import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';


export default (props) => {

  const ratings   = Array.from({length: Math.round(props.rating)});

  return (
    <View style={accountStyle.ratingContainer}>
      {
        props.rating != 0 ? (
          <Text style={accountStyle.rating}>{props.rating}</Text>
        ) : null
      }
      <View style={accountStyle.ratingStarContainer}>
        {
          ratings.map( (v, i) => (
            <FontAwesome name='star' key={i} color='gold' style={accountStyle.ratingStar}/>
          ))
        }
        {
          Array.from({length: 5 - Math.round(props.rating)}).map( (v, i) => (
            <FontAwesome name='star' color='lightgrey' key={i} style={accountStyle.ratingStar}/>
          ))
        }
      </View>
    </View>
  )
}

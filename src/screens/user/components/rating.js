import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';


export default (props) => {

  const ratings   = Array.from({length: Math.round(props.rating)});

  return (
    <View style={[accountStyle.ratingContainer, props.contentStyle]}>
      {
        props.rating != 0 && !props.hideRating ? (
          <Text style={accountStyle.rating}>{props.rating}</Text>
        ) : null
      }
      <View style={accountStyle.ratingStarContainer}>
        {
          ratings.map( () => (
            <FontAwesome name='star' color='gold' style={[accountStyle.ratingStar, props.style]}/>
          ))
        }
        {
          Array.from({length: 5 - Math.round(props.rating)}).map( () => (
            <FontAwesome name='star' color='lightgrey' style={[accountStyle.ratingStar, props.style]}/>
          ))
        }
      </View>
    </View>
  )
}

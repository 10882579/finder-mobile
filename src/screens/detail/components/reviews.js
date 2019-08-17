import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { detailStyle, defaultStyle } from '@src/static/index';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import timefilter from '@src/timefilter';

import Rating from './rating';

const RatingItem = (props) => {
  return (
    <View style={detailStyle.userRatingItemized}>
      <Text style={detailStyle.userRatingItemizedText}>{props.rating}</Text>
      <View style={detailStyle.userRatingPercentage}>
        <View style={{
          flex: 1, 
          backgroundColor: 'green', 
          width: `${props.percent}%`,
          borderRadius: 50
        }}/>
      </View>
    </View>
  )
}

export default (props) => {

  const { data, navigation, account } = props;
  const { params } = navigation.state;

  const ratingPercentage = (x) => {
    const arr = data.filter( (item) => item.rating == x);
    const dataLength = data.length !== 0 ? data.length : 1;
    const percentage = arr.length * 100 / dataLength;
    return percentage
  }

  return(
    <View style={detailStyle.detailContainer}>
      <View style={detailStyle.detailRatingContainer}>
        <View style={detailStyle.userRatingContainer}>
          <Text style={detailStyle.userRating}>{params.rating}</Text>
          <Rating rating={params.rating} />
        </View>
        <View style={defaultStyle.flex}>
          <RatingItem rating={5} percent={ratingPercentage(5)}/>
          <RatingItem rating={4} percent={ratingPercentage(4)}/>
          <RatingItem rating={3} percent={ratingPercentage(3)}/>
          <RatingItem rating={2} percent={ratingPercentage(2)}/>
          <RatingItem rating={1} percent={ratingPercentage(1)}/>
        </View>
      </View>
      {
        account.accountFetched && params.id ? (
          <TouchableOpacity style={detailStyle.reviewButton}>
            <AntDesign name='plus' style={detailStyle.reviewButtonIcon}/>
            <Text style={detailStyle.reviewButtonText}>Komment</Text>
          </TouchableOpacity>
        ) : null
      }
      <ScrollView style={defaultStyle.flex}
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {
          data.map( (item) => (
            <View style={detailStyle.reviewItemContainer} key={item.id}>
              <View style={detailStyle.reviewerContainer}>
                <View style={detailStyle.reviewerImage}>
                  <Image source={{uri: item.reviewer.image}} style={defaultStyle.image}/>
                </View>
                <Text numberOfLines={1} style={detailStyle.reviewerName}>
                  {item.reviewer.first_name} {item.reviewer.last_name}
                </Text>
              </View>
              <View style={detailStyle.reviewRatingContainer}>
                <Rating rating={item.rating} />
                <Text style={detailStyle.reviewCreatedAt}>{timefilter.createdAt(item.created_at)}</Text>
              </View>
              <Text style={detailStyle.review}>{item.review}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}
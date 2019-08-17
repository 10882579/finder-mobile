import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { detailStyle, defaultStyle } from '@src/static/index';
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

class App extends React.Component {

  state = {
    target: null,
  }

  ratingPercentage = (x) => {
    const { data } = this.props;
    const arr = data.filter( (item) => item.rating == x);
    const dataLength = data.length !== 0 ? data.length : 1;
    const percentage = arr.length * 100 / dataLength;
    return percentage
  }

  toggleTarget = (id) => {
    this.setState( (prev) => {
      return {target: prev.target == id ? null : id}
    })
  }

  render(){

    const { data, navigation } = this.props;
    const { params } = navigation.state;

    return(
      <View style={detailStyle.detailContainer}>
        <ScrollView style={defaultStyle.flex}
          bounces={false}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={detailStyle.detailRatingContainer}>
            <View style={detailStyle.userRatingContainer}>
              <Text style={detailStyle.userRating}>{params.rating}</Text>
              <Rating rating={params.rating} />
            </View>
            <View style={defaultStyle.flex}>
              <RatingItem rating={5} percent={this.ratingPercentage(5)}/>
              <RatingItem rating={4} percent={this.ratingPercentage(4)}/>
              <RatingItem rating={3} percent={this.ratingPercentage(3)}/>
              <RatingItem rating={2} percent={this.ratingPercentage(2)}/>
              <RatingItem rating={1} percent={this.ratingPercentage(1)}/>
            </View>
          </View>
          {
            data.map( (item) => (
              <TouchableOpacity key={item.id}
                activeOpacity={1}
                style={detailStyle.reviewItemContainer}
                onPress={ () => this.toggleTarget(item.id) }
              >
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
                <Text 
                  style={detailStyle.review} 
                  numberOfLines={this.state.target == item.id ? 99 : 2}
                >
                  {item.review}
                </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

export default App
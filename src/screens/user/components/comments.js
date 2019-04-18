import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { createdAt } from '@src/timefilter';
import Rating from './rating';

import axios from 'axios';

export default class App extends Component{

  state = {
    page: 1,
    posts: [],
    comments: []
  }

  componentDidMount(){
    const { mode, navigation } = this.props;
    const { params } = navigation.state;
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/review/${params.account.account_id}/list/`
    ) : (
      `http://localhost:8000/review/${params.account.account_id}/list/`
    )
      
    axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      url: url,
    })
    .then((res) => {
      this.setState( (prev) => ({...prev, comments: [...res.data]}) )
    })
    .catch((err) => {

    })
  }

  render(){

    return (
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={accountStyle.scrollviewContainer}>
          {
            this.state.comments.map( (item) => (
              <View key={item.id} style={[accountStyle.commentListItem, defaultStyle.shadow]}>
                <View style={accountStyle.reviewerContainer}>
                  <View style={accountStyle.reviewerImage}>
                    <Image source={{uri: item.reviewer.image}} style={defaultStyle.image}/>
                  </View>
                  <View>
                    <Text numberOfLines={1} style={accountStyle.reviewerName}>
                      {item.reviewer.first_name} {item.reviewer.last_name}
                    </Text>
                    <View style={accountStyle.reviewRatingContainer}>
                      <Rating rating={item.rating} hideRating style={accountStyle.reviewerRatingStar} contentStyle={{marginTop: 2}}/>
                      <Text style={accountStyle.reviewCreatedAt}>{createdAt(item.created_at)}</Text>
                    </View>
                  </View>
                </View>
                <Text style={accountStyle.review}>{item.review}</Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    )
  }

}

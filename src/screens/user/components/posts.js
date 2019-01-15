import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Animated } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { fetchPost } from '@src/requests';

import axios from 'axios';

export default class App extends Component{

  state = {
    page: 1,
    posts: []
  }

  componentDidMount(){

    const { account, mode, navigation } = this.props;
    const { params } = navigation.state;
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${params.id}/posts/page=${this.state.page}`
    ) : (
      `http://localhost:8000/account/${params.id}/posts/page=${this.state.page}`
    )

    axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
      url: url,
    })
    .then((res) => {
      this.setState( (prev) => ({...prev, posts: [...res.data]}) )
    })
    .catch((err) => {

    })
  }

  handleFetchPost = (id) => {
    const { navigation, mode, account } = this.props;
    fetchPost({
      mode: mode.server,
      token: account.token,
      id: id
    }).then( (data) => {
      navigation.navigate('Post', {...data})
    })
  }

  render(){

    return (
      <FlatList
        data={this.state.posts}
        scrollEventThrottle={1}
        renderItem={ ({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[accountStyle.listItem, defaultStyle.shadow]}
            onPress={ () => handleFetchPost(item.id) }
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
        keyExtractor={ (item, index) => String(item.id) }
      />
    )
  }

}

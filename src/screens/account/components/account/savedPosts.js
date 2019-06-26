import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';

export default class App extends Component{

  state = {
    page: 1,
    data: [],
  }

  componentDidMount(){
    const { fetchUserSavedPosts } = this.props;
    fetchUserSavedPosts(this.state.page, (data) => {
      this.setState( (prev) => ({
        ...prev,
        data: data
      }))
    })
  }

  handleFetchPost = (id) => {
    const { updateNavState, fetchPost, navigation } = this.props;
    updateNavState({direction: 'Account'});
    fetchPost(id, (data) => {
      navigation.navigate('Post', {...data})
    })
  }

  render(){
    const { data } = this.state;

    return (
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={accountStyle.scrollviewContainer}>
          {
            data.map( (item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={[accountStyle.listItem, defaultStyle.shadow]}
                onPress={ () => this.handleFetchPost(item.id) }
              >
                <View style={[defaultStyle.flex]}>
                  <Image source={{uri: item.images[0].uri}} style={defaultStyle.image}/>
                </View>
                <View style={accountStyle.itemTitleContainer}>
                  <Text style={accountStyle.itemTitle} numberOfLines={2}>{item.title}</Text>
                </View>
                <View style={accountStyle.itemPriceContainer}>
                  <Text style={accountStyle.itemPrice} numberOfLines={1}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

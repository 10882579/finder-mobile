import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { fetchPost } from '@src/requests';


export default class App extends Component{

  state = {
    page: 1,
  }

  componentDidMount(){
    const { account, fetchUserPosts } = this.props;
    fetchUserPosts(account.account_id, 'OVERRIDE_USER_POSTS', this.state.page)
  }

  handleFetchPost = (id) => {
    const { navigation, updateNavState, mode, account } = this.props;
    updateNavState({direction: 'Account'});
    fetchPost({
      mode: mode.server,
      token: account.token,
      id: id
    }).then( (data) => {
      navigation.navigate('Post', {...data})
    })
  }

  fetchPostOnScroll = (e) => {
    const { layoutMeasurement, contentOffset, contentSize } = e;
    const { account, fetchUserPosts } = this.props;

    if(layoutMeasurement.height + contentOffset.y == (contentSize.height) ){
      this.setState((prev) => ({...prev, page: prev.page +1}), () => {
        fetchUserPosts(account.account_id, 'USER_POSTS', this.state.page)
      })
    }
  }

  render(){
    const { posts, position } = this.props;

    return (
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={
          Animated.event(
            [{nativeEvent: {contentOffset: {y: posts.length >= 20 ? position : 0}} }],
            {listener: (e) => this.fetchPostOnScroll(e.nativeEvent) },
          )
        }
      >
        <View style={accountStyle.scrollviewContainer}>
          {
            posts.map( (item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={[accountStyle.listItem, defaultStyle.shadow]}
                onPress={ () => this.handleFetchPost(item.id) }
              >
                <View style={[defaultStyle.flex, {borderRadius: 4, overflow: 'hidden'}]}>
                  <Image source={{uri: item.photos[0].uri}} style={defaultStyle.image}/>
                </View>
                <View style={accountStyle.itemInformation}>
                  <View style={accountStyle.itemTitleContainer}>
                    <Text style={accountStyle.itemTitle} numberOfLines={2}>{item.title}</Text>
                  </View>
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

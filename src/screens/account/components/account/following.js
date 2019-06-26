import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { defaultStyle, accountStyle } from '@src/static/index';

export default class App extends Component{

  state = {
    page: 1,
    data: [],
  }

  componentDidMount(){
    const { fetchFollowingUsers } = this.props;
    fetchFollowingUsers(this.state.page, (data) => {
      this.setState( (prev) => ({
        ...prev,
        data: data
      }))
    })
  }

  navigateToAccount = (id) => {
    const { navigation, fetchSpecificAccount } = this.props;
    fetchSpecificAccount(id, (data) => {
      navigation.navigate('User', {...data})
    })
  }

  followAccount = (id) => {
    const { followAccount } = this.props;
    followAccount(id, () => {

    })
  }

  render(){

    const { data } = this.state;

    return (
      <ScrollView
        scrollEventThrottle={16}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={accountStyle.followScrollviewContainer}>
          {
            data.map( (item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={[accountStyle.followingUserContainer, defaultStyle.shadow]}
                onPress={ () => this.navigateToAccount(item.id) }
              >
                <View style={accountStyle.followingUserImage}>
                  <Image source={{uri: item.image}} style={defaultStyle.image}/>
                </View>
                <View style={accountStyle.followingUserNameContainer}>
                  <Text style={accountStyle.followingUserName} numberOfLines={1}>
                    { item.first_name } { item.last_name }
                  </Text>
                  <TouchableOpacity style={accountStyle.likeButtonContainer} onPress={ () => this.followAccount(item.id) }>
                    <AntDesign name={item.following ? 'like1' : 'like2'} style={accountStyle.likeIcon}/>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

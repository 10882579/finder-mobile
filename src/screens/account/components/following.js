import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import axios from 'axios';
import { defaultStyle, accountStyle } from '@src/static/index';

export default class App extends Component{

  state = {
    page: 1,
  }

  componentDidMount(){
    const { fetchFollowingUsers } = this.props;
    fetchFollowingUsers('OVERRIDE_FOLLOWING_USERS', this.state.page)
  }


  navigateToAccount = (id) => {
    const { navigation, account, mode } = this.props;
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${id}/`
    ) : (
      `http://localhost:8000/account/${id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({status, data}) => {
      navigation.navigate('User', {id, ...data})
    })
    .catch((err) => {

    })
  }

  render(){
    const { following, followAccount } = this.props;

    return (
      <FlatList
        data={following}
        scrollEventThrottle={5}
        bounces={false}
        renderItem={ ({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[accountStyle.followingUserContainer, defaultStyle.shadow]}
            onPress={ () => this.navigateToAccount(item.id) }
          >
            <View style={accountStyle.followingUserImage}>
              <Image source={{uri: item.image}} style={defaultStyle.image}/>
            </View>
            <View style={accountStyle.followingUserNameContainer}>
              <Text style={accountStyle.followingUserName} numberOfLines={1}>
                {item.first_name} {item.last_name}
              </Text>
              <TouchableOpacity style={accountStyle.likeButtonContainer} onPress={ () => followAccount(item.id) }>
                <AntDesign name={item.following ? 'heart' : 'hearto'} style={accountStyle.likeIcon}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={ (item, index) => String(item.id)}
      />
    )
  }

}

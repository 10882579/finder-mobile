import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { fetchSpecificAccount } from '@src/requests';
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
    fetchSpecificAccount({
      mode: mode.server,
      token: account.token,
      id: id
    }).then( (data) => {
      navigation.navigate('User', {...data})
    })
  }

  render(){
    const { following, followAccount } = this.props;

    return (
      <ScrollView
        scrollEventThrottle={16}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={accountStyle.scrollviewContainer}>
          {
            following.map( (item) => (
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
                    {item.first_name} {item.last_name}
                  </Text>
                  <TouchableOpacity style={accountStyle.likeButtonContainer} onPress={ () => followAccount(item.id) }>
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

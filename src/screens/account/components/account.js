import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Header from './header';
import { ImagePicker } from 'expo';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

const ActivityList = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={ props.action }
      style={accountStyle.activityItem}
    >
      <Text style={accountStyle.activityItemName}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default (props) => {

  const {
    account,
    navigation,
    fetchUserPosts,
    fetchUserSavedPosts,
    fetchFollowingUsers,
    updateAccountImage
  } = props;

  navigateToDetailPage = async (name) => {
    if(name == 'myposts'){
      navigation.navigate('Detail', {
        title: "Mening e'lonlarim",
        render: (page) => fetchUserPosts(account.account_id, page)
      })
    }
    else if(name == 'savedposts'){
      navigation.navigate('Detail', {
        title: "Kuzatilayotgan e'lonlar",
        render: (page) => fetchUserSavedPosts(page)
      })
    }
    else if(name == 'following'){
      navigation.navigate('Detail', {
        title: "Kuzatilayotgan shaxslar",
        render: (page) => fetchFollowingUsers(page)
      })
    }
  }

  uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Images',
      aspect: [1, 1],
    });
    if (!result.cancelled){
      updateAccountImage({image: result.uri}, navigation)
    }
  }

  return (
    <View style={defaultStyle.flex}>
      <View style={[accountStyle.topContainer, defaultStyle.shadow, accountStyle.topContainerHeight]}>
        <Header {...props}/>
        <View style={[accountStyle.userInformationContainer]}>
          <View style={[accountStyle.userImageContainer, accountStyle.userImageContainerDimension]}>
            <Image source={{uri: account.image}} style={defaultStyle.image}/>
            <TouchableOpacity
              style={accountStyle.accountImageChangeButton}
              activeOpacity={0.9} onPress={ this.uploadImage }
            >
              <EvilIcons name='camera' color='white' size={19}/>
            </TouchableOpacity>
          </View>
          <View style={accountStyle.userNameContainer}>
            <Text
              style={[accountStyle.userFullName, accountStyle.userFullNameForAccount]}
              numberOfLines={1}
            >
              { account.first_name } { account.last_name }
            </Text>
          </View>
        </View>
      </View>
      <View style={defaultStyle.flex}>
        <View style={accountStyle.accountActivityListContainer}>
          <ActivityList name="Mening e'lonlarim" action={ () => this.navigateToDetailPage("myposts") }/>
          <ActivityList name="Kuzatilayotgan e'lonlar" action={ () => this.navigateToDetailPage("savedposts") }/>
          <ActivityList name="Kuzatilayotgan shaxslar" action={ () => this.navigateToDetailPage("following") }/>
        </View>
      </View>
    </View>
  )
}

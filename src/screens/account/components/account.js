import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Header from './header';
import { ImagePicker } from 'expo';
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

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
      <View style={[accountStyle.container, defaultStyle.shadow]}>
        <View style={accountStyle.topContainer}>
          <Header {...props}/>
        </View>
        <View style={accountStyle.accountImageContainer}>
          <View style={accountStyle.accountImage}>
            <Image source={{uri: account.image}} style={defaultStyle.image}/>
            <TouchableOpacity
              style={accountStyle.accountImageUploadButton}
              activeOpacity={0.9} onPress={ this.uploadImage }
            >
              <EvilIcons name='camera' color='white' size={20}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={accountStyle.bottomContainer}>
          <View style={accountStyle.userNameContainer}>
            <Text style={accountStyle.userName}>{account.first_name} {account.last_name}</Text>
          </View>
          <View style={accountStyle.reatingContainer} />
          <View style={accountStyle.navigation}>
            <TouchableOpacity
              style={accountStyle.navigationList}
              >
              <AntDesign name='bars' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={accountStyle.navigationList}>
              <Feather name='bookmark' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={accountStyle.navigationList}>
              <AntDesign name='hearto' size={30}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={accountStyle.bodyContainer}>

      </View>
    </View>
  )
}

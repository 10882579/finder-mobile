import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';

import { Header, Rating } from './index';

import {
  fetchUserPosts,
  fetchUserSavedPosts,
  fetchFollowingUsers,
  updateAccount,
} from '@redux/actions/account';

class App extends Component {

  uploadImage = async () => {

    const { updateAccountImage, navigation } = this.props;

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Images',
      aspect: [1, 1],
    });
    if (!result.cancelled){
      updateAccountImage({image: result.uri}, navigation)
    }
  }

  render() {

    const { account } = this.props;

    return (
      <View style={defaultStyle.container}>
        <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
          <View style={accountStyle.topContainer}>
            <Header {...this.props}/>
          </View>
          <View style={defaultStyle.flex}>
            <View style={accountStyle.nameContainer}>
              <Text style={accountStyle.name} numberOfLines={1}>
                {account.first_name} {account.last_name}
              </Text>
            </View>
            <Rating rating={account.rating} />
          </View>
          <View style={accountStyle.accountContainer}>
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
          </View>
        </View>
        <View style={accountStyle.navigationContainer}>
          <TouchableOpacity style={accountStyle.navigationList}>
            <AntDesign name='bars' size={28}/>
            <Text style={accountStyle.navigationText}>E'lonlarim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList}>
            <Feather name='bookmark' size={28}/>
            <Text style={accountStyle.navigationText}>Belgilangan e'lonlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList}>
            <AntDesign name='like2' size={28}/>
            <Text style={accountStyle.navigationText}>Kuzatilayotkanlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList}>
            <AntDesign name='staro' size={28}/>
            <Text style={accountStyle.navigationText}>Reyting</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.detail.posts,
    saved: state.detail.savedPosts,
    following: state.detail.following
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (id, type, page) => {
      dispatch(fetchUserPosts(id, type, page))
    },
    fetchUserSavedPosts: (type, page) => {
      dispatch(fetchUserSavedPosts(type, page))
    },
    fetchFollowingUsers: (type, page) => {
      dispatch(fetchFollowingUsers(type, page))
    },
    updateAccountImage: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

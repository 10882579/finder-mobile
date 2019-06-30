import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { EvilIcons } from '@expo/vector-icons';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { fetchPost } from '@redux/actions/home';

import Header from "./header";
import Rating from './rating';
import DetailView from './detailview';

import { 
  fetchUserPosts, 
  fetchUserSavedPosts, 
  fetchFollowingUsers, 
  fetchSpecificAccount,
  followAccount,
  updateAccount
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
        <DetailView {...this.props}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountImage: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    },
    fetchUserPosts: (id, page, cb) => {
      dispatch(fetchUserPosts(id, page, cb))
    },
    fetchUserSavedPosts: (page, cb) => {
      dispatch(fetchUserSavedPosts(page, cb))
    },
    fetchFollowingUsers: (page, cb) => {
      dispatch(fetchFollowingUsers(page, cb))
    },
    fetchSpecificAccount: (id, cb) => {
      dispatch(fetchSpecificAccount(id, cb))
    },
    fetchPost: (id, cb) => {
      dispatch(fetchPost(id, cb))
    },
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
    updateAccount: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

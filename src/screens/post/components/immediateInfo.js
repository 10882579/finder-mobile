import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Feather, MaterialIcons, Entypo } from '@expo/vector-icons';
import { postStyle, defaultStyle } from '@src/static/index';

const navigateToChat = (props) => {
  const { navigation, fetchMessages, post, account, updateNavState } = props;
  const { params } = navigation.state;
  if(account.accountFetched){
    fetchMessages(post.account.account_id, (messages, status) => {
      if (status == 200){
        navigation.navigate('Chat', {...post.account, messages: messages})
      }
    })
  }
  else{
    navigation.navigate('Account');
  }
  updateNavState({direction: 'Post', id: params.id});
}

const editPostById = (props) => {
  const { navigation, updateCreateDataState, updateNavState, post } = props;
  const { id } = navigation.state.params;
  updateCreateDataState({
    id: id,
    editing: true,
    ...post,
    selectedImages: [...post.photos]
  })
  updateNavState({direction: 'Post', id: id})
  navigation.navigate('Create');
}


export default (props) => {

  const { post, account } = props;

  return (
    <View style={postStyle.itemInfoContainer}>
      <View style={defaultStyle.flex}>
        <View style={postStyle.titleContainer}>
          <Text style={postStyle.title} numberOfLines={2}>{post.title}</Text>
        </View>
        <View style={postStyle.locationContainer}>
          <Entypo name='location-pin' style={[postStyle.location, postStyle.locationIcon]}/>
          <Text style={postStyle.location}>{post.city_town}, {post.state}</Text>
        </View>
      </View>
      <View style={postStyle.editBtnContainer}>
        {
          post.account.account_id == account.account_id ? !post.sold ? (
            <TouchableOpacity style={postStyle.contactContainer} activeOpacity={0.8} onPress={ () => editPostById(props) }>
              <MaterialIcons name='edit' style={postStyle.contactIcon}/>
            </TouchableOpacity>
          ) : null : (
            <TouchableOpacity style={postStyle.contactContainer} activeOpacity={0.8} onPress={ () => navigateToChat(props) }>
              <Feather name='message-circle' style={postStyle.contactIcon}/>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

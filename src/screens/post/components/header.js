import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { postStyle, defaultStyle } from '@src/static/index';


const savePostAsync = async (props) => {
  const { savePost, navigation } = props;
  await savePost(navigation)
}




export default (props) => {
  const { account, post, toggleModal, navigation, handleGoBack } = props;

  return (
    <View style={defaultStyle.transparentHeaderContainer}>
      <TouchableOpacity
        style={defaultStyle.headerIconContainer}
        activeOpacity={0.8}
        onPress={ () => handleGoBack(navigation) }
      >
        <Ionicons
          name='md-arrow-round-back'
          style={defaultStyle.headerIcon}
        />
      </TouchableOpacity>
      <View style={defaultStyle.headerBodyContainer}/>
        {
          post.account.account_id !== account.account_id && !post.sold ? (
            <TouchableOpacity style={defaultStyle.headerIconContainer} activeOpacity={0.8} onPress={ () => savePostAsync(props) }>
              <FontAwesome name={ post.saved ? 'bookmark' : 'bookmark-o'} style={defaultStyle.headerIcon}/>
            </TouchableOpacity>
          ) : null
        }
        {
          post.sold && post.account.account_id !== account.account_id && post.saved ? (
             <TouchableOpacity style={defaultStyle.headerIconContainer} activeOpacity={0.8} onPress={ () => savePostAsync(props) }>
               <FontAwesome name='bookmark' style={defaultStyle.headerIcon}/>
             </TouchableOpacity>
           ) : null
        }
        {
          post.account.account_id === account.account_id ? (
            <TouchableOpacity style={defaultStyle.headerIconContainer} activeOpacity={0.8} onPress={ () => toggleModal(true) }>
              <Feather name='trash' style={defaultStyle.headerIcon}/>
            </TouchableOpacity>
           ) : null
        }
    </View>
  )
}

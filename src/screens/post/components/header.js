import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { defaultStyle, postStyle } from '@src/static/index';
import handleGoBack from '@redux/actions/handleGoBack';

const BackButton = (props) => {
  
  const { navigation } = props;
  const { params } = navigation.state;

  return (
    <TouchableOpacity
      style={postStyle.headerButton}
      activeOpacity={0.8}
      onPress={ () => handleGoBack(params, navigation) }
    >
      <Ionicons
        name='md-arrow-round-back'
        style={defaultStyle.headerIcon}
      />
    </TouchableOpacity>
  )
}

export default (props) => {
  
  return (
    <View style={postStyle.header}>
      <BackButton {...props} />
      {
        props.post.account.account_id !== props.account.account_id ? (
          <TouchableOpacity
            style={postStyle.headerButton}
            activeOpacity={0.8}
            onPress={ props.toggleSavePost }
          >
            <FontAwesome 
              name={ props.post.saved ? 'bookmark' : 'bookmark-o'} 
              style={defaultStyle.headerIcon}
            />
          </TouchableOpacity>
        ): null
      }
    </View>
  )
}
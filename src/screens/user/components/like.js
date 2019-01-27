import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';
import axios from 'axios';

export default (props) => {

  const { account, mode, navigation } = props;
  const { params } = navigation.state;

  followAccount = (id) => {
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/account/${id}/follow/`
      ) : (
        `http://localhost:8000/account/${id}/follow/`
      )
      axios({
        method: 'POST',
        url: url,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then(({data, status}) => {
        props.followAccount()
      })
      .catch((err) => {

      })
    }
  }

  return (
    <TouchableOpacity
      style={accountStyle.likeContainer}
      onPress={ () => this.followAccount(params.id) }
    >
      <FontAwesome name={props.following ? 'thumbs-up' : 'thumbs-o-up'} color="#1aa3ff" size={28}/>
    </TouchableOpacity>
  )
}

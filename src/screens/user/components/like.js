import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
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
      <AntDesign name={props.following ? 'heart' : 'hearto'} color="red" size={28}/>
    </TouchableOpacity>
  )
}

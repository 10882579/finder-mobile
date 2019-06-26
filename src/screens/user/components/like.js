import React from 'react';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';

export default (props) => {

  const { params } = props.navigation.state;

  return (
    <TouchableOpacity
      style={accountStyle.likeContainer}
      onPress={ () => props.follow(params.account.account_id) }
    >
      <AntDesign name={props.following ? 'like1' : 'like2'} color="#1aa3ff" size={28}/>
    </TouchableOpacity>
  )
}

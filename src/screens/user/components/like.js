import React from 'react';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';

export default (props) => {

  const { state } = props;

  return (
    <TouchableOpacity
      style={accountStyle.likeContainer}
      onPress={ () => props.follow(state.account.account_id) }
    >
      <AntDesign name={state.following ? 'like1' : 'like2'} color="#1aa3ff" size={28}/>
    </TouchableOpacity>
  )
}

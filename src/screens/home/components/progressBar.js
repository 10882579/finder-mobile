import React from 'react';
import {  Text, View } from 'react-native';

import { homeStyle } from '@src/static/index';

export default (props) => {
  const { post } = props;

  if(post.progress > 0){
    return (
      <View style={homeStyle.progressBar}>
        <View style={homeStyle.progressContainer}>
          <View style={[homeStyle.progress, { width: `${post.progress}%`}]}>

          </View>
        </View>
        <Text style={{alignSelf: 'center'}}>{post.progress}%</Text>
      </View>
    )
  }
  else{
    return null
  }
}

import React from 'react';
import {  Text, View } from 'react-native';

import { homeStyle } from '@src/static/index';

export default (props) => {
  const { create } = props;

  if(create.progress > 0){
    return (
      <View style={homeStyle.progressBar}>
        <View style={homeStyle.progressContainer}>
          <View style={[homeStyle.progress, { width: `${create.progress}%`}]}>

          </View>
        </View>
        <Text style={{alignSelf: 'center'}}>{create.progress}%</Text>
      </View>
    )
  }
  else{
    return null
  }
}

import React from 'react';
import { Text, View } from 'react-native';

import { homeStyle } from '@src/static/index';

export default (props) => {
  const { uploadProgress } = props;

  if(uploadProgress.progress > 0 && uploadProgress.progress !== 100){
    return (
      <View style={homeStyle.progressBarContainer}>
        <View style={homeStyle.progressContainer}>
          <View style={[homeStyle.progress, { width: `${uploadProgress.progress}%`}]} />
          <Text numberOfLines={1} style={[homeStyle.progressText, {marginHorizontal: 15}]}>{uploadProgress.title}</Text>
        </View>
        <View style={homeStyle.percentContainer}>
          <Text style={homeStyle.progressText}>{uploadProgress.progress}%</Text>
        </View>
      </View>
    )
  }
  else{
    return null
  }
}

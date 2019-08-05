import React from 'react';
import { View, Text } from 'react-native';
import { postStyle, defaultStyle } from '@src/static/index';

const Condition = (props) => {
  return (
    <View style={[postStyle.conditionButton, 
      props.selected ? postStyle.selectedCondition : null,
      props.selected ? defaultStyle.shadow : null,
    ]}>
      <Text style={[postStyle.conditionName, 
        !props.selected ? {color: 'darkgrey'} : null
      ]}>{props.condition}</Text>
    </View>
  )
}

export default (props) => {
  const { post } = props;
  return (
    <View style={postStyle.conditionContainer}>
      <Text style={postStyle.conditionText}>Holati:</Text>
      <View style={postStyle.conditionListContainer}>
        <Condition condition='Qoniqarsiz' selected={post.condition == 'dissatisfactory' ? true : null}/>
        <Condition condition='Qoniqarli' selected={post.condition == 'satisfactory' ? true : null}/>
        <Condition condition='Yaxshi' selected={post.condition == 'good' ? true : null}/>
        <Condition condition="A'lo/Yangi" selected={post.condition == 'great' ? true : null}/>
      </View>
    </View>
  )
}
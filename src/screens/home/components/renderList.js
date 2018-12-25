import React from 'react';
import { View } from 'react-native';

import PremiumList from './premiumList';
import RegularList from './regularList';

import { defaultStyle } from '@src/static/index';

const findPremiumInArr = (item, index) => {
  let premium = false;
  item.forEach(function(element) {
    if (element.premium){
      premium = true
    }
  });
  if(index % 2 === 0 && premium && item.length === 3){
    return true
  }
  else{
    return false
  }
}


export default (props) => {
  const { home } = props;

  return (
    <View style={defaultStyle.flex}>
      {
        home.allPosts.map((item, index) => (
          findPremiumInArr(item, index)
          ? <PremiumList {...props} item={item} key={index}/>
          : <RegularList {...props} item={item} key={index}/>
        ))
      }
    </View>
  )
}

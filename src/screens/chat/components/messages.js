import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { chatStyle, defaultStyle } from '@src/static/index';
import { messageCreateAt } from '@src/timefilter';
export default (props) => {

  const { data, account } = props;
  return (
    <ScrollView style={defaultStyle.flex} bounces={false}>
      {
        data.map( (item, i) => (
          <View 
            style={[
              chatStyle.messageListItem, 
              account.account_id == item.account_id ? {flexDirection: 'row-reverse'} : null
          ]} key={i}>
            <View style={chatStyle.messageItemImageContainer}>
              <View style={chatStyle.messageItemImage}>
                <Image source={{uri: item.image}} style={defaultStyle.image}/>
              </View>
            </View>
            <View style={chatStyle.messageItemContext}>
              <Text numberOfLines={1} style={chatStyle.senderUsername}>{item.first_name} {item.last_name}</Text>
              <Text style={chatStyle.messageText}>{item.message}</Text>
              <Text style={chatStyle.messageTimeText}>{messageCreateAt(item.created_at)}</Text>
            </View>
          </View>
        ))
      }
    </ScrollView>
  )
}

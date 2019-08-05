import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, EvilIcons } from '@expo/vector-icons';

import { defaultStyle, postStyle } from '@src/static/index';

export default (props) => {

  const { navigation, account, post } = props;

  navigateToChat = () => {
		if(account.accountFetched){
			navigation.navigate('Chat', {...post.account})
		}
		else{
			navigation.navigate('Account');
		}
  }

  return (
    <View style={postStyle.contactButtonContainer}>
      {
        account.account_id === post.account.account_id ? (
          <TouchableOpacity style={[postStyle.contactButton, defaultStyle.shadow]}>
            <EvilIcons name='pencil' style={postStyle.contactIcon}/>
            <Text style={postStyle.contactText}>O'zgartirish</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[postStyle.contactButton, defaultStyle.shadow]} onPress={this.navigateToChat}>
            <Feather name='message-circle' style={postStyle.contactIcon}/>
            <Text style={postStyle.contactText}>Kontakt</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}
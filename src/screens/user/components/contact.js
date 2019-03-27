import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';

export default (props) => {

	navigateToChat = () => {
	  const { navigation, fetchMessages, account } = props;
	  const { params } = navigation.state;
	  
	  if(account.accountFetched){
			fetchMessages(params.account.account_id, (messages, status) => {
				if (status == 200){
					navigation.navigate('Chat', {...params.account, messages: messages})
				}
			})
	  }
	  else{
			navigation.navigate('Account');
	  }
	}
  
	return (
		<TouchableOpacity style={accountStyle.contactContainer} onPress={ this.navigateToChat }>
			<Feather name='message-circle' color="#1aa3ff" size={28}/>
		</TouchableOpacity>
	)
}

import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';

export default (props) => {

	navigateToChat = () => {
		const { navigation, state, account } = props;
		
		if(account.accountFetched){
			navigation.navigate('Chat', {...state.account})
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

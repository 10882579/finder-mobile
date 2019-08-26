import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { accountStyle } from '@src/static/index';

export default (props) => {

	navigateToChat = () => {
		const { navigation, state, account, fetchChatRoomName } = props;
		const { params } = navigation.state;
		
		if(account.accountFetched){
			fetchChatRoomName(state.account.account_id, (data) => {
				navigation.navigate('Chat', {
					...state.account,
					room: data.room,
					from: {
						screen: 'User',
						id: params.id
					} 
				})
			})
		}
		else{
			navigation.navigate('Account', {
				from: {
					screen: 'User',
					id: params.id
				}
			});
		}
	}
  
	return (
		<TouchableOpacity style={accountStyle.contactContainer} onPress={ this.navigateToChat }>
			<Feather name='message-circle' color="#1aa3ff" size={28}/>
		</TouchableOpacity>
	)
}

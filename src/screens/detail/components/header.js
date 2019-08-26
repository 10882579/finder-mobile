import React from 'react';
import { View, TouchableOpacity, StatusBar, Text } from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { defaultStyle } from '@src/static/index';

import handleGoBack from '@redux/actions/handleGoBack';

export default (props) => {
	const { navigation, screen, account, toggleForm, showForm } = props;
	const { params } = navigation.state;
	return (
	  <View style={[defaultStyle.customHeaderContainer, defaultStyle.shadow]}>
			<StatusBar barStyle='light-content'/>
			<TouchableOpacity
				style={defaultStyle.headerIconContainer}
				activeOpacity={0.8}
				onPress={ () => handleGoBack(navigation) }
			>
				<Ionicons
					name='md-arrow-round-back'
					style={defaultStyle.headerIcon}
				/>
			</TouchableOpacity>
			<View style={defaultStyle.headerBodyContainer}>
        <Text style={defaultStyle.headerBodyText}>{screen}</Text>
      </View>
			{
				account.accountFetched && params.id && !showForm && params.screen == 'rating' ? (
					<TouchableOpacity style={defaultStyle.headerIconContainer} onPress={ toggleForm }>
						<AntDesign name='plus' style={defaultStyle.headerIcon}/>
					</TouchableOpacity>
				) : null
			}
	  </View>
	)
}
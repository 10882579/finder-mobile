import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';

import { Ionicons }     from '@expo/vector-icons';
import { defaultStyle, loginStyle } from '@src/static/index';

export default (props) => {
	const { navigation } = props;
	return (
	  <View style={[defaultStyle.customHeaderContainer, loginStyle.header]}>
			<StatusBar barStyle='light-content'/>
			<TouchableOpacity
				style={defaultStyle.headerIconContainer}
				activeOpacity={0.8}
				onPress={ () => props.handleGoBack(navigation) }
			>
				<Ionicons
					name='md-arrow-round-back'
					style={defaultStyle.headerIcon}
				/>
			</TouchableOpacity>
			<View style={defaultStyle.headerBodyContainer}/>
	  </View>
	)
}
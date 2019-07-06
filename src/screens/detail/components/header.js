import React from 'react';
import { View, TouchableOpacity, StatusBar, Text } from 'react-native';

import { Ionicons }     from '@expo/vector-icons';
import { defaultStyle } from '@src/static/index';

export default (props) => {
	const { navigation, screen } = props;
	return (
	  <View style={[defaultStyle.customHeaderContainer, defaultStyle.shadow]}>
			<StatusBar barStyle='light-content'/>
			<TouchableOpacity
				style={defaultStyle.headerIconContainer}
				activeOpacity={0.8}
				onPress={ () => navigation.goBack() }
			>
				<Ionicons
					name='md-arrow-round-back'
					style={defaultStyle.headerIcon}
				/>
			</TouchableOpacity>
			<View style={defaultStyle.headerBodyContainer}>
        <Text style={defaultStyle.headerBodyText}>{screen}</Text>
      </View>
	  </View>
	)
}
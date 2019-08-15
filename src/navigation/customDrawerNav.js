import React, { Component } from 'react';
import { 
	AsyncStorage, 
	StyleSheet, 
	View, 
	Image, 
	Text, 
	TouchableOpacity, 
	Dimensions, 
	Platform
} from 'react-native';
import { Constants } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { defaultStyle } from '@src/static/index';
import app from '../../app.json';

const { width, height } = Dimensions.get('window');
const radius = Math.round(width + height) / 2

class CustomDrawerContentComponent extends Component{

	state = {
		defaultUserImage: 'https://s3.amazonaws.com/educate.uz/default/male_default.jpg',
	}

	render(){

		const { account, logout } = this.props;

		return(
			<SafeAreaView style={styles.container}>
				<View style={styles.versionContainer}>
					<Text style={styles.version}>{app.expo.version}</Text>
				</View>
				<View style={styles.topContainer}>
					<View style={styles.imageContainer}>
						{
							account.accountFetched ? (
								<Image source={{uri: account.image}} style={defaultStyle.image}/>
							) : (
								<Image source={{uri: this.state.defaultUserImage}} style={defaultStyle.image}/>
							)
						}
					</View>
					<View style={styles.nameContainer}>
						{
							account.accountFetched ? (
								<View style={styles.alignHorizontal}>
									<Text numberOfLines={1} style={styles.name}>
										{account.first_name} {account.last_name}
									</Text>
									<Text numberOfLines={1} style={styles.email}>
										{account.email}
									</Text>
								</View>
							) : (
								<Text numberOfLines={1} style={styles.name}>
									Guest visitor
								</Text>
							)
						}
					</View>
				</View>
				<View style={defaultStyle.flex}>
					<DrawerItems {...this.props}/>
				</View>
				{
					account.accountFetched ? (
						<TouchableOpacity style={styles.logoutContainer} onPress={ logout }>
							<Feather name='log-out' size={24} color='#859398' />
							<Text style={styles.logoutText}>Log out</Text>
						</TouchableOpacity>
					) : null
				}
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	versionContainer: {
		position: 'absolute',
		alignSelf: 'center',
		top: Constants.statusBarHeight,
	},
	version: {
		fontFamily: 'Default',
		color: '#1c5372'
	},
	container: {
		flex: 1,
		backgroundColor: '#021825',
		overflow: 'hidden',
		...Platform.select({
      android: {
        paddingTop: Constants.statusBarHeight
      },
    })
	},
	topContainer: {
		width: '100%',
		height: height/3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: height/7,
		height: height/7,
		borderRadius: radius,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: '#E5E4E0',
	},
	nameContainer: {
		width: width *2/3 - 60,
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	alignHorizontal: {
		alignItems: 'center',
	},
	name: {
		color: 'white', 
		fontSize: 20, 
		fontFamily: 'Default-Bold' 
	},
	email: {
		color: '#859398', 
		fontSize: 15, 
		fontFamily: 'Default'
	},
	logoutContainer: {
		flexDirection: 'row',
		height: 50, 
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 10,
	},
	logoutText: {
		paddingHorizontal: 15,
		color: 'white',
		fontFamily: 'Default',
		fontWeight: '400',
		fontSize: 16
	}
})


const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      AsyncStorage.removeItem('token');
      dispatch({type: 'LOG_OUT'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContentComponent)
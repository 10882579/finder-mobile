import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';

class CustomDrawerContentComponent extends Component{

	render(){

		const { account, logout } = this.props;

		return(
			<SafeAreaView style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.logoContainer}>
						<Image source={require('@src/static/imgs/logo-grey.png')} style={styles.logo}/>
					</View>
				</View>
				<DrawerItems {...this.props}/>
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
	container: {
		flex: 1,
		backgroundColor: '#16222A',
		overflow: 'hidden'
	},
	topContainer: {
		width: '100%',
		height: 170,
		borderBottomWidth: 1,
		borderBottomColor: '#859398'
	},
	logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain'
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
		color: '#859398',
		fontFamily: 'Default',
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
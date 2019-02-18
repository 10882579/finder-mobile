import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialCommunityIcons as MIcon } from '@expo/vector-icons';

import Home from '@screens/home/screen';
import Post from '@screens/post/screen';
import Account from '@screens/account/screen';
import Create from '@screens/create/screen';
import User from '@screens/user/screen';

import CustomDrawer from './customDrawerNav';

const TabNav = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <FontAwesome name='home' color={tintColor} size={26}/>
      },
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Entypo name='camera' color={tintColor} size={24}/>
      },
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <MIcon name='account-location' color={tintColor} size={26}/>
      },
    }
  }
},
{
  contentComponent: CustomDrawer,
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'none',
    inactiveTintColor: '#859398',
    inactiveBackgroundColor: 'none',
    labelStyle: {
      fontFamily: 'Default',
      fontSize: 16,
    }
  }
})

export default createStackNavigator({
  Home: TabNav,
  Post: {
    screen: Post
  },
  User: {
    screen: User
  }
}, {
  headerMode: 'none',
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  	},
  }),
})

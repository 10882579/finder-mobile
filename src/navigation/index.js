import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialCommunityIcons as MIcon } from '@expo/vector-icons';

import Home from '@screens/home/screen';
import Create from '@screens/create/screen';
import Account from '@screens/account/screen';
import Post from '@screens/post/screen';

const AccountNav = createStackNavigator({
  Account: {
    screen: Account
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
)

const HomeNav = createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post,
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  })


export default createBottomTabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <FontAwesome name='home' color={tintColor} size={24}/>
      },
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Entypo name='camera' color={tintColor} size={30}/>
      },
      tabBarVisible: false,
    }
  },
  Account: {
    screen: AccountNav,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <MIcon name='account-location' color={tintColor} size={30}/>
      },
      tabBarVisible: false,
    }
  }
},
{
  navigationOptions: {
    gesturesEnabled: false,
  },
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: '#859398',
    tabStyle: {
      backgroundColor: '#16222A',
    },
  },
})

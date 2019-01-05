import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialCommunityIcons as MIcon } from '@expo/vector-icons';

import Home from '@screens/home/screen';
import Post from '@screens/post/screen';
import Account from '@screens/account/screen';
import Create from '@screens/create/screen';

const TabNav = createBottomTabNavigator({
  Home: {
    screen: Home,
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
    screen: Account,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <MIcon name='account-location' color={tintColor} size={30}/>
      },
      tabBarVisible: false,
    }
  }
},
{
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: '#859398',
    tabStyle: {
      backgroundColor: '#16222A',
    },
  },
})

export default createStackNavigator({
  Home: TabNav,
  Post: {
    screen: Post
  },
}, {
  headerMode: 'none'
})

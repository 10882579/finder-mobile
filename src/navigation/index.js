import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import Home from '@screens/home/screen';
import Create from '@screens/create/screen';

export default createBottomTabNavigator({
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
},
{
  navigationOptions: {
    // gesturesEnabled: false,
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

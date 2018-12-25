import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Home from '@screens/home/screen';

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <FontAwesome name='home' color={tintColor} size={24}/>
      },
    }
  }
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

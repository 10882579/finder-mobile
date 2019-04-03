import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Entypo, Ionicons } from '@expo/vector-icons';

import Home from '@screens/home/screen';
import Post from '@screens/post/screen';
import Account from '@screens/account/screen';
import Create from '@screens/create/screen';
import User from '@screens/user/screen';
import Chat from '@screens/chat/screen';
import Notifications from '@screens/notification/screen';

import CustomDrawer from './customDrawerNav';

const { width } = Dimensions.get('window');

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Ionicons name='md-home' color={tintColor} size={28}/>
      },
      title: 'Asosiy sahifa'
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Entypo name='camera' color={tintColor} size={23}/>
      },
      title: "E'lon berish"
    }
  },
  Notifications : {
    screen: Notifications,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Ionicons name='md-notifications' color={tintColor} size={28}/>
      },
      title: 'Bildirgilar'
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Ionicons name='ios-person' color={tintColor} size={28}/>
      },
      title: "Shaxsiy sahifa"
    }
  }
},
{
  contentComponent: CustomDrawer,
  drawerWidth: width *2/3,
  contentOptions: {
    activeTintColor: '#01B18C',
    activeBackgroundColor: 'none',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: 'none',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    labelStyle: {
      fontFamily: 'Default',
      fontSize: 16,
    }
  }
})

export default createStackNavigator({
  Home: DrawerNavigation,
  Post: {
    screen: Post
  },
  User: {
    screen: User
  },
  Chat: {
    screen: Chat
  }
}, {
  headerMode: 'none',
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  	},
  }),
})

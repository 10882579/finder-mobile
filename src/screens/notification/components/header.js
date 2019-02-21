import React from 'react';
import { View, StatusBar, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { defaultStyle, notificationStyle } from '@src/static/index';

import Animation from '../animations/header';

const { width, height } = Dimensions.get('window');

export default (props) => {

  this.chatWidth = new Animated.Value(50);

  const renderMessages = () => {
    Animated.timing(this.chatWidth, {
      duration: 500,
      toValue: width - 102 
    }).start()
  }

  const renderNotifications = () => {
    Animated.timing(this.chatWidth, {
      duration: 500,
      toValue: 50 
    }).start()
  }

  const { fadeIn, fadeOut } = Animation(this.chatWidth, width);

  return (
    <View style={[
        defaultStyle.customHeaderContainer, 
        notificationStyle.headerContainer,
        defaultStyle.shadow
      ]}>
      <StatusBar barStyle="dark-content"/>
      <View style={[notificationStyle.headerButtonContainer]}>
        <TouchableOpacity 
          style={notificationStyle.headerButton} 
          onPress={ () => props.navigation.toggleDrawer() }
        >
          <Feather name='menu' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={notificationStyle.divider}/>
      <View style={[notificationStyle.headerButtonContainer, defaultStyle.flex]}>
        <TouchableOpacity 
          style={notificationStyle.headerButton}
          onPress={ renderNotifications } 
        >
          <MaterialIcons name='notifications-none' size={28}/>
        </TouchableOpacity>
        <View style={defaultStyle.flex}>
          <Animated.Text 
            style={[notificationStyle.headerTitleText, {opacity: fadeOut}]}
          >
              Notifications
          </Animated.Text>
        </View>
      </View>
      <View style={notificationStyle.divider}/>
      <Animated.View style={[notificationStyle.headerButtonContainer, { width: this.chatWidth }]}>
        <TouchableOpacity 
          style={notificationStyle.headerButton}
          onPress={ renderMessages }
        >
          <Feather name='message-circle' size={25}/>
        </TouchableOpacity>
        <View style={defaultStyle.flex}>
          <Animated.Text 
            style={[notificationStyle.headerTitleText, {opacity: fadeIn}]}
          >
            Messages
          </Animated.Text>
        </View>
      </Animated.View>
    </View>
  )
}

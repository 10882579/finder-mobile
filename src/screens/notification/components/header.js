import React from 'react';
import { View, StatusBar, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { defaultStyle, notificationStyle } from '@src/static/index';
import Animation from '../animations/header';

const { width } = Dimensions.get('window');

export default class App extends React.Component {

  componentWillMount(){
    this.width = new Animated.Value(50);
  }

  renderMessages = () => {
    const { fetchConversations, updateState } = this.props; 
    fetchConversations( (data, status) => {
      if(status == 200){
        Animated.timing(this.width, {
          duration: 500,
          toValue: width - 102
        }).start( () => {
          updateState({
            renderMessages: true,
            data: data
          })
        })
      }
    })
  }

  renderNotifications = () => {
    const { updateState } = this.props; 
    Animated.timing(this.width, {
      duration: 500,
      toValue: 50 
    }).start( () => {
      updateState({
        renderMessages: false,
        data: []
      })
    })
  }

  render(){
    const { navigation } = this.props;
    const { fadeIn, fadeOut } = Animation(this.width, width);

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
            onPress={ () => navigation.toggleDrawer() }
          >
            <Feather name='menu' size={25}/>
          </TouchableOpacity>
        </View>
        <View style={notificationStyle.divider}/>
        <View style={[notificationStyle.headerButtonContainer, defaultStyle.flex]}>
          <TouchableOpacity 
            style={notificationStyle.headerButton}
            onPress={ this.renderNotifications } 
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
        <Animated.View style={[notificationStyle.headerButtonContainer, { width: this.width }]}>
          <TouchableOpacity 
            style={notificationStyle.headerButton}
            onPress={ this.renderMessages }
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
}

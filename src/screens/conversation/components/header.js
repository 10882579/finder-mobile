import React from 'react';
import { View, StatusBar, TouchableOpacity, Text, Platform } from 'react-native';
import { defaultStyle, notificationStyle } from '@src/static/index';
import { Feather } from '@expo/vector-icons';


export default class App extends React.Component {

  render(){
    const { navigation } = this.props;

    return (
      <View style={[
        defaultStyle.customHeaderContainer, 
        notificationStyle.headerContainer,
        defaultStyle.shadow
      ]}>
        <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}/>
        <TouchableOpacity 
          style={defaultStyle.headerIconContainer} 
          onPress={ () => navigation.toggleDrawer() }
        >
          <Feather name='menu' size={25}/>
        </TouchableOpacity>
        <View style={notificationStyle.divider}/>
        <View style={[defaultStyle.headerBodyContainer, defaultStyle.displayInLine]}>
          <View style={notificationStyle.headerButton}>
            <Feather name='message-circle' size={26}/>
          </View>
          <View style={defaultStyle.flex}>
            <Text style={notificationStyle.headerTitleText}>
              Muloqotlar
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

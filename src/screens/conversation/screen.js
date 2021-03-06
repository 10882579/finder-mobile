import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { fetchConversations } from '@redux/actions/notification';
import { defaultStyle, chatStyle } from '@src/static/index';
import { connect } from 'react-redux';

import Header from './components/header'; 

class App extends Component {

  componentWillMount(){
    this.props.fetchConversations();
  }

  navigateToChat = (item) => {
    const { navigation, account } = this.props;

    if(account.accountFetched){
      navigation.navigate('Chat', {
        ...item, 
        from: {
          screen: 'Conversations'
        }
      })
    }
    else{
      navigation.navigate('Account');
    }
  }

  render() {
    const { conversations } = this.props;

    return (
      <View style={defaultStyle.container}>
        <Header {...this.props}/>
        <ScrollView style={chatStyle.container} bounces={false}>
          {
            conversations.map( (item, index) => (
              <TouchableOpacity activeOpacity={0.8} key={index} 
                style={[chatStyle.conversationItem, defaultStyle.shadow]}
                onPress={ () => this.navigateToChat(item) }
              >
                <View style={chatStyle.imageContainer}>
                  <Image source={{uri: item.image}} style={defaultStyle.image}/>
                </View>
                <View style={chatStyle.usernameContainer}>
                  <Text style={chatStyle.username} numberOfLines={1}>{item.first_name} {item.last_name}</Text>
                  <Text style={chatStyle.lastMessage} numberOfLines={1}>{item.last_message}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    conversations: state.notification.conversations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConversations: () => {
      dispatch(fetchConversations())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

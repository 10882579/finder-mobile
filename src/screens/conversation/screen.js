import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { fetchMessages, fetchConversations } from '@redux/actions/notification';
import { defaultStyle, chatStyle } from '@src/static/index';
import { connect } from 'react-redux';

import { Header } from './components/index'; 

class App extends Component {
  state = {
    converstations: []
  }

  componentWillMount(){
    this.props.fetchConversations( (data, status) => {
      if(status == 200){
        this.setState( (prev) => ({converstations: data}))
      }
    })
  }

  navigateToChat = (item) => {
    const { navigation, fetchMessages } = this.props;
    fetchMessages(item.account_id, (messages, status) => {
      if (status == 200){
        navigation.navigate('Chat', {...item, messages: messages})
      }
    })
  }

  render() {
    const { converstations } = this.state;
    return (
		<View style={defaultStyle.container}>
			<Header {...this.props}/>
      <ScrollView style={chatStyle.container} bounces={false}>
        {
          converstations.map( (item, index) => (
            <TouchableOpacity activeOpacity={0.8} key={index} 
              style={[chatStyle.conversationItem, defaultStyle.shadow]}
              onPress={ () => this.navigateToChat(item) }
            >
              <View style={chatStyle.imageContainer}>
                <Image source={{uri: item.image}} style={defaultStyle.image}/>
              </View>
              <View style={defaultStyle.flex}>
                <View style={chatStyle.usernameContainer}>
                  <Text style={chatStyle.username}>{item.first_name} {item.last_name}</Text>
                </View>
                <View style={defaultStyle.flex} />
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
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConversations: (cb) => {
      dispatch(fetchConversations(cb))
    },
    fetchMessages: (id, cb) => {
      dispatch(fetchMessages(id, cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

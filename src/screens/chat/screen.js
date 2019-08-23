import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Messages } from './components/index';
import { fetchMessages, saveMessage } from '@redux/actions/notification';
import { chatStyle, defaultStyle } from '@src/static/index';
import { connect } from 'react-redux';

import io from 'socket.io-client';
import conf from '@src/localconfig';

class App extends Component {

  state = {
    text: '',
    loading: true,
  }

  componentWillMount = () => {
    const { navigation, fetchMessages } = this.props;
    const { params } = navigation.state;
    fetchMessages(params.account_id, () => {
      setInterval( () => this.setState( (prev) => ({...prev, loading: false})), 500);
    });
  }

  componentDidMount = () => {
    const { account, navigation } = this.props;
    const { params } = navigation.state;
    if(account.accountFetched){
      this.socket = io(conf.SOCKET_SERVER);
      this.socket.on(params.room, (data) => {
        this.props.addMessage(data);
      })
    }
  }

  componentWillUnmount(){
    this.socket.disconnect()
  }

  sendMessage = () => {
    const { navigation, account, saveMessage } = this.props;
    const { params } = navigation.state;

    if(this.state.text.length > 0){
      saveMessage({room: params.room, message: this.state.text}, () => {
        this.socket.emit('chat-message', {
          from: account.account_id,
          room: params.room,
          message: this.state.text,
          created_at: new Date()
        })
        this.setState({...this.state, text: ''});
      })    
		}
	}

	render() {

    const { messages } = this.props;
    const { loading } = this.state

    if(loading){
      return (
        <View style={defaultStyle.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={defaultStyle.loadingText}>Loading...</Text>
        </View>
      )
    }
    else if(!loading){
      return (
        <KeyboardAvoidingView style={chatStyle.chatContainer} behavior='padding'>
          <SafeAreaView style={chatStyle.safeAreaViewContainer}>
            <Messages {...this.props} messages={messages}/>
            <View style={chatStyle.messageCreateContainer}>
              <View style={chatStyle.messageInputContainer}>
                <TextInput 
                  placeholder='Message'
                  underlineColorAndroid='transparent'
                  multiline={true}
                  autoCorrect = {false}
                  maxLength = {250}
                  value={this.state.text}
                  style={chatStyle.messageInput}
                  onChangeText={ (v) => this.setState((prev) => ({text: v}) )}
                />
              </View>
              <TouchableOpacity style={chatStyle.sendButton} onPress={ this.sendMessage }>
                <MaterialIcons name='send' color='#16222A' size={26} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <Header {...this.props}/>
        </KeyboardAvoidingView>
      )
    }
  }
}



const mapStateToProps = (state) => {
  return {
    account: state.account,
    messages: state.notification.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (id, cb) => {
      dispatch(fetchMessages(id, cb))
    },
    saveMessage: (obj, cb) => {
      dispatch(saveMessage(obj, cb))
    },
    addMessage: (obj) => {
      dispatch({
        type: "ADD_MESSAGE",
        payload: obj
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

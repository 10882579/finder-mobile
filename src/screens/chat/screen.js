import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Messages } from './components/index';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { fetchMessages } from '@redux/actions/notification';
import { chatStyle } from '@src/static/index';
import { connect } from 'react-redux';

import localconfig from '@src/localconfig';

class App extends Component {

  state = {
		text: '',
  }

  componentWillMount = () => {
    const { navigation, fetchMessages } = this.props;
    const { params } = navigation.state;
    fetchMessages(params.account_id);
  }

  componentDidMount = () => {
    const { account, navigation } = this.props;
    const { params } = navigation.state;

    const SERVER = localconfig ? localconfig.SERVER : "https://finder-uz.herokuapp.com";

    if(account.accountFetched){
      const url = `${SERVER}/${account.token}/${params.account_id}/`
      this.socket = new WebSocket(url);
      this.socket.onopen = () => {
				console.log('Connected');
      }
      this.socket.onmessage = (e) => {
        const data = JSON.parse(e.data)
				if(data.message){
					this.props.addMessage(data);
        }
      }
      this.socket.onerror = (err) => {

      }
      this.socket.onclose = () => {
				console.log('Disconnected')
      }
    }
  }

  componentWillUnmount(){
    this.socket.close()
  }

  sendMessage = async () => {
    if(this.state.text.length > 0){
      await this.socket.send(JSON.stringify(
        { message: this.state.text }
      ))
      this.setState({text: ''});      
		}
	}

	render() {

    const { messages } = this.props;

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



const mapStateToProps = (state) => {
  return {
    account: state.account,
    messages: state.notification.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    },
    fetchMessages: (id) => {
      dispatch(fetchMessages(id))
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

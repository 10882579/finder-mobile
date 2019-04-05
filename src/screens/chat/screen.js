import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Messages } from './components/index';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { chatStyle } from '@src/static/index';
import { connect } from 'react-redux';

class App extends Component {

  state = {
		text: '',
    messages: [],
  }

  componentWillMount = () => {
    const { navigation } = this.props;
    const { params } = navigation.state;
    this.setState( (prev) => ({
      ...prev,
      messages: params.messages
    }))
  }

  componentDidMount = () => {

    const { account, mode, navigation } = this.props;
    const { params } = navigation.state;

    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `wss://finder-uz.herokuapp.com/${account.token}/${params.account_id}/`
      ) : (
        `ws://localhost:8000/${account.token}/${params.account_id}/`
      )
      this.socket = new WebSocket(url);
      this.socket.onopen = () => {
				console.log('Connected');
      }
      this.socket.onmessage = (e) => {
        const data = JSON.parse(e.data)
				if(data.message){
					this.setState( (prev) => ({
            ...prev,
            messages: [...prev.messages, data]
          }))
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
        {
          message: this.state.text,
        }
			))
		}
		this.setState({...this.state, text: ''})
	}

	render() {
    return (
      <KeyboardAvoidingView style={chatStyle.chatContainer} behavior='padding'>
        <SafeAreaView style={chatStyle.safeAreaViewContainer}>
          <Messages {...this.props} data={this.state.messages}/>
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
                onChangeText={ (v) => this.setState((prev) => ({ ...prev, text: v}) )}
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
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

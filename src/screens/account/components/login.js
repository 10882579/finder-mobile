import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { loginStyle } from '@src/static/index';
import { loginToAccount } from '@src/requests';
import { fetchAccount } from '@redux/actions/account';
import { Header } from './index';

class App extends Component {

  login = () => {
    const { mode, login, fetchAccount, navigation, eraseLoginState } = this.props;

    loginToAccount({
      mode: mode.server,
      data: login
    }).then( ({status, data}) => {
      if(status == 200){
        AsyncStorage.setItem('token', data.token);
        fetchAccount(navigation, data.token)
        eraseLoginState()
      }
    }).catch( ({status, text}) => {
      if (status == 400){
        alert(text)
      }
    })
  }


  render() {

    const { login, updateLoginState } = this.props;

    return (
      <KeyboardAvoidingView style={loginStyle.container} behavior="padding">
        <Header {...this.props} style={loginStyle.header}/>
        <View style={loginStyle.logoContainer}>
          <Image
            source={require('@src/static/imgs/logo-grey.png')}
            style={loginStyle.logo}
          />
        </View>
        <View>
          <View style={loginStyle.inputContainer}>
            <AntDesign name='user' color='white' size={28}/>
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='Username | Email'
              placeholderTextColor='grey'
              underlineColorAndroid="transparent"
              style={loginStyle.loginInput}
              value={login.entry}
              onChangeText={ (v) => updateLoginState({entry: v}) }
            />
          </View>
          <View style={loginStyle.inputContainer}>
            <AntDesign name='lock' color='white' size={28}/>
            <TextInput
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder='Password'
              placeholderTextColor='grey'
              underlineColorAndroid="transparent"
              style={loginStyle.loginInput}
              value={login.password}
              onChangeText={ (v) => updateLoginState({password: v}) }
            />
          </View>
          <TouchableOpacity style={loginStyle.submitBtn} onPress={ this.login }>
            <Text style={loginStyle.submitText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccount: (nav, token) => {
      dispatch(fetchAccount(nav, token))
    },
    updateLoginState: (obj) => {
      dispatch({
        type: 'UPDATE_LOGIN_STATE',
        payload: obj
      })
    },
    eraseLoginState: () => {
      dispatch({type: 'ERASE_LOGIN_STATE'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Animated,
  Keyboard,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { loginStyle } from '@src/static/index';
import { loginToAccount } from '@src/requests';
import { fetchAccount } from '@redux/actions/account';
import { Header } from './index';

import Animation from '../animations/login';

class App extends Component {


  componentWillMount() {
    this.keyboardHeight = new Animated.Value(0)

    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow',  this.keyboardWillShow)
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide',  this.keyboardWillHide)
    this.keyboardDidShowListener  = Keyboard.addListener('keyboardDidShow',   this.keyboardWillShow)
    this.keyboardDidHideListener  = Keyboard.addListener('keyboardDidHide',   this.keyboardWillHide)
  }

  keyboardWillShow = (e) => {
    const duration = Platform.OS == 'android' ? 100 : e.duration
    Animated.timing(this.keyboardHeight, {
      duration: duration + 100,
      toValue: e.endCoordinates.height
    }).start()
  }

  keyboardWillHide = (e) => {
    const duration = Platform.OS == 'android' ? 100 : e.duration
    Animated.timing(this.keyboardHeight, {
      duration: duration + 100,
      toValue: 0
    }).start()
  }

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

    const { width, height, logoSize, opacity } = Animation(this.keyboardHeight)

    return (
      <KeyboardAvoidingView style={loginStyle.container} behavior="padding">
        <Header {...this.props} style={loginStyle.header} opacity={opacity}/>
        <Animated.View style={[loginStyle.logoContainer, {width: width, height: height}]}>
          <Animated.Image
            source={require('@src/static/imgs/logo-grey.png')}
            style={[loginStyle.logo, {width: logoSize, height: logoSize}]}
          />
        </Animated.View>
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

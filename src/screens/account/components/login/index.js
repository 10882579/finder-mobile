import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform
} from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { loginStyle } from '@src/static/index';
import { loginToAccount } from '@src/requests';
import { fetchAccount } from '@redux/actions/account';

import Header from './header';

const { height } = Dimensions.get('window');

class App extends Component {

  state = {
    showModal: false,
    errors: []
  }

  componentWillMount(){
    this.registerScreen = new Animated.Value(height *2/5);
    this.closeHeight = new Animated.Value(0);
  }

  renderRegisterScreen = () => {
    Animated.parallel([
      Animated.timing(this.registerScreen, {
        toValue: height,
        duration: 500,
      }).start(),
      Animated.timing(this.closeHeight, {
        toValue: Platform.OS == "ios" ? 50 + Constants.statusBarHeight : 50,
        duration: 500,
      }).start()
    ])
  }

  closeRegisterScreen = () => {
    Animated.parallel([
      Animated.timing(this.registerScreen, {
        toValue: height *2/5,
        duration: 500,
      }).start(),
      Animated.timing(this.closeHeight, {
        toValue: 0,
        duration: 500,
      }).start(),
      Keyboard.dismiss()
    ])
  }

  toggleAlert = (errors) => {
    this.setState( (prev) => ({
      showModal: !prev.showModal,
      errors: errors,
    }))
  }

  login = () => {
    const { mode, login, fetchAccount, navigation, eraseLoginState } = this.props;

    loginToAccount({
      mode: mode.server,
      data: login
    }).then( ({status, data}) => {
      if(status == 200){
        AsyncStorage.setItem('token', data.token);
        fetchAccount(navigation, data.token);
        eraseLoginState();
      }
    }).catch( ({status, errors}) => {
      alert('SERVER ERROR: ' + status);
    })
  }


  render() {

    const { login, updateLoginState } = this.props;

    return (
      <View style={loginStyle.container}>
        <View style={loginStyle.logoViewContainer}>
          <Header {...this.props} />
          <View style={[loginStyle.logoContainer]}>
            <Image
              source={require('@src/static/imgs/logo-grey.png')}
              style={loginStyle.logo}
            />
          </View>
        </View>
        <Animated.View style={[loginStyle.loginInputContainer, {height: this.registerScreen}]}>
          <Animated.View style={[loginStyle.closeLoginContainer, {height: this.closeHeight}]}>
            <TouchableOpacity style={loginStyle.closeLoginButton} onPress={ this.closeRegisterScreen }>
              <AntDesign name="close" size={24}/>
            </TouchableOpacity>
          </Animated.View>
          <View style={loginStyle.inputContainer}>
            <AntDesign name='user' color='#16222A' size={28}/>
            <TextInput
              onFocus={ this.renderRegisterScreen }
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='Telefon raqam | Email'
              placeholderTextColor='#16222A'
              underlineColorAndroid="transparent"
              style={loginStyle.loginInput}
              value={login.entry}
              onChangeText={ (v) => updateLoginState({entry: v}) }
            />
          </View>
          <View style={loginStyle.inputContainer}>
            <AntDesign name='lock' color='#16222A' size={28}/>
            <TextInput
              onFocus={ this.renderRegisterScreen }
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder='Yashirin kod'
              placeholderTextColor='#16222A'
              underlineColorAndroid="transparent"
              style={loginStyle.loginInput}
              value={login.password}
              onChangeText={ (v) => updateLoginState({password: v}) }
            />
          </View>
          <TouchableOpacity style={loginStyle.submitBtn} onPress={ this.login }>
            <Text style={loginStyle.submitText}>LOG IN</Text>
          </TouchableOpacity>
          <View style={loginStyle.registerContainer}>
            <Text style={loginStyle.registerText}>Profil mavjud emas?  </Text>
            <TouchableOpacity>
              <Text style={[loginStyle.registerText, {color: '#1993e5'}]}>
                Registratsiya
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
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

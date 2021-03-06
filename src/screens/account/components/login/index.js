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
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { loginStyle } from '@src/static/index';
import { loginToAccount } from '@redux/actions/account';
import handleGoBack from '@redux/actions/handleGoBack';

import Header from './header';
import Register from '../register/index'

const { height } = Dimensions.get('window');

class App extends Component {

  state = {
    screen: 'login',
    loginError: false,
  }

  componentWillMount(){
    this.loginHeight = new Animated.Value(height *2/5);
    this.closeHeight = new Animated.Value(0);
  }

  renderLogin = () => {
    Animated.parallel([
      Animated.timing(this.loginHeight, {
        toValue: height,
        duration: 500,
      }).start(),
      Animated.timing(this.closeHeight, {
        toValue: Platform.OS == "ios" ? 50 + Constants.statusBarHeight : 50,
        duration: 500,
      }).start()
    ])
  }

  closeLogin = () => {
    Animated.parallel([
      Animated.timing(this.loginHeight, {
        toValue: height *2/5,
        duration: 500,
      }).start(),
      Animated.timing(this.closeHeight, {
        toValue: 0,
        duration: 500,
      }).start(),
      Keyboard.dismiss(),
      this.setState( (prev) => {
        return {...prev, screen: "login"}
      })
    ])
  }

  login = () => {
    const { loginToAccount, navigation } = this.props;

    loginToAccount( (status, data) => {
      if(status == 200){
        navigation.setParams({from: {screen: 'Home'}});
        AsyncStorage.setItem('token', data.token);
        handleGoBack(navigation);
      }
      else{
        this.setState( (prev) => ({...prev, loginError: true}))
      }
    })
  }

  toggleScreen = (screen) => {
    this.renderLogin()
    this.setState( (prev) => {
      return {...prev, screen: screen}
    })
  }

  render() {

    const { login, updateLoginState } = this.props;
    const { screen, loginError } = this.state;

    const errorStyle = loginError ? loginStyle.errorStyle : null;

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
        <Animated.View style={[loginStyle.loginInputContainer, {height: this.loginHeight}]}>
          <Animated.View style={[loginStyle.closeLoginContainer, {height: this.closeHeight}]}>
            <TouchableOpacity style={loginStyle.closeLoginButton} onPress={ this.closeLogin }>
              <AntDesign name="close" size={24}/>
            </TouchableOpacity>
          </Animated.View>
          {
            screen == 'login' ? (
              <View style={loginStyle.loginContainer}>
                <View style={[loginStyle.inputContainer, errorStyle]}>
                  <AntDesign name='user' color='#16222A' size={28}/>
                  <TextInput
                    onFocus={ this.renderLogin }
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
                <View style={[loginStyle.inputContainer, errorStyle]}>
                  <AntDesign name='lock' color='#16222A' size={28}/>
                  <TextInput
                    onFocus={ this.renderLogin }
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
                {
                  loginError ? (
                    <View style={loginStyle.errorContainer}>
                      <Text style={loginStyle.errorText}>
                        Kiritilgan email/raqam yoki kod noto'g'ri!
                      </Text>
                    </View>
                  ) : null
                }
                <TouchableOpacity style={loginStyle.submitBtn} onPress={ this.login }>
                  <Text style={loginStyle.submitText}>LOG IN</Text>
                </TouchableOpacity>
                <View style={loginStyle.registerContainer}>
                  <Text style={loginStyle.registerText}>Profil mavjud emas?  </Text>
                  <TouchableOpacity onPress={ () => this.toggleScreen('register') }>
                    <Text style={[loginStyle.registerText, {color: '#1993e5'}]}>
                      Registratsiya
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null
          }
          {
            screen == 'register' ? (
              <Register {...this.props} toggleScreen={this.toggleScreen}/>
            ) : null
          }
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
    loginToAccount: (cb) => {
      dispatch(loginToAccount(cb))
    },
    updateLoginState: (obj) => {
      dispatch({
        type: 'UPDATE_LOGIN_STATE',
        payload: obj
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

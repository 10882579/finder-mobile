import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Feather } from '@expo/vector-icons';
import { registerStyle, loginStyle } from '@src/static/index';
import { registerAccount } from '@src/requests';
import { fetchAccount } from '@redux/actions/account';

class App extends Component {

  state = {
    showModal: false,
    errors: []
  }

  register = () => {
    const { mode, register, navigation, fetchAccount, eraseRegisterState } = this.props;
    registerAccount({
      mode: mode.server,
      data: register
    }).then( (data) => {
      AsyncStorage.setItem('token', data.token);
      fetchAccount(navigation, data.token)
      eraseRegisterState()
    }).catch( ({status, errors}) => {
      
    })
  }

  render() {

    const { register, updateRegisterState, toggleScreen } = this.props;

    return (
        <Animatable.View animation="fadeIn" delay={500} style={registerStyle.registerContainer}>
          <View style={registerStyle.userNameInputContainer}>
            <View style={[registerStyle.userNameInput, {marginRight: 10}]}>
              <TextInput
                style={registerStyle.input}
                selectTextOnFocus={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Ism-sharif'
                underlineColorAndroid="transparent"
                value={register.first_name}
                onChangeText={ (v) => updateRegisterState({first_name: v}) }
              />
            </View>
            <View style={registerStyle.userNameInput}>
              <TextInput
                style={registerStyle.input}
                selectTextOnFocus={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Familiya'
                underlineColorAndroid="transparent"
                value={register.last_name}
                onChangeText={ (v) => updateRegisterState({last_name: v}) }
              />
            </View>
          </View>
          <View style={registerStyle.inputContainer}>
            <View style={registerStyle.inputIcon}>
              <Feather name="mail" color='lightgrey'  size={25}/>
            </View>
            <TextInput
              style={registerStyle.input}
              selectTextOnFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='example@example.com'
              underlineColorAndroid="transparent"
              value={register.email}
              onChangeText={ (v) => updateRegisterState({email: v}) }
            />
          </View>
          <View style={registerStyle.inputContainer}>
            <View style={registerStyle.inputIcon}>
              <Text style={registerStyle.countryCode}>+998</Text>
            </View>
            <TextInput
              style={registerStyle.input}
              selectTextOnFocus={true}
              maxLength={9}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='(9X) XXX-XXXX'
              keyboardType='phone-pad'
              underlineColorAndroid="transparent"
              value={register.phone_number}
              onChangeText={ (v) => updateRegisterState({phone_number: v}) }
            />
          </View>
          <View style={registerStyle.inputContainer}>
            <View style={registerStyle.inputIcon}>
              <AntDesign name='lock' color='lightgrey' size={28}/>
            </View>
            <TextInput
              style={registerStyle.input}
              selectTextOnFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder='Yashirin kod'
              underlineColorAndroid="transparent"
              value={register.password}
              onChangeText={ (v) => updateRegisterState({password: v}) }
            />
          </View>
          <TouchableOpacity style={registerStyle.submitBtn} onPress={ this.register }>
            <Text style={registerStyle.submitText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={loginStyle.registerContainer}>
            <Text style={loginStyle.registerText}>Profil mavjud?  </Text>
            <TouchableOpacity onPress={ () => toggleScreen('login') }>
              <Text style={[loginStyle.registerText, {color: '#1993e5'}]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRegisterState: (obj) => {
      dispatch({
        type: 'UPDATE_REGISTER_STATE',
        payload: obj
      })
    },
    eraseRegisterState: () => {
      dispatch({type: 'ERASE_REGISTER_STATE'})
    },
    fetchAccount: (nav, token) => {
      dispatch(fetchAccount(nav, token))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

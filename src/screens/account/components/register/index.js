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
import { registerStyle, loginStyle, defaultStyle } from '@src/static/index';
import { registerAccount } from '@redux/actions/account';

const AlertComponent = (props) => {
  return (
    <Animatable.View style={defaultStyle.errorScreenContainer} animation="shake" delay={500}>
      <View style={defaultStyle.errorContainer}>
        <View style={defaultStyle.errorListContainer}>
          <Feather name='alert-triangle' color='white' size={60}/>
          <View style={defaultStyle.errorListItems}>
            {
              props.errors.map( (v, i) => (
                <Text key={i} style={defaultStyle.errorText}>{v}</Text>
              ))
            }
          </View>
        </View>
        <TouchableOpacity style={defaultStyle.dismissBtn} activeOpacity={0.8} onPress={ () => props.toggleAlert(false) }>
          <Text style={defaultStyle.dismissBtnText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}

class App extends Component {

  state = {
    showAlert: false,
    errors: []
  }

  register = () => {
    const { registerAccount } = this.props;
    registerAccount( (status, data) => {
      if(status == 200){
        AsyncStorage.setItem('token', data.token);
      }
      else if(status == 400){
        this.toggleAlert(true, data)
      }
    })
  }

  toggleAlert = (bool, data) => {
    this.setState( (prev) => {
      return {...prev, showAlert: bool, errors: data}
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
          { this.state.showAlert ? (
            <AlertComponent errors={this.state.errors} {...this.props} toggleAlert={this.toggleAlert} />
          ) : null}
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
    registerAccount: (cb) => {
      dispatch(registerAccount(cb))
    },
    updateRegisterState: (obj) => {
      dispatch({
        type: 'UPDATE_REGISTER_STATE',
        payload: obj
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

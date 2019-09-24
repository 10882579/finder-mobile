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
import { registerAccount } from '@redux/actions/account';
import handleGoBack from '@redux/actions/handleGoBack';

class App extends Component {

  state = {
    registerError: false,
    errors: []
  }

  register = () => {
    const { registerAccount, navigation } = this.props;
    registerAccount( (status, data) => {
      if(status == 200){
        handleGoBack(navigation);
        navigation.setParams({from: {screen: 'Home'}});
        AsyncStorage.setItem('token', data.token);
      }
      else {
        this.validate(data);
        this.setState( (prev) => ({...prev, registerError: true}))
      }
    })
  }

  validate = (errs) => {
    const { register } = this.props;
    const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = [];

    if(errs.email || !re_email.test(register.email) || errs.phone_number || register.phone_number.length < 9){
      errors.push("Email/Telefon raqam kiritilmagan!");
    }

    if(errs.first_name || errs.last_name || register.first_name.length < 2 || register.last_name.length < 2){
      errors.push("Ism/Familiya ikki yoki undan ortiq harflardan iborat bo'lishi shart!");
    }

    if(errs.password || register.password.length < 7){
      errors.push("Yashirin kod yetti yoki undan ortiq harf va raqamlardan iborat bo'lishi shart!");
    }

    if(errs.non_field_errors){
      errs.non_field_errors.filter( (v) => {
        if(v == 'email_in_use'){
          errors.push("Bu email mavjud, boshqa email kiriting!");
        }
        if(v == 'phone_number_in_use'){
          errors.push("Bu telefon raqam mavjud, boshqa telefon raqam kiriting!");          
        } 
      })
    }

    this.setState( (prev) => ({...prev, errors: errors}))
  }

  render() {

    const { register, updateRegisterState, toggleScreen } = this.props;
    const { registerError, errors } = this.state;

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
          {
            registerError ? (
              <View style={registerStyle.errorContainer}>
                {
                  errors.map( (item, i) => (
                    <Text key={i} style={registerStyle.errorText}>* {item}</Text>
                  ))
                }
              </View>
            ) : null
          }
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

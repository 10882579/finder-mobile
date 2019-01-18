import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { loginStyle } from '@src/static/index';
import { Header } from './index';

class App extends Component {

  render() {
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
            />
          </View>
          <TouchableOpacity style={loginStyle.submitBtn}>
            <Text style={loginStyle.submitText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

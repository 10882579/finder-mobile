import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign, Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView as ScrollView } from 'react-native-keyboard-aware-scroll-view'
import { registerStyle } from '@src/static/index';
import { registerAccount } from '@src/requests';
import { fetchAccount } from '@redux/actions/account';
import Header from './registerHeader'
import Animation from '../animations/register';

const { width, height } = Dimensions.get('window');

class App extends Component {

  componentWillMount(){
    this.registerHeight = new Animated.Value(0)
  }

  increaseRegisterHeight = () => {
    Animated.timing(this.registerHeight, {
      toValue: height,
      duration: 750
    }).start()
  }

  decreaseRegisterHeight = () => {
    Keyboard.dismiss()
    Animated.timing(this.registerHeight, {
      toValue: 0,
      duration: 750
    }).start()
  }

  scrollToInput = (event) => {
    this.scrollView.props.scrollToFocusedInput(event.nativeEvent.target)
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
    }).catch( (err) => {
      console.log(err);
    })
  }

  render() {

    const { register, updateRegisterState } = this.props;
    const { opacity, fadeIn } = Animation(this.registerHeight, height);

    return (
      <View style={registerStyle.registerContainer} behavior='padding'>
        <TouchableOpacity
          style={registerStyle.registerBtn}
          activeOpacity={1}
          onPress={ this.increaseRegisterHeight }
          >
          <Animated.Text style={[registerStyle.registerText, {opacity: opacity}]}>
            Registratsiya
          </Animated.Text>
        </TouchableOpacity>
        <Animated.View style={[registerStyle.registerBodyContainer, {height: this.registerHeight}]}>
          <Header {...this.props} action={this.decreaseRegisterHeight}/>
          <ScrollView
            style={registerStyle.registration}
            bounces={false}
            innerRef={ref => this.scrollView = ref}
            scrollEventThrottle={1}
          >
            <Animated.View style={[registerStyle.registration, {opacity: fadeIn}]}>
              <View style={registerStyle.logoContainer}>
                <Image source={require('@src/static/imgs/logo-blue.png')} style={registerStyle.logo}/>
              </View>
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
                    onFocus={ (event) => this.scrollToInput(event) }
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
                    onFocus={ (event) => this.scrollToInput(event) }
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
                  onFocus={ (event) => this.scrollToInput(event) }
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
                  onFocus={ (event) => this.scrollToInput(event) }
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
                  placeholder='Yashirin kod kiriting'
                  underlineColorAndroid="transparent"
                  value={register.password}
                  onFocus={ (event) => this.scrollToInput(event) }
                  onChangeText={ (v) => updateRegisterState({password: v}) }
                />
              </View>
              <TouchableOpacity style={registerStyle.submitBtn} onPress={ this.register }>
                <Text style={registerStyle.submitText}>REGISTER</Text>
              </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </Animated.View>
      </View>
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
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
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign, Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView as ScrollView } from 'react-native-keyboard-aware-scroll-view'
import { registerStyle } from '@src/static/index';
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

  render() {

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
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Ism-sharif'
                    underlineColorAndroid="transparent"
                    onFocus={ (event) => this.scrollToInput(event) }
                  />
                </View>
                <View style={registerStyle.userNameInput}>
                  <TextInput
                    style={registerStyle.input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Familiya'
                    underlineColorAndroid="transparent"
                    onFocus={ (event) => this.scrollToInput(event) }
                  />
                </View>
              </View>
              <View style={registerStyle.inputContainer}>
                <View style={registerStyle.inputIcon}>
                  <Feather name="mail" color='lightgrey'  size={25}/>
                </View>
                <TextInput
                  style={registerStyle.input}
                  autoCorrect={false}
                  autoCapitalize='none'
                  placeholder='example@example.com'
                  underlineColorAndroid="transparent"
                  onFocus={ (event) => this.scrollToInput(event) }
                />
              </View>
              <View style={registerStyle.inputContainer}>
                <View style={registerStyle.inputIcon}>
                  <Text style={registerStyle.countryCode}>+998</Text>
                </View>
                <TextInput
                  style={registerStyle.input}
                  autoCorrect={false}
                  autoCapitalize='none'
                  placeholder='(9X) XXX-XXXX'
                  keyboardType='phone-pad'
                  underlineColorAndroid="transparent"
                  onFocus={ (event) => this.scrollToInput(event) }
                />
              </View>
              <View style={registerStyle.inputContainer}>
                <View style={registerStyle.inputIcon}>
                  <AntDesign name='lock' color='lightgrey' size={28}/>
                </View>
                <TextInput
                  style={registerStyle.input}
                  autoCorrect={false}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  placeholder='Yashirin kod kiriting'
                  underlineColorAndroid="transparent"
                  onFocus={ (event) => this.scrollToInput(event) }
                />
              </View>
              <TouchableOpacity style={registerStyle.submitBtn}>
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

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

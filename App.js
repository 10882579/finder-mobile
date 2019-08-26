import React from 'react';
import { View, Image, StatusBar, AsyncStorage } from 'react-native';
import * as Animate from 'react-native-animatable';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import { fetchAccount } from '@redux/actions/account';
import { splashStyle } from '@src/static/index';
import Navigation from '@src/navigation/index';
import store from '@src/redux/store';

import io from 'socket.io-client';
import conf from '@src/localconfig';

export default class App extends React.Component {

  state = {
    isReady: false
  }
  
  async componentWillMount(){
    const token = await AsyncStorage.getItem('token');
    store.dispatch(fetchAccount(token));
    if(token){
      this.socket = io(conf.SOCKET_SERVER);
      this.socket.on(token, (data) => {
        store.dispatch({
          type: 'UPDATE_LAST_MESSAGE',
          payload: data.message,
          id: data.chat_id
        })
      })
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Default': require('./src/static/fonts/Source/Source-Regular.ttf'),
      'Default-Bold': require('./src/static/fonts/Source/Source-SemiBold.ttf'),
    });
  }

  splashScreen = () => {

    return (
      <View style={splashStyle.container}>
        <StatusBar barStyle='light-content'/>
        <Animate.View
          animation='zoomIn'
          iterationCount={1}
          duration={1500}
          style={splashStyle.logoContainer}
          onAnimationEnd={ () => this.setState({isReady: true}) }
        >
          <Image
            source={require('@src/static/imgs/logo-grey.png')}
            style={splashStyle.logo}
          />
        </Animate.View>
      </View>
    )
  }

  render() {
    if(this.state.isReady){
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
    else{
      return this.splashScreen()
    }
  }
}

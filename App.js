import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import * as Animate from 'react-native-animatable';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { splashStyle } from '@src/static/index';
import store from '@src/redux/store';
import Navigation from '@src/navigation/index';

export default class App extends React.Component {

  state = {
    isReady: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Default': require('./src/static/fonts/Ubuntu/Ubuntu-Regular.ttf')
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

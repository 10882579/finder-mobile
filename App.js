import React from 'react';
import { View, Animated } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { splashStyle } from '@src/static/index';
import store from '@src/redux/store';
import Navigation from '@src/navigation/index';

export default class App extends React.Component {
  state = {
    isReady: false
   }

   componentWillMount(){
     this.splash = new Animated.Value(0);
   }

  async componentDidMount() {
    await Font.loadAsync({
      'Default': require('./src/static/fonts/Ubuntu/Ubuntu-Regular.ttf')
    });
    Animated.timing(this.splash, {
      toValue: 500,
      duration: 2000
    }).start( () => this.setState({isReady: true}))
  }

  splashScreen = () => {

    const width = this.splash.interpolate({
      inputRange: [0, 450],
      outputRange: [100, 190],
      extrapolate: 'clamp'
    })

    const height = this.splash.interpolate({
      inputRange: [0, 450],
      outputRange: [70, 150],
      extrapolate: 'clamp'
    })

    const logoSize = this.splash.interpolate({
      inputRange: [0, 450],
      outputRange: [70, 140],
      extrapolate: 'clamp'
    })

    return (
      <View style={splashStyle.container}>
        <Animated.View style={[splashStyle.logoContainer, {height: height, width: width}]}>
          <Animated.Image
            source={require('@src/static/imgs/logo-grey.png')}
            style={[splashStyle.logo, {height: logoSize, width: logoSize}]}
          />
        </Animated.View>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import store from '@src/redux/store';
import Navigation from '@src/navigation/index';

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'Default': require('./src/static/fonts/Ubuntu/Ubuntu-Regular.ttf')
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

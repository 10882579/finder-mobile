import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import { Header } from './components/index';
import { defaultStyle } from '@src/static/index';

class App extends Component {

  render() {
    return (
      <View style={defaultStyle.flex}>
        <Header {...this.props}/>
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

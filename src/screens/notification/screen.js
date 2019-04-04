import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { defaultStyle } from '@src/static/index';
import { Header } from './components/index';

class App extends Component {

  state = {
    data: []
  }

  render() {
    return (
      <View style={defaultStyle.container}>
        <Header {...this.props} />
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

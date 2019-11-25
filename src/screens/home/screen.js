import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { defaultStyle } from '@src/static/index';
import { fetchPosts } from '@redux/actions/home';

import List from './components/list';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <View style={defaultStyle.flex}>
        <List {...this.props}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    account: state.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    },
    updateFilter: (obj) => {
      dispatch({
        type: 'UPDATE_FILTER',
        payload: obj
      })
    },
    clearFilter: () => {
      dispatch({type: 'CLEAR_FILTER'})
    }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

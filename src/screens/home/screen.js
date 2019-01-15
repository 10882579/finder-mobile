import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

import { Header, List, ProgressBar } from './components/index';
import { defaultStyle } from '@src/static/index';
import { fetchAllPosts } from '@redux/actions/home';
import { fetchAccount } from '@redux/actions/account';

class App extends Component {

  state = {
    refreshing: false
  }

  async componentDidMount() {
    const { navigation, fetchAccount } = this.props;
    const token = await AsyncStorage.getItem('token');
    fetchAccount(navigation, token)
    this.refreshPage()
  }

  refreshPage = () => {
    const { fetchAllPosts } = this.props;
    this.setState( () => ({refreshing: true}) )
    fetchAllPosts()
    setTimeout(() => this.setState( () => ({refreshing: false}) ), 1000);
  }

  render() {

    const { create } = this.props;

    return (
      <View style={defaultStyle.flex}>
        <Header {...this.props}/>
        <View style={[defaultStyle.flex, {padding: 5}]}>
          { create.progress !== 100 ? (
              <ProgressBar {...this.props}/>
            ) : null }
          <ScrollView style={defaultStyle.flex}
            scrollEventThrottle={1}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.refreshPage}
              />
            }
          >
            <List {...this.props}/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    account: state.account,
    create: state.create,
    mode: state.mode,
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    },
    fetchAccount: (nav, token) => {
      dispatch(fetchAccount(nav, token))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { Header, List } from './components/index';
import { fetchAllPosts } from '@redux/actions/home';
import { defaultStyle } from '@src/static/index';

class App extends Component {

  state = {
    refreshing: false
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  refreshPage = () => {
    this.setState( () => ({refreshing: true}) )
    this.props.fetchAllPosts()
    setTimeout(() => this.setState( () => ({refreshing: false}) ), 1000);
  }

  render() {

    return (
      <View style={defaultStyle.flex}>
        <Header {...this.props}/>
        <View style={[defaultStyle.flex, {padding: 5}]}>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

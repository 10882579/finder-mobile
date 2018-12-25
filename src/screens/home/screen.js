import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
import { connect } from 'react-redux';

import { Header, List } from './components/index';
import { defaultStyle } from '@src/static/index';
import { fetchAllPosts } from '@src/redux/actions/home';

class App extends Component {

  state = {
    refreshing: false
  }

  componentDidMount() {

    this.refreshPage()

  }

  refreshPage = () => {
    const { fetchAllPosts } = this.props;
    this.setState( () => ({refreshing: true}) )
    fetchAllPosts()
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
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

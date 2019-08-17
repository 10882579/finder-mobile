import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { defaultStyle } from '@src/static/index';
import { connect } from 'react-redux';

import { fetchFollowingUsers, followAccount } from '@redux/actions/account';
import { fetchUserPosts, fetchUserSavedPosts } from '@redux/actions/post';
import { fetchAccountReviews } from '@redux/actions/review';

import Header from './components/header';
import Posts from './components/posts';
import Accounts from './components/accounts';
import Reviews from './components/reviews';

class App extends Component {

  state = {
    loading: true,
    screen: "",
    data: []
  }

  componentWillMount() {
    
    const { 
      account,
      navigation, 
      fetchUserPosts, 
      fetchUserSavedPosts, 
      fetchFollowingUsers, 
      fetchAccountReviews
    } = this.props;
    const { params } = navigation.state;

    if(params.screen == 'myposts'){
      fetchUserPosts(account.account_id, 1, (data) => {
        this.updateState("E'lonlarim", data);
      })
    }
    else if(params.screen == 'userposts'){
      fetchUserPosts(params.id, 1, (data) => {
        this.updateState("E'lonlar", data);
      })
    }
    else if(params.screen == 'savedposts'){
      fetchUserSavedPosts(1, (data) => {
        this.updateState("Belgilangan e'lonlar", data);
      })
    }
    else if(params.screen == 'following'){
      fetchFollowingUsers(1, (data) => {
        this.updateState("Kuzatilayotkanlar", data);
      })
    }
    else if(params.screen == 'rating'){
      fetchAccountReviews(params.id, (data) => {
        this.updateState("Reyting", data);
      })
    }
  }

  updateState = (screen, data) => {
    this.setState( (prev) => ({...prev, data: data, screen: screen}), () => {
      setTimeout(() => this.setState({...this.state, loading: false}), 500)
    })
  }

  followAccount = (id) => {
    const { followAccount } = this.props;
    const data = [];

    this.state.data.forEach( (account) => {
      if(id == account.account_id){
        item = {
          ...account,
          following: !account.following
        }
        data.push(item);
      }
      else{
        data.push(account);
      }
    })
    followAccount(id, () => {
      this.setState( (prev) => ({
        ...prev,
        data: data
      }))
    })
  }

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { screen, data, loading } = this.state;

    if (loading){
      return (
        <View style={defaultStyle.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={defaultStyle.loadingText}>Loading...</Text>
        </View>
      )
    }
    else if(!loading){
      return (
        <View style={defaultStyle.flex}>
          <Header {...this.props} screen={screen}/>
          <View style={defaultStyle.flex}>  
            { params.screen == "savedposts" ? <Posts {...this.props} data={data} /> : null }
            { params.screen == "rating" ? <Reviews {...this.props} data={data} /> :  null }  
            { params.screen == "myposts" || params.screen == "userposts" ? <Posts {...this.props} data={data}/> : null }
            { params.screen == "following" ? <Accounts {...this.props} data={data} followThisAccount={this.followAccount}/> : null }
          </View>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
    fetchUserPosts: (id, page, cb) => {
      dispatch(fetchUserPosts(id, page, cb))
    },
    fetchUserSavedPosts: (page, cb) => {
      dispatch(fetchUserSavedPosts(page, cb))
    },
    fetchFollowingUsers: (page, cb) => {
      dispatch(fetchFollowingUsers(page, cb))
    },
    fetchAccountReviews: (id, cb) => {
      dispatch(fetchAccountReviews(id, cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

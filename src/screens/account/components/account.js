import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

import { connect } from 'react-redux';
import { AntDesign, Feather } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

import Animation from '../animations/account';

import {
  Header,
  AccountImage,
  UserPosts,
  SavedPosts,
  Following
} from './index';

import {
  followAccount,
  fetchUserPosts,
  fetchUserSavedPosts,
  fetchFollowingUsers,
  updateAccount,
} from '@redux/actions/account';

const { width, height } = Dimensions.get('window');

class App extends Component {

  state = {
    page: 1,
    render: 'myposts'
  }

  componentWillMount(){
    this.navbarPosition = new Animated.Value(0)
    this.scrollY        = new Animated.Value(0)
    this.left = 0
  }

  updateState = (name) => {
    this.setState( () => ({render: name}) )
    if (name == 'myposts'){
      this.left = 0
    }
    else if(name == 'savedPosts'){
      this.left = width/3
    }
    else if(name == 'following'){
      this.left = width*2/3
    }
    Animated.timing(this.navbarPosition, {
      duration: 200,
      toValue: this.left
    }).start()
  }

  render() {

    const { account } = this.props;
    const { render }  = this.state;

    const { containerHeight, opacity, color } = Animation(this.scrollY)

    return (
      <View style={accountStyle.pageView}>
        <Animated.View style={[accountStyle.container, defaultStyle.shadow, {height: containerHeight}]}>
          <Animated.View style={[accountStyle.topContainer, {opacity: opacity}]}>
            <Header {...this.props} showSettings/>
          </Animated.View>
          <AccountImage {...this.props} image={account.image} scrollY={this.scrollY}/>
          <View style={accountStyle.bottomContainer}>
            <Animated.View style={accountStyle.userNameContainer}>
              <Animated.Text style={[accountStyle.userName, {color: color}]}>
                {account.first_name} {account.last_name}
              </Animated.Text>
            </Animated.View>
            <View style={accountStyle.reatingContainer} />
            <View style={accountStyle.navigation}>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('myposts') }>
                <AntDesign name='bars' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('savedPosts') }>
                <Feather name='bookmark' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('following') }>
                <AntDesign name='like2' size={30}/>
              </TouchableOpacity>
            </View>
            <Animated.View style={[accountStyle.navigationListBorder, {left: this.navbarPosition}]} />
          </View>
        </Animated.View>
        <View style={accountStyle.bodyContainer}>
          { render == 'myposts' ? <UserPosts {...this.props} position={this.scrollY}/> : null }
          { render == 'savedPosts' ? <SavedPosts {...this.props} position={this.scrollY}/> : null }
          { render == 'following' ? <Following {...this.props}/> : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.detail.posts,
    saved: state.detail.savedPosts,
    following: state.detail.following
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followAccount: (id) => {
      dispatch(followAccount(id))
    },
    fetchUserPosts: (id, type, page) => {
      dispatch(fetchUserPosts(id, type, page))
    },
    fetchUserSavedPosts: (type, page) => {
      dispatch(fetchUserSavedPosts(type, page))
    },
    fetchFollowingUsers: (type, page) => {
      dispatch(fetchFollowingUsers(type, page))
    },
    updateAccountImage: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

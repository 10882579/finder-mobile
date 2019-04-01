import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, Animated, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

import Animation from '../animations/account';

import {
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

const { width } = Dimensions.get('window');

class App extends Component {

  state = {
    page: 1,
    screen: 'myposts'
  }

  componentWillMount(){
    this.navbarPosition = new Animated.Value(0)
    this.scrollY        = new Animated.Value(0)
    this.left = 0
  }

  updateState = (name) => {
    this.setState( () => ({screen: name}) )
    if (name == 'myposts'){
      this.left = 0
    }
    else if(name == 'savedPosts'){
      this.left = width/3
    }
    else if(name == 'following'){
      this.left = width*2/3
    }
    Animated.parallel([
      Animated.timing(this.navbarPosition, {
        duration: 200,
        toValue: this.left
      }),
      Animated.timing(this.scrollY, {
        duration: 500,
        toValue: 0
      })
    ]).start()
  }

  render() {

    const { account, handleGoBack, navigation } = this.props;
    const { screen }  = this.state;

    const { topHeight, bottomHeight, color, iconColor } = Animation(this.scrollY)

    return (
      <View style={defaultStyle.flex}>
        { screen == 'myposts' ? <UserPosts {...this.props} position={this.scrollY}/> : null }
        { screen == 'savedPosts' ? <SavedPosts {...this.props} position={this.scrollY}/> : null }
        { screen == 'following' ? <Following {...this.props}/> : null }
        <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
          <StatusBar barStyle="light-content"/>
          <Animated.View style={[accountStyle.topContainer, {height: topHeight, backgroundColor: color}]}>
            <TouchableOpacity
              style={accountStyle.backBtnContainer}
              activeOpacity={0.8}
              onPress={ () => handleGoBack(navigation) }
            >
              <AnimatedIcon
                name='md-arrow-round-back'
                style={{
                  fontSize: 24,
                  color: iconColor
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[accountStyle.bottomContainer, {height: bottomHeight}]}>
            <View style={accountStyle.navigationContainer}>
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
          </Animated.View>
          <AccountImage {...this.props} image={account.image} scrollY={this.scrollY}/>
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

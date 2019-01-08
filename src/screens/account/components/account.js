import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

import { connect }  from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { AntDesign, Feather } from '@expo/vector-icons';
import { defaultStyle, accountStyle } from '@src/static/index';

import {
  Header,
  AccountImage,
  UserPosts,
  SavedPosts,
  Following
} from './index';

import {
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

  componentWillMount() {
    this.navbarPosition = new Animated.Value(0)
    this.left = 0
  }

  componentDidMount = () => {
    const {
      account,
      fetchUserPosts,
      fetchUserSavedPosts,
      fetchFollowingUsers,
    } = this.props;
    fetchUserPosts(account.account_id, this.state.page)
    fetchUserSavedPosts(this.state.page)
    fetchFollowingUsers(this.state.page)
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
    const { render } = this.state

    return (
      <View style={accountStyle.pageView}>
        <View style={[accountStyle.container, defaultStyle.shadow]}>
          <View style={accountStyle.topContainer}>
            <Header {...this.props}/>
          </View>
          <AccountImage {...this.props} image={account.image}/>
          <View style={accountStyle.bottomContainer}>
            <View style={accountStyle.userNameContainer}>
              <Text style={accountStyle.userName}>
                {account.first_name} {account.last_name}
              </Text>
            </View>
            <View style={accountStyle.reatingContainer} />
            <View style={accountStyle.navigation}>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('myposts') }>
                <AntDesign name='bars' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('savedPosts') }>
                <Feather name='bookmark' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.updateState('following') }>
                <AntDesign name='hearto' size={30}/>
              </TouchableOpacity>
            </View>
            <Animated.View style={[accountStyle.navigationListBorder, {left: this.navbarPosition}]} />
          </View>
        </View>
        <View style={accountStyle.bodyContainer}>
          { render == 'myposts' ? <UserPosts {...this.props}/> : null }
          { render == 'savedPosts' ? <SavedPosts {...this.props}/> : null }
          { render == 'following' ? <Following {...this.props}/> : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    posts: state.detail.posts,
    saved: state.detail.savedPosts,
    following: state.detail.following
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (id, page) => {
      dispatch(fetchUserPosts(id, page))
    },
    fetchUserSavedPosts: (page) => {
      dispatch(fetchUserSavedPosts(page))
    },
    fetchFollowingUsers: (page) => {
      dispatch(fetchFollowingUsers(page))
    },
    updateAccountImage: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    },
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

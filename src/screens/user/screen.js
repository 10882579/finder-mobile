import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';

import { connect }  from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { AntDesign } from '@expo/vector-icons';
import { fetchMessages } from '@redux/actions/notification';
import { defaultStyle, accountStyle } from '@src/static/index';
import { Header, AccountImage, LikeAccount, Posts, Contact } from './components/index';

const { width, height } = Dimensions.get('window');

class App extends Component {

  state = {
    render: 'posts'
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState( (prev) => ({
      ...prev,
      ...params,
    }))

    this.navbarPosition = new Animated.Value(0)
  }

  followAccount = () => {
    this.setState( (prev) => ({
      ...prev,
      following: !prev.following
    }) )
  }

  switchNavigation = (name) => {
    this.setState( (prev) => ({
      ...prev, render: name
    }))
    if (name == 'posts'){
      this.left = 0
    }
    else if(name == 'rating'){
      this.left = width/2
    }
    Animated.timing(this.navbarPosition, {
      duration: 200,
      toValue: this.left
    }).start()
  }

  render() {

    const { state } = this;

    return (
      <View style={accountStyle.pageView}>
        <View style={[accountStyle.container, defaultStyle.shadow, {height: 450}]}>
          <View style={accountStyle.topContainer}>
            <Header {...this.props}/>
          </View>
          <Contact {...this.props}/>
          <AccountImage {...this.props} image={state.account.image}/>
          <LikeAccount {...this.props} following={state.following} followAccount={ this.followAccount }/>
          <View style={accountStyle.bottomContainer}>
            <View style={accountStyle.userNameContainer}>
              <Text style={accountStyle.userName}>
                {state.account.first_name} {state.account.last_name}
              </Text>
            </View>
            <View style={accountStyle.reatingContainer} />
            <View style={accountStyle.navigation}>
              <TouchableOpacity style={accountStyle.userScreenNavList} onPress={ () => this.switchNavigation('posts') }>
                <AntDesign name='bars' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.userScreenNavList} onPress={ () => this.switchNavigation('rating') }>
                <AntDesign name='staro' size={30}/>
              </TouchableOpacity>
            </View>
            <Animated.View style={[accountStyle.userScreenNavListBorder, {left: this.navbarPosition}]} />
          </View>
        </View>
        <View style={accountStyle.bodyContainer}>
          { state.render == 'posts' ? <Posts {...this.props} /> : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    },
    fetchMessages: (id, cb) => {
      dispatch(fetchMessages(id, cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

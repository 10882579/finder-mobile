import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Animated, Dimensions, StatusBar } from 'react-native';

import { connect }  from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { fetchMessages } from '@redux/actions/notification';
import { defaultStyle, accountStyle } from '@src/static/index';
import { AccountImage, LikeAccount, Posts, Contact, Comments } from './components/index';

const { width, height } = Dimensions.get('window');

class App extends Component {

  state = {
    screen: 'posts'
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
      ...prev, screen: name
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

    const { navigation } = this.props;

    return (
      <View style={defaultStyle.container}>
        { this.state.screen == 'posts' ? <Posts {...this.props} /> : null }
        { this.state.screen == 'rating' ? <Comments {...this.props} /> : null }
        <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
          <StatusBar barStyle="light-content"/>
          <View style={[accountStyle.topContainer, {height: 225}]}>
            <TouchableOpacity
              style={accountStyle.backBtnContainer}
              activeOpacity={0.8}
              onPress={ () => navigation.goBack() }
            >
              <Ionicons
                name='md-arrow-round-back'
                style={{
                  fontSize: 24,
                  color: 'white'
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={[accountStyle.bottomContainer, {height: 225}]}>
            <View style={accountStyle.navigationContainer}>
              <TouchableOpacity style={accountStyle.userScreenNavList} onPress={ () => this.switchNavigation('posts') }>
                <AntDesign name='bars' size={30}/>
              </TouchableOpacity>
              <TouchableOpacity style={accountStyle.userScreenNavList} onPress={ () => this.switchNavigation('rating') }>
                <AntDesign name='staro' size={30}/>
              </TouchableOpacity>
            </View>          
            <Animated.View style={[accountStyle.userScreenNavListBorder, {left: this.navbarPosition}]} />
          </View>
          <Contact {...this.props}/>
          <AccountImage {...this.props} data={this.state.account}/>
          <LikeAccount {...this.props} following={this.state.following} followAccount={ this.followAccount }/>
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

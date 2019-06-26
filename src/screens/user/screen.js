import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';

import { connect }  from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { Ionicons } from '@expo/vector-icons';
import { fetchMessages } from '@redux/actions/notification';
import { followAccount } from '@redux/actions/account';
import { defaultStyle, accountStyle } from '@src/static/index';
import { DetailView, Contact, Rating, LikeAccount } from './components/index';
import { fetchPost } from '@redux/actions/home';


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
  }

  followAccount = (id) => {
    const { followAccount } = this.props;
    followAccount(id, () => {
      this.setState( (prev) => ({
        ...prev,
        following: !prev.following
      }))
    })
    
  }

  render() {

    const { navigation } = this.props;
    const { account } = this.state;

    return (
      <View style={defaultStyle.container}>
        <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
          <View style={accountStyle.topContainer}>
            <View style={defaultStyle.customHeaderContainer}>
              <StatusBar barStyle='light-content'/>
              <TouchableOpacity
                style={defaultStyle.headerIconContainer}
                activeOpacity={0.8}
                onPress={ () => navigation.goBack() }
              >
                <Ionicons
                  name='md-arrow-round-back'
                  style={defaultStyle.headerIcon}
                />
              </TouchableOpacity>
              <View style={defaultStyle.headerBodyContainer}/>
            </View>
            <Contact {...this.props}/>
            <LikeAccount {...this.props}
              following={ this.state.following }
              follow={ this.followAccount }
            />
          </View>
          <View style={defaultStyle.flex}>
            <View style={accountStyle.nameContainer}>
              <Text style={accountStyle.name} numberOfLines={1}>
                {account.first_name} {account.last_name}
              </Text>
            </View>
            <Rating rating={account.rating} />
          </View>
          <View style={accountStyle.accountContainer}>
            <View style={accountStyle.accountImageContainer}>
              <View style={accountStyle.accountImage}>
                <Image source={{uri: account.image}} style={defaultStyle.image}/>
              </View>
            </View>
          </View>
        </View>
        <DetailView {...this.props}/>
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
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
    fetchPost: (id, cb) => {
      dispatch(fetchPost(id, cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

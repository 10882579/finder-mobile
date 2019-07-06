import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';

import { connect }  from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { fetchMessages } from '@redux/actions/notification';
import { followAccount } from '@redux/actions/account';
import { defaultStyle, accountStyle } from '@src/static/index';
import { Contact, Rating, LikeAccount } from './components/index';
import { fetchUserPosts } from '@redux/actions/post';

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

  navigateToDetail = (screen) => {
    const { fetchUserPosts, navigation } = this.props;
    const { params } = navigation.state;
    if(screen == "E'lonlar")
      fetchUserPosts(params.account.account_id, 1, (data) => {
        navigation.navigate("Detail", {data, screen: screen});
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
        <View style={accountStyle.navigationContainer}>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("E'lonlar") }>
            <AntDesign name='bars' size={28}/>
            <Text style={accountStyle.navigationText}>E'lonlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("Reyting") }>
            <AntDesign name='staro' size={28}/>
            <Text style={accountStyle.navigationText}>Reyting</Text>
          </TouchableOpacity>
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
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
    fetchUserPosts: (id, page, cb) => {
      dispatch(fetchUserPosts(id, page, cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

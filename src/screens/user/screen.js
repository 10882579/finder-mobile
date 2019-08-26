import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';

import { connect }  from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { followAccount, fetchSpecificAccount } from '@redux/actions/account';
import { fetchChatRoomName } from '@redux/actions/notification';
import { defaultStyle, accountStyle } from '@src/static/index';
import { Contact, Rating, LikeAccount, Header } from './components/index';

class App extends Component {

  state = {
    loading: true,
  }

  componentWillMount() {
    const { navigation, fetchSpecificAccount } = this.props;
    const { params } = navigation.state;
    fetchSpecificAccount(params.id, (data) => {
      this.updateState(data);
    })
  }

  updateState = (data) => {
    this.setState( (prev) => ({...prev, ...data}), () => {
      setTimeout(() => this.setState({...this.state, loading: false}), 500)
    })
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
    const  { account } = this.state;
    this.props.navigation.navigate("Detail", {
      screen: screen,
      id: account.account_id,
      rating: account.rating,
      from: {
        screen: 'User',
        id: account.account_id
      }
    });
  }

  render() {
    const { loading, account } = this.state;

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
        <View style={defaultStyle.container}>
          <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
            <View style={accountStyle.topContainer}>
              <Header {...this.props}/>
              <Contact {...this.props} state={this.state}/>
              <LikeAccount {...this.props}
                state={this.state}
                follow={this.followAccount}
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
            <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("userposts") }>
              <AntDesign name='bars' size={28}/>
              <Text style={accountStyle.navigationText}>E'lonlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("rating") }>
              <AntDesign name='staro' size={28}/>
              <Text style={accountStyle.navigationText}>Reyting</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatRoomName: (id, cb) => {
      dispatch(fetchChatRoomName(id, cb))
    },
    fetchSpecificAccount: (id, cb) => {
      dispatch(fetchSpecificAccount(id, cb))
    },
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

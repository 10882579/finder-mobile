import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image, ActivityIndicator } from 'react-native';

import { connect }  from 'react-redux';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { followAccount, fetchSpecificAccount } from '@redux/actions/account';
import { defaultStyle, accountStyle } from '@src/static/index';
import { Contact, Rating, LikeAccount } from './components/index';

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
    this.props.navigation.push("Detail", {screen: screen, id: account.account_id});
  }

  render() {

    const { navigation } = this.props;
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
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
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

import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';


import { fetchFollowingUsers, followAccount } from '@redux/actions/account';
import { fetchUserPosts, fetchUserSavedPosts } from '@redux/actions/post';

import Header from './components/header';
import Rating from './components/rating';

const Posts = (props) => {

  const { navigation, data } = props;

  navigateToPost = (id) => {
    navigation.navigate("Post", {id: id, from: 'Account'});
  }

  return (
    <ScrollView
      bounces={false}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View style={accountStyle.scrollviewContainer}>
        {
          data.map( (item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={[accountStyle.listItem, defaultStyle.shadow]}
              onPress={ () => navigateToPost(item.id) }
            >
              <View style={[defaultStyle.flex]}>
                <Image source={{uri: item.images[0].uri}} style={defaultStyle.image}/>
              </View>
              <View style={accountStyle.itemTitleContainer}>
                <Text style={accountStyle.itemTitle} numberOfLines={2}>{item.title}</Text>
              </View>
              <View style={accountStyle.itemPriceContainer}>
                <Text style={accountStyle.itemPrice} numberOfLines={1}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}

const Accounts = (props) => {

  const { navigation, data, followThisAccount } = props;

  navigateToAccount = (id) => {
    navigation.navigate("User", {id: id, from: 'Account'});
  }

  return (
    <ScrollView
      scrollEventThrottle={16}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={accountStyle.followScrollviewContainer}>
        {
          data.map( (item) => (
            <TouchableOpacity
              key={item.account_id}
              activeOpacity={0.9}
              style={[accountStyle.followingUserContainer, defaultStyle.shadow]}
              onPress={ () => navigateToAccount(item.account_id) }
            >
              <View style={accountStyle.followingUserImage}>
                <Image source={{uri: item.image}} style={defaultStyle.image}/>
              </View>
              <View style={accountStyle.followingUsernameContainer}>
                <View style={accountStyle.usernameContainer}>
                  <Text style={accountStyle.followingUserName} numberOfLines={1}>
                    { item.first_name } { item.last_name }
                  </Text>
                  <TouchableOpacity style={accountStyle.likeButtonContainer} onPress={ () => followThisAccount(item.account_id) }>
                    <AntDesign name={item.following ? 'like1' : 'like2'} style={accountStyle.likeIcon}/>
                  </TouchableOpacity>
                </View>
                <Rating rating={item.rating}/>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}


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
      fetchFollowingUsers 
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
        console.log(data);
        
        this.updateState("Kuzatilayotkanlar", data);
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
            { screen == "E'lonlarim" || screen == "E'lonlar" ? <Posts {...this.props} data={data}/> : null }
            { screen == "Belgilangan e'lonlar" ? <Posts {...this.props} data={data} /> : null }
            { screen == "Kuzatilayotkanlar" ? <Accounts {...this.props} data={data} followThisAccount={this.followAccount}/> : null }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

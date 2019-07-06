import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { fetchPost } from '@redux/actions/home';
import { fetchSpecificAccount } from '@redux/actions/account';

import Header from './components/header';

const Posts = (props) => {

  const { navigation, fetchPost, data, updateNavState } = props;

  handleFetchPost = (id) => {
    updateNavState({direction: 'Account'});
    fetchPost(id, (data) => {
      navigation.navigate('Post', {...data})
    })
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
              onPress={ () => handleFetchPost(item.id) }
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

  const { navigation, fetchSpecificAccount, data } = props;

  navigateToAccount = (id) => {
    fetchSpecificAccount(id, (data) => {
      navigation.navigate('User', {...data})
    })
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
              key={item.id}
              activeOpacity={0.9}
              style={[accountStyle.followingUserContainer, defaultStyle.shadow]}
              onPress={ () => navigateToAccount(item.id) }
            >
              <View style={accountStyle.followingUserImage}>
                <Image source={{uri: item.image}} style={defaultStyle.image}/>
              </View>
              <View style={accountStyle.followingUserNameContainer}>
                <Text style={accountStyle.followingUserName} numberOfLines={1}>
                  { item.first_name } { item.last_name }
                </Text>
                <TouchableOpacity style={accountStyle.likeButtonContainer}>
                  <AntDesign name={item.following ? 'like1' : 'like2'} style={accountStyle.likeIcon}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}


class App extends Component {

  render() {

    const { navigation } = this.props;
    const { screen, data }  = navigation.state.params;

    return (
      <View style={defaultStyle.flex}>
        <Header {...this.props} screen={screen}/>
        <View style={defaultStyle.flex}>
          { screen == "E'lonlarim" ? <Posts {...this.props} data={data}/> : null }
          { screen == "Belgilangan e'lonlar" ? <Posts {...this.props} data={data} /> : null }
          { screen == "Kuzatilayotkanlar" ? <Accounts {...this.props} data={data}/> : null }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecificAccount: (id, cb) => {
      dispatch(fetchSpecificAccount(id, cb))
    },
    fetchPost: (id, cb) => {
      dispatch(fetchPost(id, cb))
    },
    followAccount: (id, cb) => {
      dispatch(followAccount(id, cb))
    },
    updateNavState: (obj) => {
      dispatch({
        type: 'UPDATE_NAV_STATE',
        payload: obj
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

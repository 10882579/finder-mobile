import React, { Component } from 'react';
import { Animated, View, ScrollView, ActivityIndicator, Text, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Constants } from 'expo';

import { fetchChatRoomName } from '@redux/actions/notification';
import { defaultStyle, postStyle } from '@src/static/index';
import { fetchPost } from "@redux/actions/home";
import { savePost } from "@redux/actions/post";

import User from './components/user';
import Header from './components/header';
import Images from './components/images';
import Condition from './components/condition';
import ActionButton from './components/actionbutton';
 
const { width } = Dimensions.get('window');
const MAX_HEIGHT = width + Constants.statusBarHeight + 60;
const MIN_HEIGHT = Constants.statusBarHeight + 60;
const SCROLL_HEIGHT = MAX_HEIGHT - MIN_HEIGHT;

class App extends Component {

  state = {
    loading: true
  }

  componentWillMount() {
    const { fetchPost, navigation, setPostState } = this.props
    const { params } = navigation.state;
    const from  = params.from || {screen: 'Home'};

    this.imageHeight = new Animated.Value(0);
    
    if(params.id){
      fetchPost(params.id, (data) => {
        if(data){
          setPostState(data);
          setInterval( () => this.setState( () => ({loading: false})), 500)
        }
        else{
          navigation.navigate(from.screen);
        }
      })
    }
    else{
      navigation.navigate(from.screen);
    }
  }

  toggleSavePost = () => {
    const { savePost, account, navigation, post } = this.props;
    if(account.accountFetched){
      savePost(post.id);
    }
    else{
      navigation.navigate('Account', {
        from: {
          screen: 'Post',
          id:  post.id
        }
      });
    }
  }

  render() {

    const { loading } = this.state;
    const { post } = this.props;

    const height = this.imageHeight.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
      extrapolate: 'clamp',
    })

    if(loading){
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
          <ScrollView 
            style={defaultStyle.flex} 
            bounces={false} scrollEventThrottle={8} 
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.imageHeight}}}]
            )}
          >
            <View style={postStyle.container}>
              <View style={postStyle.titleContainer}>
                <Text style={postStyle.title} numberOfLines={2}>{post.title}</Text>
              </View>
              <View style={postStyle.locationContainer}>
                <Entypo name='location-pin' style={[postStyle.location, postStyle.locationIcon]}/>
                <Text style={postStyle.location}>{post.city_town}, {post.state}</Text>
              </View>
              <User {...this.props}/>
              <Condition {...this.props}/>
              <View style={postStyle.descriptionContainer}>
                <Text style={postStyle.description}>{post.description}</Text>
              </View>
              <ActionButton {...this.props}/>
            </View>
          </ScrollView>
          <Images {...this.props} height={height}/>
          <Header {...this.props} toggleSavePost={this.toggleSavePost}/>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatRoomName: (id, cb) => {
      dispatch(fetchChatRoomName(id, cb))
    },
    setPostState: (data) => {
      dispatch({
        type: 'SET_POST_STATE',
        payload: data
      })
    },
    fetchPost: (id, cb) => {
      dispatch(fetchPost(id, cb))
    },
    savePost: (id) => {
      dispatch(savePost(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

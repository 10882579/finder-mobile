import React from 'react';
import { View, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native';
import { homeStyle, defaultStyle } from '@src/static/index';

import Header from './header';
import Filter from './filter';

export default class App extends React.Component {

  state = {
    refreshing: false,
    searchVisible: false,
  }

  refreshPage = () => {
    this.setState( (prev) => {
      return {...prev, refreshing: true}
    }, () => {
      this.props.clearFilter();
      this.props.fetchPosts();
    });
    setTimeout(() => {
      this.setState( (prev) => ({...prev, refreshing: false}) )
    }, 1000);
  }

  navigateToPost = (id) => {
    const { navigation } = this.props;
    navigation.navigate('Post', {
      id: id, 
      from: { screen: 'Home' }
    })
  }

  toggleSearch = () => {
    this.setState( (prev) => ({...prev, searchVisible: !prev.searchVisible}))
  }

  render(){

    const { home } = this.props;

    return (
      <View style={defaultStyle.flex}>
        <Header {...this.props} toggleSearch={this.toggleSearch} show={!this.state.searchVisible}/>
        <Filter {...this.props} isVisible={this.state.searchVisible}/>
        <ScrollView style={defaultStyle.flex}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshPage}
            />
          }
        >
          <View style={homeStyle.flexGrid}>
            {
              home.posts.map( (post) => (
                <TouchableOpacity
                  key={post.id}
                  activeOpacity={0.7}
                  style={homeStyle.postContainer}
                  onPress={ () => this.navigateToPost(post.id) }
                >
                  {
                    post.photos ? (
                      <Image source={{uri: post.photos.uri}} style={defaultStyle.image}/>
                    ) : null
                  }
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

import React, { Component } from 'react';
import { View, ScrollView, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { publishPost } from '@redux/actions/post';
import { createStyle } from '@src/static/index';

import Header from './components/header';
import Title from './components/title';
import Price from './components/price';
import Category from './components/category';
import ImageUpload from './components/imageupload';
import Description from './components/description';

const { height } = Dimensions.get('window');

class App extends Component {

  state = {
    showCategory: false,
    categories: [
      {id: 1, value: 'Avtomobil', name: 'vehicle'},
      {id: 2, value: "Ko'chmas mulk", name: 'house-land'},
      {id: 3, value: 'Uy jihozlari', name: 'house-equipment'},
      {id: 4, value: 'Telefonlar', name: 'phone'},
      {id: 5, value: 'Kompyuterlar', name: 'computer'},
      {id: 7, value: 'Kiyim-kechak', name: 'clothing'},
    ]
  }

  componentWillMount(){
    this.colorOpacity = new Animated.Value(0);
  }

  handleAutoScroll = (t) => {
    this.scrollview.scrollTo({
      y: height * t, 
      animated: true, 
      duration: 500
    })
  }

  toggleCategoryModal = () => {
    this.setState( (prev) => ({...prev, showCategory: !prev.showCategory}))
  }

  render() {

    const color = this.colorOpacity.interpolate({
      inputRange: [0, height/2, height],
      outputRange: ['rgba(0,0,0,0.6)', 'rgba(0,0,0,1)', '#16222A'],
      extrapolate: 'clamp',
    })

    return (
      <View style={createStyle.screenContainer}>
        <ScrollView 
          style={createStyle.container}
          scrollEventThrottle={16} 
          bounces={false} scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          ref={ (ref) => this.scrollview = ref }
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.colorOpacity}}}]
          )}
        >
          <ImageUpload {...this.props} handleAutoScroll={this.handleAutoScroll}/>
          <Title {...this.props} 
            toggle={this.toggleCategoryModal}
            handleAutoScroll={this.handleAutoScroll} 
            categories={this.state.categories}
          />
          <Price {...this.props} handleAutoScroll={this.handleAutoScroll}/>
          <Description {...this.props} handleAutoScroll={this.handleAutoScroll}/>
        </ScrollView>
        <Header {...this.props} color={color}/>
        <Category {...this.props} 
          show={this.state.showCategory} 
          categories={this.state.categories} 
          toggleCategoryModal={this.toggleCategoryModal}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    data: state.create,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCreateState: (obj) => {
      dispatch({
        type: "UPDATE_CREATE_STATE",
        payload: obj
      })
    },
    uploadImage: (image) => {
      dispatch({
        type: 'UPLOAD_IMAGE',
        payload: image,
      })
    },
    deleteImage: (i) => {
      dispatch({
        type: 'DELETE_UPLOADED_IMAGE',
        payload: i
      })
    },
    publishPost: (cb) => {
      dispatch(publishPost(cb))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

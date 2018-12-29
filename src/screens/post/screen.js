import React, { Component } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { connect } from 'react-redux';

import {
  Header,
  Owner,
  ImmediateInfo,
  PostImages,
  Description,
  DeletePost
} from './components/index';

import {
  deletePost,
  savePost,
  setPostSold,
  fetchPost,
} from '@redux/actions/post';

import { handleGoBack } from '@redux/actions/handleGoBack';
import { defaultStyle } from '@src/static/index';

class App extends Component {

  state = {
    fetched: false,
    showModal: false,
    refreshing: false
  }

  componentDidMount = async () => {
    this.fetchPost()
  }

  componentWillUnmount = async () => {
    this.props.erasePostState()
  }

  refreshPage = async () => {
    await this.setState({...this.state, refreshing: true});
    await this.fetchPost()
    await setTimeout(() => this.setState({...this.state, refreshing: false}), 1000);
  }

  fetchPost = () => {
    const { navigation, fetchPost } = this.props;
    const { id } = navigation.state.params;
    fetchPost(id)
  }

  toggleModal = (bool) => {
    this.setState({...this.state, showModal: bool})
  }

  render() {

    const { account, post } = this.props;

    return (

      <View style={defaultStyle.container}>
        {
          post.fetched ? (
            <View style={defaultStyle.flex}>
              <Header
                {...this.props}
                toggleModal={ (bool) => this.toggleModal(bool) }
              />
              <ScrollView style={defaultStyle.flex} refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.refreshPage}
                />
              }>
                <PostImages     {...this.props} />
                <ImmediateInfo  {...this.props} />
                <Owner          {...this.props} />
                <Description    {...this.props} />
              </ScrollView>
              {
                post.account.account_id == account.account_id ? (
                  <DeletePost
                    {...this.props}
                    showModal={this.state.showModal}
                    toggleModal={ (bool) => this.toggleModal(bool) }
                  />
                ) : null
              }
            </View>
          ) : null
        }
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    post: state.post,
    // settings: state.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNavState: (obj) => {
      dispatch({
        type: 'UPDATE_NAV_STATE',
        payload: obj
      })
    },
    updateCreateDataState: (value) => {
      dispatch({
        type: 'UPDATE_CREATE_DATA_STATE',
        payload: value
      })
    },
    erasePostState: () => {
      dispatch({
        type: 'ERASE_POST_STATE',
      })
    },
    // eraseAccountDataState: () => {
    //   dispatch({
    //     type: 'UPDATE_ACCOUNT_DATA_STATE',
    //     payload: {
    //       followings: [],
    //       publishedPosts: [],
    //       savedPosts: [],
    //       post: {fetched: false}
    //     }
    //   })
    // },
    // eraseNavigationState: () => {
    //   dispatch({
    //     type: 'ERASE_NAVIGATION_STATE'
    //   })
    // },
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    },
    deletePost : (nav) => {
      dispatch(deletePost(nav))
    },
    fetchPost: (id) => {
      dispatch(fetchPost(id))
    },
    setPostSold: (nav) => {
      dispatch(setPostSold(nav))
    },
    savePost: (nav) => {
      dispatch(savePost(nav))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

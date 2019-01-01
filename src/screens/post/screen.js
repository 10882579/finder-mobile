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
    showModal: false,
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
              <ScrollView style={defaultStyle.flex}>
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
    deletePost : (nav) => {
      dispatch(deletePost(nav))
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

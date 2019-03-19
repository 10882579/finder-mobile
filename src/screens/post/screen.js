import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import {
  Header,
  Owner,
  ImmediateInfo,
  PostImages,
  Description,
  DeletePost
} from './components/index';
import { fetchMessages } from '@redux/actions/notification';
import { savePost, setPostSold, deletePost } from '@src/requests';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { defaultStyle } from '@src/static/index';

class App extends Component {

  state = {
    showModal: false,
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState( (prev) => ({
      ...prev,
      ...params,
    }))
  }

  toggleSavePost = () => {
    const { account, mode, navigation } = this.props;
    if (account.accountFetched){
      savePost({
        mode: mode.server,
        id: this.state.id,
        token: account.token
      }).then( (status) => {
        this.setState( (prev) => ({...prev, saved: !prev.saved}))
      })
    }
    else{
      navigation.navigate('Account')
    }
  }

  setPostSold = () => {
    const { account, mode, navigation } = this.props;
    if (account.accountFetched){
      setPostSold({
        mode: mode.server,
        id: this.state.id,
        token: account.token
      }).then( (status) => {
        this.setState( (prev) => ({...prev, sold: true, showModal: false}))
      })
    }
  }

  deletePost = () => {
    const { account, mode, navigation, handleGoBack } = this.props;
    if (account.accountFetched){
      deletePost({
        mode: mode.server,
        id: this.state.id,
        token: account.token
      }).then( (status) => {
        handleGoBack(navigation)
      })
    }
  }


  toggleModal = (bool) => {
    this.setState( (prev) => ({
      ...prev,
      showModal: bool
    }))
  }

  render() {

    const post_account = this.state.account;
    const { account } = this.props;

    return (
      <View style={defaultStyle.container}>
        <View style={defaultStyle.flex}>
          <Header
            {...this.props}
            post={this.state}
            toggleSavePost={ this.toggleSavePost }
            toggleModal={ (bool) => this.toggleModal(bool) }
          />
          <ScrollView style={defaultStyle.flex} bounces={false} scrollEventThrottle={16}>
            <PostImages     {...this.props} post={this.state}/>
            <ImmediateInfo  {...this.props} post={this.state}/>
            <Owner          {...this.props} post={this.state}/>
            <Description    {...this.props} post={this.state}/>
          </ScrollView>
          {
            post_account.account_id == account.account_id ? (
              <DeletePost
                {...this.props}
                post={this.state}
                setPostSold={this.setPostSold}
                deletePost={this.deletePost}
                showModal={this.state.showModal}
                toggleModal={ (bool) => this.toggleModal(bool) }
              />
            ) : null
          }
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
    fetchMessages: (id, cb) => {
      dispatch(fetchMessages(id, cb))
    },
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
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

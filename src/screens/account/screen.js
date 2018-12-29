import React, { Component } from 'react';
import { View }     from 'react-native';
import { connect }  from 'react-redux';
import { Account }  from './components/index';

import {
  fetchUserPosts,
  fetchUserSavedPosts,
  fetchFollowingUsers,
  updateAccount,
} from '@src/redux/actions/account';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { defaultStyle } from '@src/static/index';


class App extends Component {

  render() {

    const { account } = this.props;

    return (

      <View style={[defaultStyle.flex, {backgroundColor: 'white'}]}>

        { account.accountFetched ? <Account {...this.props}/> : null }

      </View>

    )

  }
}



const mapStateToProps = (state) => {
  return {
    account: state.account,
    // settings: state.settings,
    // before: state.mode.before,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (id, page) => {
      dispatch(fetchUserPosts(id, page))
    },
    fetchUserSavedPosts: (page) => {
      dispatch(fetchUserSavedPosts(page))
    },
    fetchFollowingUsers: (page) => {
      dispatch(fetchFollowingUsers(page))
    },
    updateAccountImage: (obj, nav) => {
      dispatch(updateAccount(obj, nav))
    },
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

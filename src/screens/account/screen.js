import React, { Component } from 'react';
import { View }     from 'react-native';
import { connect }  from 'react-redux';
import { Account }  from './components/index';

import { defaultStyle } from '@src/static/index';
import { followAccount } from '@redux/actions/account';

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
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followAccount: (id) => {
      dispatch(followAccount(id))
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

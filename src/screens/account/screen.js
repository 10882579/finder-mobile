import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { Account, Login } from './components/index';
import { defaultStyle } from '@src/static/index';

class App extends Component {

  render() {

    const { account } = this.props;

    return (
      <View style={[defaultStyle.flex, {backgroundColor: 'white'}]}>

        { account.accountFetched ? <Account {...this.props}/> : <Login {...this.props}/> }

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
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
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

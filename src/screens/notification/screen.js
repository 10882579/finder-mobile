import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { notificationStyle } from '@src/static/index';
import { fetchConversations } from '@redux/actions/notification';
import { Header, Conversations } from './components/index';

class App extends Component {

  state = {
    renderMessages: false,
    data: []
  }

  updateState = (obj) => {
    this.setState( () => ({...obj}))
  }

  render() {
    return (
      <View style={notificationStyle.container}>
        <Header {...this.props} updateState={this.updateState}/>
        {
          this.state.renderMessages ? (
            <Conversations {...this.props} data={this.state.data}/>
          ) : null
        }
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
    fetchConversations: (callback) => {
      dispatch(fetchConversations(callback))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

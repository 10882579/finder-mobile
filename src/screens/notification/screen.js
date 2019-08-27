import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { fetchNotifications, setNotificationRead } from '@redux/actions/notification';
import { defaultStyle, notificationStyle } from '@src/static/index';
import { Header } from './components/index';
import timefilter from '@src/timefilter';

class App extends Component {

  state = {
    expend: null
  }

  componentWillMount(){
    this.props.fetchNotifications();
  }

  toggleItem = (item) => {
    this.setState( (prev) => ({
      expend: prev.expend == item.id ? null : item.id
    }))
    if(!item.read){
      this.props.setNotificationRead(item.id)
    }
  }

  render() {
    const { notifications } = this.props;
    return (
      <View style={defaultStyle.container}>
        <Header {...this.props} />
        <ScrollView style={notificationStyle.scrollviewContainer} bounces={false}>
          {
            notifications.map( (item, index) => (
              <TouchableOpacity activeOpacity={0.9} key={index} 
                style={[
                  notificationStyle.itemContainer, 
                  defaultStyle.shadow,
                  !item.read ? {backgroundColor: '#BEE0C9'} : null
                ]}
                onPress={ () => this.toggleItem(item) }
              >
                <View style={{flexDirection: 'row'}}>
                  <View style={notificationStyle.iconContainer}>
                    <Ionicons name='md-cloud-upload' size={40} color='green'/>
                  </View>
                  <View style={notificationStyle.titleContainer}>
                    <Text style={notificationStyle.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={notificationStyle.createdAt} numberOfLines={1}>{timefilter.createdAt(item.created_at)}</Text>
                  </View>
                </View>
                {
                  this.state.expend == item.id ? (
                    <View style={notificationStyle.messageContainer}>
                      <Text style={notificationStyle.message}>{item.message}</Text>
                    </View>
                  ) : null
                }
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    notifications: state.notification.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => {
      dispatch(fetchNotifications())
    },
    setNotificationRead: (id) => {
      dispatch(setNotificationRead(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

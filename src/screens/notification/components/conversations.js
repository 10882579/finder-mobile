import React, { Component } from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';
import { defaultStyle, chatStyle } from '@src/static/index';
import { fetchMessages } from '@redux/actions/notification';
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount(){
    this.data = this.props.data
  }

  navigateToChat = (data) => {
    const { navigation, fetchMessages } = this.props;
    fetchMessages(data.account_id, (messages, status) => {
      if (status == 200){
        navigation.navigate('Chat', {...data, messages: messages})
      }
    })
  }

  render() {
    return (
      <View style={chatStyle.container}>
        <SafeAreaView style={defaultStyle.flex}>
          <ScrollView style={defaultStyle.flex} bounces={false}>
            {
              this.data.map( (item, index) => (
                <TouchableOpacity activeOpacity={0.8} key={index} 
                  style={chatStyle.conversationItem}
                  onPress={ () => this.navigateToChat(this.data[0]) }
                >
                  <View style={chatStyle.imageContainer}>
                    <Image source={{uri: item.image}} style={defaultStyle.image}/>
                  </View>
                  <View style={defaultStyle.flex}>
                    <View style={chatStyle.usernameContainer}>
                      <Text style={chatStyle.username}>{item.first_name} {item.last_name}</Text>
                    </View>
                    <View style={defaultStyle.flex} />
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </SafeAreaView>
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
    fetchMessages: (id, cb) => {
      dispatch(fetchMessages(id, cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

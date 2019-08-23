import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { chatStyle } from '@src/static/index';
import { messageCreateAt } from '@src/timefilter';

export default class App extends React.Component {

  componentDidMount = () => {
    this.scrollView.scrollToEnd({animated: false});
  }
 
  render(){
    const { messages, account } = this.props;
    return (
      <ScrollView 
        bounces={false}
        style={chatStyle.scrollViewContainer}
        scrollEventThrottle={8}
        showsVerticalScrollIndicator={false}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={ () => {
          this.scrollView.scrollToEnd({animated: false});
        }}
        onLayout={ (e) => {
          this.scrollView.scrollToEnd({animated: false});
        }}
      >
        <View style={chatStyle.messagesContainer}>
          {
            messages.map( (item, i) => (
              <View 
                style={[
                  chatStyle.messageListItem, 
                  account.account_id == item.from ? {
                    flexDirection: 'row-reverse'
                  } : null
              ]} key={i}>
                <View style={chatStyle.messageItemContext}>
                  <Text style={chatStyle.messageText}>{item.message}</Text>
                  <Text style={chatStyle.messageTimeText}>{messageCreateAt(item.created_at)}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

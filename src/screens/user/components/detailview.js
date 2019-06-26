import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Constants } from 'expo';
import { defaultStyle, accountStyle } from '@src/static/index';

import Posts from './posts';

const { height } = Dimensions.get('window');

export default class App extends Component {

  state = {
    screen: ''
  }


  componentWillMount = () => {
    this.detailHeight = new Animated.Value(0);
  }

  renderScreen = (screen)  => {
    this.setState( () => ({
      screen: screen
    }));
    Animated.timing(this.detailHeight, {
      toValue: height - Constants.statusBarHeight,
      duration: 500,
    }).start()
  }

  collapseScreen = () => {
    Animated.timing(this.detailHeight, {
      toValue: 0,
      duration: 500,
    }).start()
  }

  render() {

    const { screen } = this.state;

    return (
      <View style={defaultStyle.flex}>
        <View style={accountStyle.navigationContainer}>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.renderScreen("E'lonlar") }>
            <AntDesign name='bars' size={28}/>
            <Text style={accountStyle.navigationText}>E'lonlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.renderScreen("Reyting") }>
            <AntDesign name='staro' size={28}/>
            <Text style={accountStyle.navigationText}>Reyting</Text>
          </TouchableOpacity>
        </View>
        <Animated.View style={[accountStyle.detailContainer, {height: this.detailHeight}]}>
          <View style={accountStyle.detailHeader}>
            <TouchableOpacity
              style={defaultStyle.headerIconContainer}
              activeOpacity={0.8}
              onPress={ this.collapseScreen }
            >
              <Feather name='chevron-down' size={30} color='white'/>
            </TouchableOpacity>
            <View style={defaultStyle.headerBodyContainer}>
              <Text style={defaultStyle.headerBodyText}>{screen}</Text>
            </View>
          </View>
          <View style={defaultStyle.flex}>
            { screen == "E'lonlar" ? <Posts {...this.props} /> : null }
          </View>
        </Animated.View>
      </View>
    )
  }
}

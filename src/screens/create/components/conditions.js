import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Slider
} from 'react-native';

import { createStyle } from '@src/static/index'
import { Ionicons, MaterialCommunityIcons as MatIcons } from '@expo/vector-icons';

export default class App extends Component {

  setCondition = (value)  => {
    const { updateCreateDataState } = this.props;
    switch (value) {
      case 0:
        updateCreateDataState({condition: 'Qoniqarsiz'})
        break;
      case 1:
        updateCreateDataState({condition: 'Qoniqarli'})
        break;
      case 2:
        updateCreateDataState({condition: 'Yaxshi'})
        break;
      case 3:
        updateCreateDataState({condition: 'Juda yaxshi'})
        break;
      case 4:
        updateCreateDataState({condition: 'A\'lo'})
        break;
    }
  }

  render () {
    const { data } = this.props

    return (
      <View>
        <View style={createStyle.descriptionBlock}>
          <View style={createStyle.descriptionBlockLeft}>
            <MatIcons name='chart-bubble' style={createStyle.descriptionBlockIcon} />
          </View>
          <View style={createStyle.descriptionNameContainer}>
            <Text style={createStyle.descriptionName}>Holati</Text>
          </View>
          <TouchableOpacity style={createStyle.descriptionValueContainer}
            activeOpacity={0.9}>
            <View style={createStyle.descriptionValueContainerItem}>
              <Text style={createStyle.descriptionValue}>{data.condition}</Text>
            </View>
            <View style={createStyle.descriptionValueContainerItem}>
              <Ionicons name='ios-arrow-down' style={createStyle.descriptionArrowDownIcon}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={createStyle.conditionSelectContainer}>
          <Slider
            step = { 1 }
            minimumValue = { 0 }
            maximumValue = { 4 }
            onValueChange = { this.setCondition }
            minimumTrackTintColor = "#1aa3ff"
            maximumTrackTintColor = "darkgrey"
            style = {{ width: '100%' }}
            value = { 2 }
          />
        </View>
      </View>
    )
  }
}

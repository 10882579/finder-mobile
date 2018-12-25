import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';

import { Entypo }     from '@expo/vector-icons';
import { createStyle }  from '@src/static/index'

const Input = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor='white'
      underlineColorAndroid="transparent"
      style={props.style}
      value={props.value}
      onChangeText={ (v) => props.action(v) }
      autoCorrect={false}
    />
  )
}


export default (props) => {

  const { data, updateCreateDataState } = props;


  return (
    <View style={createStyle.postTitleAddressContainer}>
      <View style={createStyle.postTitleContainer}>
        <View style={createStyle.postTitleInputContainer}>
          <Input
            placeholder="Sarlavha"
            style={createStyle.postTitle}
            value={data.title}
            action={ (v) => updateCreateDataState({title: v})}
          />
        </View>
        <View style={createStyle.postAddressContaner}>
          <Entypo name='location-pin' style={createStyle.addressIcon}/>
          <View style={createStyle.postCityAddressContainer}>
            <Input
              placeholder="Shahar | Tuman"
              style={createStyle.postAddressInput}
              value={data.city_town}
              action={ (v) => updateCreateDataState({city_town: v})}
            />
          </View>
          <View style={createStyle.postStateAddressContainer}>
            <Input
              placeholder="Viloyat"
              style={createStyle.postAddressInput}
              value={data.state}
              action={ (v) => updateCreateDataState({state: v})}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

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
      onFocus={props.onFocus}
    />
  )
}


export default (props) => {

  const { data, updateCreateDataState, scrollToInput } = props;


  return (
    <View style={createStyle.titleAddressContainer}>
      <View style={createStyle.titleInputContainer}>
        <Input
          placeholder="Sarlavha"
          style={createStyle.titleInput}
          value={data.title}
          onFocus={ (event) => scrollToInput(event) }
          action={ (v) => updateCreateDataState({title: v})}
        />
      </View>
      <View style={createStyle.addressContaner}>
        <Entypo name='location-pin' style={createStyle.addressIcon}/>
        <View style={createStyle.cityNameContainer}>
          <Input
            placeholder="Shahar | Tuman"
            style={createStyle.addressInput}
            value={data.city_town}
            onFocus={ (event) => scrollToInput(event) }
            action={ (v) => updateCreateDataState({city_town: v})}
          />
        </View>
        <View style={createStyle.stateNameContainer}>
          <Input
            placeholder="Viloyat"
            style={createStyle.addressInput}
            value={data.state}
            onFocus={ (event) => scrollToInput(event) }
            action={ (v) => updateCreateDataState({state: v})}
          />
        </View>
      </View>
    </View>
  )
}

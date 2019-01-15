import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { CheckBox }     from 'react-native-elements';
import { createStyle }  from '@src/static/index'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


export default (props) => {

  const { data, updateCreateDataState, scrollToInput } = props;

  return (
    <View>
      <View style={createStyle.descriptionBlock}>
        <View style={createStyle.descriptionBlockLeft}>
          <MaterialIcons name='attach-money' style={createStyle.descriptionBlockIcon} />
        </View>
        <View style={createStyle.descriptionNameContainer}>
          <Text style={createStyle.descriptionName}>Narx</Text>
        </View>
        <View style={createStyle.priceInputContainer}>
          <TextInput
            placeholder=""
            placeholderTextColor='white'
            underlineColorAndroid="transparent"
            style={[createStyle.addressInput, {fontSize: 18}]}
            value={data.price}
            onFocus={ (event) => scrollToInput(event) }
            onChangeText={ (value) => updateCreateDataState({price: value}) }
            autoCorrect={false}
          />
        </View>
      </View>
      <View style={createStyle.descriptionBlock}>
        <View style={createStyle.descriptionBlockLeft}>
          <FontAwesome name='handshake-o' style={[createStyle.descriptionBlockIcon, {fontSize: 22}]} />
        </View>
        <View style={createStyle.descriptionNameContainer}>
          <Text style={createStyle.descriptionName}>Kelishish mumkin</Text>
        </View>
        <View style={createStyle.checkBoxContainer}>
          <CheckBox
            iconRight
            containerStyle={createStyle.checkBoxStyle}
            checked={data.negotiable}
            onPress={ () => updateCreateDataState({negotiable: !data.negotiable}) }
          />
        </View>
      </View>
    </View>
  )
}

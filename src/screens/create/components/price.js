import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { defaultStyle, createStyle } from '@src/static/index';

export default (props) => {
  
  const { handleAutoScroll, updateCreateState, data } = props;

  handleScroll = (i) => {
    if(i == 1){
      handleAutoScroll(i);
    }
    else{
      if(data.price.length > 0){
        handleAutoScroll(i);
      }
    }
  }

  handleNegotiation = () => {
    updateCreateState({negotiable: !data.negotiable})
  }

  return (
    <View style={createStyle.division}>
      <View style={createStyle.divisionContainer}>
        <View style={defaultStyle.displayInLine}>
          <View style={createStyle.priceInputContainer}>
            <TextInput
              onChangeText={ (v) => updateCreateState({price: v}) }
              keyboardType="numeric"
              placeholder="Qiymat | Narx"
              placeholderTextColor='darkgrey'
              underlineColorAndroid="transparent"
              style={createStyle.input}
              autoCorrect={false}
              value={data.price}
              returnKeyType='next'
            />
          </View>
          <TouchableOpacity style={[createStyle.negotiationContainer]} onPress={ handleNegotiation }>
            <FontAwesome name='handshake-o' size={24} color={data.negotiable ? '#009CFD' : '#666666'}/>
            <Text style={[
              createStyle.negotiationText, 
              {color: data.negotiable ? '#009CFD' : '#666666'}
            ]}>Kelishamiz</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={createStyle.actionContainer}>
        <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => handleScroll(1) }> 
          <Feather name='chevron-left' color='white' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => handleScroll(3) }> 
          <Feather name='chevron-right' color='white' size={30}/>
        </TouchableOpacity> 
      </View>
    </View>
  )
}
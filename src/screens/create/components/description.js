import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { defaultStyle, createStyle } from '@src/static/index';

export default (props) => {

  const { data, updateCreateState, handleAutoScroll, publishPost, navigation } = props;

  handlePublishPost = () => {
    publishPost(() => {
      navigation.navigate('Home');
    })
  }

  return (
    <View style={createStyle.division}>
      <View style={createStyle.divisionContainer}>
        <Text style={createStyle.descriptionText}>Qo'shimcha ma'lumot</Text>
        <TextInput
          multiline={true}
          maxLength = {250}
          autoCorrect = {false}
          value={data.description}
          underlineColorAndroid='transparent'
          style={createStyle.descriptionInput}
          onChangeText={ (v) => updateCreateState({description: v}) }
        />
      </View>
      <View style={createStyle.actionContainer}>
        <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => handleAutoScroll(2) }> 
          <Feather name='chevron-left' color='white' size={30}/>
        </TouchableOpacity> 
        <TouchableOpacity style={[createStyle.actionButton, defaultStyle.shadow]} onPress={ handlePublishPost }>
          <Text style={createStyle.actionButtonText}>Chop etmoq</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
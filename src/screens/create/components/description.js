import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { createStyle }    from '@src/static/index'
import Categories         from './categories';
import Conditions         from './conditions';
import Price              from './price';


export default (props) => {

  state = {
    selected: null,
  }

  const {
    data,
    account,
    navigation,
    publishPost,
    updateCreateDataState,
  } = props;

  handlePublish = async () => {

    // const value = Object.values(data)
    // let valid = true;
    //
    // for (var i = 0; i < value.length; i++) {
    //   if(value[i].length == 0){
    //     valid = false
    //   }
    // }
    // if(valid){
    //   if (account.accountFetched){
    //     if(data.editing){
    //       // await props.goBack()
    //       // saveEditedPostAsync(navigation, data.id)
    //     }
    //     else{
    //       publishPost(navigation);
    //     }
    //   }
    //   else{
    //     // console.log('Not Authorized');
    //     // updateNavigationState({direction: 'Post'})
    //     // navigation.navigate('Account')
    //   }
    // }
    // else{
    //   alert("Barcha ma'lumotlarni kiriting!")
    // }
  }

  return (
    <View style={createStyle.postDescriptionContainer}>

      <Categories {...props}/>
      <Conditions {...props}/>
      <Price      {...props}/>


      <View style={createStyle.additionalDescriptionContainer}>
        <Text style={createStyle.additionalDescriptionText}>Qo'shimcha ma'lumot</Text>
        <TextInput
          multiline = {true}
          value={data.description}
          underlineColorAndroid='transparent'
          style={createStyle.descriptionInput}
          autoCorrect = {false}
          maxLength = {250}
          onChangeText={ (value) => updateCreateDataState({description: value}) }
        />
      </View>
      <View style={createStyle.publishPostContainer}>
        <TouchableOpacity
          style={createStyle.publishBtn}
          onPress={ this.handlePublish }
        >
          <Text style={createStyle.publishBtnText}>Chop etish</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

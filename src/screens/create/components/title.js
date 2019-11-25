import React from 'react';
import { View, TouchableOpacity, TextInput, Text, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import { defaultStyle, createStyle } from '@src/static/index';

const ConditionButton = (props) => {
  return (
    <TouchableOpacity onPress={props.action} style={[
      createStyle.conditionButton, 
      props.selected ? createStyle.selectedCondition : null,
      props.selected ? defaultStyle.shadow : null
    ]}>
      <Text style={[createStyle.conditionName, !props.selected ? {color: 'darkgrey'} : null]}>
        {props.condition}
      </Text>
    </TouchableOpacity>
  )
}

export default (props) => {
  
  const { handleAutoScroll, updateCreateState, data, isVisible } = props;

  handleScrollView= (t) => {
    if(t == 0){
      handleAutoScroll(t);
    }
    else{
      if(data.city_town.length > 0 && data.state.length > 0 && data.title.length > 0 && data.category.length > 0){
        handleAutoScroll(t);
      }
    }
  }

  handleCategorySelect = (value) => {
    updateCreateState({category: value});
    props.toggleCategory();
  }

  return (
    <View style={createStyle.division}>
      <View style={createStyle.divisionContainer}>
        <View style={createStyle.categoryContainer}>
          <Text style={createStyle.categoryNameText}>Kategoriya:</Text>
          <TouchableOpacity style={createStyle.selectContainer} onPress={ props.toggleCategory }>
            <Text style={createStyle.selectedCategory}>{ data.category }</Text>
            <Ionicons name='ios-arrow-down' size={24} color='black'/>
          </TouchableOpacity>
        </View>
        <View style={createStyle.titleInputContainer}>
          <TextInput
            onChangeText={ (v) => updateCreateState({title: v}) }
            placeholder="Sarlavha"
            placeholderTextColor='darkgrey'
            underlineColorAndroid="transparent"
            style={createStyle.input}
            autoCorrect={false}
            value={data.title}
            returnKeyType='next'
          />
        </View>
        <View style={createStyle.addressContainer}>
          <View style={[createStyle.addressIntputContainer, {marginRight: 10}]}>
            <TextInput
              onChangeText={ (v) => updateCreateState({city_town: v}) }
              placeholder="Shahar/Tuman"
              placeholderTextColor='darkgrey'
              underlineColorAndroid="transparent"
              style={createStyle.input}
              autoCorrect={false}
              value={data.city_town}
              returnKeyType='next'
            />
          </View>
          <View style={createStyle.addressIntputContainer}>
            <TextInput
              onChangeText={ (v) => updateCreateState({state: v}) }
              placeholder="Viloyat"
              placeholderTextColor='darkgrey'
              underlineColorAndroid="transparent"
              style={createStyle.input}
              autoCorrect={false}
              value={data.state}
              returnKeyType='next'
            />
          </View>
        </View>
        <View style={createStyle.conditionContainer}>
          <Text style={createStyle.conditionText}>Holati:</Text>
          <View style={createStyle.conditionListContainer}>
            <ConditionButton 
              condition='Qoniqarsiz'
              selected={data.condition == 'dissatisfactory' ? true : null}
              action={ () => updateCreateState({condition:'dissatisfactory'}) }
            />
            <ConditionButton 
              condition='Qoniqarli' 
              selected={data.condition == 'satisfactory' ? true : null}
              action={ () => updateCreateState({condition:'satisfactory'}) }
            />
            <ConditionButton 
              condition='Yaxshi' 
              selected={data.condition == 'good' ? true : null}
              action={ () => updateCreateState({condition:'good'}) }
            />
            <ConditionButton 
              condition="A'lo/Yangi" 
              selected={data.condition == 'great' ? true : null}
              action={ () => updateCreateState({condition:'great'}) }
            />
          </View>
        </View>
      </View>
      <View style={createStyle.actionContainer}>
        <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => handleScrollView(0) }> 
          <Feather name='chevron-left' color='white' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => handleScrollView(2) }> 
          <Feather name='chevron-right' color='white' size={30}/>
        </TouchableOpacity> 
      </View>
      <Modal isVisible={isVisible} style={createStyle.categoryModalContainer}>
        <View style={createStyle.categoryListContainer}>
          <View style={createStyle.modalHeader}>
            <Text style={createStyle.categoryTitleText}>Kategoriyalar</Text>
          </View>
          <ScrollView>
            {
              props.categories.map( (category) => (
                <TouchableOpacity style={createStyle.categoryListItem} key={category.id} 
                  onPress={ () => this.handleCategorySelect(category.value)}>
                  <Text style={createStyle.categoryNameText}>{category.value}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}
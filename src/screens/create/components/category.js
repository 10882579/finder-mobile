import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { createStyle } from '@src/static/index';

export default (props) => {

  const { show, categories, updateCreateState, toggleCategoryModal } = props;

  handleCategorySelect = (value) => {
    updateCreateState({category: value});
    toggleCategoryModal();
  }
  
  if(show){
    return (
      <View style={createStyle.categoryModalContainer}>
        <View style={createStyle.categoryListContainer}>
          <Text style={createStyle.categoryTitleText}>Kategoriyalar</Text>
          <ScrollView>
            {
              categories.map( (category) => (
                <TouchableOpacity key={category.id} 
                  style={createStyle.categoryListItem} 
                  onPress={ () => handleCategorySelect(category.name) }
                >
                  <Text style={createStyle.categoryNameText}>{category.value}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
  else{
    return null
  }
}
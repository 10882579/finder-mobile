import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Modal                from 'react-native-modal';
import { createStyle }      from '@src/static/index'
import { Entypo, Ionicons } from '@expo/vector-icons';

export default class App extends Component {

  state = {
    showCategories: false,
    categories: [
      {id: 1, value: 'Avtomobil'},
      {id: 2, value: "Ko'chmas mulk"},
      {id: 3, value: 'Uy jihozlari'},
      {id: 4, value: 'Telefonlar'},
      {id: 5, value: 'Kompyuterlar'},
      {id: 7, value: 'Kiyim-kechak'},
    ]
  }

  selectCategory = (i) => {
    this.props.updateCreateDataState({category: i})
    this.toggleCategories()
  }

  toggleCategories = () => {
    this.setState( (prevState) => ({
      ...prevState,
      showCategories: !prevState.showCategories
    }) )
  }

  render () {
    const { data } = this.props;
    const { categories, showCategories } = this.state
    return (
      <View style={createStyle.descriptionBlock}>
        <View style={createStyle.descriptionBlockLeft}>
          <Entypo name='list' style={createStyle.descriptionBlockIcon} />
        </View>
        <View style={createStyle.descriptionNameContainer}>
          <Text style={createStyle.descriptionName}>Kategoriya</Text>
        </View>
        <TouchableOpacity style={createStyle.descriptionValueContainer}
          activeOpacity={0.9} onPress={ this.toggleCategories }>
          <View style={createStyle.descriptionValueContainerItem}>
            <Text style={createStyle.descriptionValue}>{data.category}</Text>
          </View>
          <View style={createStyle.descriptionValueContainerItem}>
            <Ionicons name='ios-arrow-down' style={createStyle.descriptionArrowDownIcon}/>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={showCategories}
          avoidKeyboard
          backdropOpacity={0.5}
        >
          <View style={createStyle.categoryListContainer}>
            <ScrollView scrollEventThrottle={1} style={createStyle.categoryList}>
              {
                categories.map( (item, i) => (
                  <TouchableOpacity
                    activeOpacity={1} key={item.id}
                    style={createStyle.categoryListItem}
                    onPress={ () => this.selectCategory(item.value) }
                  >
                    <Text style={createStyle.categoryText}>{item.value}</Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
            <TouchableOpacity
              activeOpacity={1}
              style={[createStyle.categoryListItem, createStyle.cancelBtn]}
              onPress={ this.toggleCategories }
            >
              <Text style={createStyle.categoryText}>Bekor qilmoq</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

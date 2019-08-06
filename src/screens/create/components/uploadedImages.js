import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { defaultStyle, createStyle } from '@src/static/index';

export default class App extends React.Component{

  state = {
    selected: null,
  }

  deleteImage = (url) => {
    this.props.deleteImage(url);
    this.setState({selected: null});
  }

  render(){

    const { data } = this.props;
    const { selected } = this.state;

    return (
      <View style={defaultStyle.flex}>
        <View style={createStyle.largeImageContainer}>
          {
            selected ? (
              <View style={defaultStyle.image}>
                <Image source={{uri: selected}} style={defaultStyle.image}/>
                <TouchableOpacity
                  style={createStyle.deleteImageButton}
                  onPress={ () => this.deleteImage(selected) }
                >
                  <FontAwesome name='trash-o' color='white' size={24}/>
                </TouchableOpacity>
              </View>
            ) : data.selectedImages[0] ? (
              <View style={defaultStyle.image}>
                <Image source={{uri: data.selectedImages[0].uri}} style={defaultStyle.image}/>
                <TouchableOpacity
                  style={createStyle.deleteImageButton}
                  onPress={ () => this.deleteImage(data.selectedImages[0].uri) }
                >
                  <FontAwesome name='trash-o' color='white' size={24}/>
                </TouchableOpacity>
              </View>
            ) : (
              <FontAwesome name='image' size={30} color='white'/>
            )
          }
        </View>
        <View style={createStyle.smallImageContainer}>
          <View style={createStyle.smallImage}>
            {
              data.selectedImages[0] ? (
                <TouchableOpacity style={defaultStyle.image} activeOpacity={1} 
                  onPress={ () => this.setState({selected: data.selectedImages[0].uri})}
                >
                  <Image source={{uri: data.selectedImages[0].uri}} style={defaultStyle.image}/>
                </TouchableOpacity>
              ) : (
                <AntDesign name='plus' size={30} color='darkgrey'/>
              )
            }
          </View>
          <View style={createStyle.smallImage}>
            {
              data.selectedImages[1] ? (
                <TouchableOpacity style={defaultStyle.image} activeOpacity={1} 
                  onPress={ () => this.setState({selected: data.selectedImages[1].uri})}
                >
                  <Image source={{uri: data.selectedImages[1].uri}} style={defaultStyle.image}/>
                </TouchableOpacity>
              ) : (
                <AntDesign name='plus' size={30} color='darkgrey'/>
              )
            }
          </View>
          <View style={createStyle.smallImage}>
            {
              data.selectedImages[2] ? (
                <TouchableOpacity style={defaultStyle.image} activeOpacity={1} 
                  onPress={ () => this.setState({selected: data.selectedImages[2].uri})}
                >
                  <Image source={{uri: data.selectedImages[2].uri}} style={defaultStyle.image}/>
                </TouchableOpacity>
              ) : (
                <AntDesign name='plus' size={30} color='darkgrey'/>
              )
            }
          </View>
          <View style={createStyle.smallImage}>
            {
              data.selectedImages[3] ? (
                <TouchableOpacity style={defaultStyle.image} activeOpacity={1} 
                  onPress={ () => this.setState({selected: data.selectedImages[3].uri})}
                >
                  <Image source={{uri: data.selectedImages[3].uri}} style={defaultStyle.image}/>
                </TouchableOpacity>
              ) : (
                <AntDesign name='plus' size={30} color='darkgrey'/>
              )
            }
          </View>
        </View>
      </View>
    )
  }
}
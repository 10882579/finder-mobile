import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { ImagePicker } from 'expo';
import { Ionicons, Feather } from '@expo/vector-icons';
import { defaultStyle, createStyle } from '@src/static/index';

export default class App extends Component {

  state = {
    selected: null
  }

  selectImage = async () => {
    const { data, uploadImage } = this.props;
    if (data.selectedImages.length !== 4){
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });
      if (!result.cancelled){
        await uploadImage(result)
      }
    }
  }

  deleteImage = () => {
    const { data, deleteImage } = this.props;
    const i = this.state.selected ?
              this.state.selected :
              data.selectedImages[data.selectedImages.length-1].uri
    deleteImage(i)
    this.setState({selected: null})
  }

  render(){

    const { selectedImages } = this.props.data;

    return (
      <View style={createStyle.imageUploadContainer}>
        <View style={createStyle.singleImageContainer}>
          {
            selectedImages.length > 0 ? (
              <View style={createStyle.singleImage}>
                <Image
                  source={{uri: this.state.selected ?
                                this.state.selected :
                                selectedImages[selectedImages.length-1].uri
                          }}
                  style={defaultStyle.image}
                />
                <TouchableOpacity
                  style={createStyle.deleteImageBtn}
                  onPress={ this.deleteImage }
                >
                  <Feather name='trash-2' color='white' size={24}/>
                </TouchableOpacity>
              </View>
            ) : (
              <Ionicons name='md-images' style={createStyle.imageUploadContainerIcon} />
            )
          }
        </View>
        <View style={createStyle.uploadedImageContainer}>
          {
            selectedImages.map( (image, i) => (
              <TouchableOpacity key={i} style={createStyle.imageContainer} onPress={ () => this.setState({selected: image.uri})}>
                <Image source={{uri: image.uri}} style={defaultStyle.image}/>
              </TouchableOpacity>
            ))
          }
        </View>
        <TouchableOpacity style={createStyle.imageUploadBtn} onPress={ this.selectImage }>
          <Ionicons name='md-add' style={createStyle.imageUploadIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}

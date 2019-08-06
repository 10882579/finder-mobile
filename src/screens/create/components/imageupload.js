import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Permissions, ImagePicker } from 'expo';
import { Feather } from '@expo/vector-icons';

import UploadedImages from './uploadedimages';
import { defaultStyle, createStyle } from '@src/static/index';

export default class App extends React.Component{

  componentWillMount = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  selectImage = async () => {
    const { uploadImage } = this.props;
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Images',
      aspect: [1, 1],
    });
    if (!result.cancelled){
      await uploadImage(result);
    }
  }

  handleScroll = (t) => {
    const { data, handleAutoScroll } = this.props;
    data.selectedImages.forEach( (v) => {
      if(v !== undefined){
        handleAutoScroll(t)
      }
    })
  }

  render(){
    return (
      <View style={createStyle.division}>
        <UploadedImages {...this.props}/>
        <View style={createStyle.actionContainer}>
          <TouchableOpacity style={[createStyle.actionButton, defaultStyle.shadow]} onPress={ this.selectImage }>
            <Text style={createStyle.actionButtonText}>Tanlamoq</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[createStyle.nextButton, defaultStyle.shadow]} onPress={ () => this.handleScroll(1) }> 
            <Feather name='chevron-right' color='white' size={30}/>
          </TouchableOpacity> 
        </View>
      </View>
    )
  }
}
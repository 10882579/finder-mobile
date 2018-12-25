import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { ImagePicker } from 'expo';
import { Ionicons, Feather }        from '@expo/vector-icons';
import { defaultStyle, createStyle }  from '@src/static/index';


export default (props) => {

  state = {
    selected: null
  }

  const { data } = props;

  selectImage = async () => {
    if (data.selectedImages.length !== 4){
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });
      if (!result.cancelled){
        await props.uploadImage(result)
      }
    }
  }

  deleteImage = () => {
    const i = this.state.selected ?
              this.state.selected :
              data.selectedImages[data.selectedImages.length-1].uri
    props.deleteImage(i)
    this.state = {
      selected: null
    }
  }

  return (
    <View style={createStyle.imageUploadContainer}>
      <View style={createStyle.uploadedImageContainer}>
        {
          data.selectedImages.length > 0 ? (
            <View style={{width: '100%', height: '100%'}}>
              <TouchableOpacity
                style={createStyle.deleteImageBtn}
                onPress={ this.deleteImage }
              >
                <Feather name='trash-2' color='white' size={24}/>
              </TouchableOpacity>
              <Image
                source={{uri: this.state.selected ?
                              this.state.selected :
                              data.selectedImages[data.selectedImages.length-1].uri
                        }}
                style={defaultStyle.image}
              />
            </View>
          ) : (
            <Ionicons name='md-images' style={createStyle.imageUploadContainerIcon} />
          )
        }
      </View>
      <TouchableOpacity style={createStyle.imageUploadBtn} onPress={ this.selectImage }>
        <Ionicons name='md-add' style={createStyle.imageUploadIcon} />
      </TouchableOpacity>
    </View>
  )
}

// const smth = (props) => {
//
//   const { data } = props.post;
//
//   return (
//     <View style={postStyle.imageListContainer}>
//       <View style={postStyle.imageListContainerItem}>
//         {
//           data.selectedPhotos.length > 0 ? (
//             <TouchableOpacity style={{height: '100%', width: '100%'}} activeOpacity={1} onPress={ () => this.setState({...this.state, selected: data.selectedPhotos[data.selectedPhotos.length-1].uri})}>
//               <Image source={{uri: data.selectedPhotos[data.selectedPhotos.length-1].uri}} style={defaultStyle.image}/>
//             </TouchableOpacity>
//           ) : (
//             <Ionicons name='md-images' style={postStyle.imageListItemIcon} />
//           )
//         }
//       </View>
//       <View style={postStyle.imageListContainerItem}>
//         {
//           data.selectedPhotos.length > 1 ? (
//             <TouchableOpacity style={{height: '100%', width: '100%'}} activeOpacity={1} onPress={ () => this.setState({...this.state, selected: data.selectedPhotos[data.selectedPhotos.length-2].uri})}>
//               <Image source={{uri: data.selectedPhotos[data.selectedPhotos.length-2].uri}} style={defaultStyle.image}/>
//             </TouchableOpacity>
//           ) : (
//             <Ionicons name='md-images' style={postStyle.imageListItemIcon} />
//           )
//         }
//       </View>
//       <View style={postStyle.imageListContainerItem}>
//         {
//           data.selectedPhotos.length > 2 ? (
//             <TouchableOpacity style={{height: '100%', width: '100%'}} activeOpacity={1} onPress={ () => this.setState({...this.state, selected: data.selectedPhotos[data.selectedPhotos.length-3].uri})}>
//               <Image source={{uri: data.selectedPhotos[data.selectedPhotos.length-3].uri}} style={defaultStyle.image}/>
//             </TouchableOpacity>
//           ) : (
//             <Ionicons name='md-images' style={postStyle.imageListItemIcon} />
//           )
//         }
//       </View>
//       <View style={postStyle.imageListContainerItem}>
//         {
//           data.selectedPhotos.length > 3 ? (
//             <TouchableOpacity style={{height: '100%', width: '100%'}} activeOpacity={1} onPress={ () => this.setState({...this.state, selected: data.selectedPhotos[data.selectedPhotos.length-4].uri})}>
//               <Image source={{uri: data.selectedPhotos[data.selectedPhotos.length-4].uri}} style={defaultStyle.image}/>
//             </TouchableOpacity>
//           ) : (
//             <Ionicons name='md-images' style={postStyle.imageListItemIcon} />
//           )
//         }
//       </View>
//     </View>
//   )
// }

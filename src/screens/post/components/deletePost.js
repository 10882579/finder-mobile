import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Modal  from 'react-native-modal';
import { postStyle } from '@src/static/index';

const Button = (props) => (
  <TouchableOpacity
    style={[postStyle.confirmationContainer, props.color ? {backgroundColor: '#007acc'} : null]}
    activeOpacity={0.8}
    onPress={ props.action }
  >
    <Text style={postStyle.confirmationText}>{props.label}</Text>
  </TouchableOpacity>
)

export default (props) => {

  const { post, toggleModal, showModal, setPostSold, deletePost } = props;

  return (
    <Modal
      isVisible={showModal}
      avoidKeyboard
      backdropOpacity={0.5}
      style={postStyle.modalContainer}

    >
      <View style={postStyle.modalInnerContainer}>
        <View style={postStyle.modalBottomContainer}>
          {
            !post.sold ? (
              <Button color label='Mahsulot sotildi' action={ setPostSold }/>
            ) : null
          }
          <Button color label="O'chirmoq"     action={ deletePost }/>
          <Button       label="Bekor qilmoq"  action={ () => toggleModal(false) }/>
        </View>
      </View>
    </Modal>
  )
}

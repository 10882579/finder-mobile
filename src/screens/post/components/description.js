import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { postStyle, defaultStyle } from '@src/static/index';

export default (props) => {

  const { post, account } = props;

  return (

    <View>
      <View style={[defaultStyle.shadow, {backgroundColor: 'white'}]}>
        <View style={postStyle.itemDescriptionContainer}>
          <View style={[postStyle.descriptionBlock]}>
            <View style={postStyle.blockIconContainer}>
              <Entypo name='list' style={postStyle.blockIcon} />
            </View>
            <View style={postStyle.blockContextContainer}>
              <Text style={postStyle.descriptionName}>Kategoriya</Text>
              <Text style={postStyle.descriptionValue} numberOfLines={1}>{post.category}</Text>
            </View>
          </View>
          <View style={postStyle.descriptionBlock}>
            <View style={postStyle.blockIconContainer}>
              <MaterialCommunityIcons name='chart-bubble' style={postStyle.blockIcon} />
            </View>
            <View style={postStyle.blockContextContainer}>
              <Text style={postStyle.descriptionName}>Holati</Text>
              <Text style={postStyle.descriptionValue} numberOfLines={1}>{post.condition}</Text>
            </View>
          </View>
        </View>
        {
          post.negotiable ? (
            <View style={postStyle.negotiationContainer}>
              <View style={postStyle.negotiationInnerContainer}>
                <FontAwesome name='handshake-o' style={[postStyle.blockIcon, postStyle.negotiationContainerIcon]} />
                <Text style={postStyle.descriptionValue}>Kelishish mumkin</Text>
              </View>
            </View>
          ) : null
        }
      </View>
      <View style={[postStyle.descriptionDetail, defaultStyle.shadow]}>
        <Text style={postStyle.descriptionDetailValue}>{post.description}</Text>
      </View>
      {
        post.account.account_id === account.account_id && post.posted == false ? (
          <View style={postStyle.warningContainer}>
            <View style={postStyle.warningIconContainer}>
              <Ionicons name='md-time' size={30} color='black'/>
            </View>
            <View style={postStyle.warningTextContainer}>
              <Text numberOfLine={2} style={postStyle.warningText}>
                Bergan e'loningiz qabul qilindi. Chop etish uchun ko'rib chiqilmoqda...
              </Text>
            </View>
          </View>
        ) : null
      }
    </View>
  )
}

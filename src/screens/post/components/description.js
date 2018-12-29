import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { postStyle } from '@src/static/index';

export default (props) => {

  const { post, account } = props;

  return (

    <View>
      <View style={postStyle.itemDescriptionContainer}>
        <View style={[postStyle.descriptionBlock]}>
          <View style={postStyle.descriptionBlockLeft}>
            <Entypo name='list' style={postStyle.descriptionBlockIcon} />
          </View>
          <View style={postStyle.descriptionBlockRight}>
            <Text style={postStyle.descriptionName}>Kategoriya</Text>
            <Text style={postStyle.descriptionValue} numberOfLines={1}>{post.category}</Text>
          </View>
        </View>
        <View style={postStyle.descriptionBlock}>
          <View style={postStyle.descriptionBlockLeft}>
            <MaterialCommunityIcons name='chart-bubble' style={postStyle.descriptionBlockIcon} />
          </View>
          <View style={postStyle.descriptionBlockRight}>
            <Text style={postStyle.descriptionName}>Holati</Text>
            <Text style={postStyle.descriptionValue} numberOfLines={1}>{post.condition}</Text>
          </View>
        </View>
      </View>
      {
        post.negotiable ? (
          <View style={postStyle.negotiationContainer}>
            <View style={postStyle.negotiationInnerContainer}>
              <FontAwesome name='handshake-o' style={[postStyle.descriptionBlockIcon, postStyle.negotiationContainerIcon]} />
              <Text style={postStyle.descriptionValue}>Kelishish mumkin</Text>
            </View>
          </View>
        ) : null
      }
      <View style={postStyle.descriptionDetail}>
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

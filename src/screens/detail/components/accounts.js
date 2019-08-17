import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { defaultStyle, detailStyle } from '@src/static/index';
import { AntDesign } from '@expo/vector-icons';

import Rating from './rating';

export default (props) => {

  const { navigation, data, followThisAccount } = props;
  const { params } = navigation.state;

  const navigateToAccount = (id) => {
    navigation.navigate("User", {
      id: id, 
      from: {
        screen: 'Detail',
        which: params.screen
      }
    });
  }

  return (
    <ScrollView
      scrollEventThrottle={16}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={detailStyle.followScrollviewContainer}>
        {
          data.map( (item) => (
            <TouchableOpacity
              key={item.account_id}
              activeOpacity={0.9}
              style={[detailStyle.followingUserContainer, defaultStyle.shadow]}
              onPress={ () => navigateToAccount(item.account_id) }
            >
              <View style={detailStyle.followingUserImage}>
                <Image source={{uri: item.image}} style={defaultStyle.image}/>
              </View>
              <View style={detailStyle.followingUsernameContainer}>
                <View style={detailStyle.usernameContainer}>
                  <Text style={detailStyle.followingUserName} numberOfLines={1}>
                    { item.first_name } { item.last_name }
                  </Text>
                  <TouchableOpacity style={detailStyle.likeButtonContainer} onPress={ () => followThisAccount(item.account_id) }>
                    <AntDesign name={item.following ? 'like1' : 'like2'} style={detailStyle.likeIcon}/>
                  </TouchableOpacity>
                </View>
                <Rating rating={item.rating}/>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { defaultStyle, detailStyle } from '@src/static/index';

export default (props) => {

  const { navigation, data } = props;
  const { params } = navigation.state;

  const navigateToPost = (id) => {
    navigation.navigate("Post", {
      id: id,
      from: {
        screen: 'Detail',
        which: params.screen
      }
    });
  }

  return (
    <ScrollView
      bounces={false}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View style={detailStyle.scrollviewContainer}>
        {
          data.map( (item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={[detailStyle.listItem, defaultStyle.shadow]}
              onPress={ () => navigateToPost(item.id) }
            >
              <View style={[defaultStyle.flex]}>
                <Image source={{uri: item.images[0].uri}} style={defaultStyle.image}/>
              </View>
              <View style={detailStyle.itemTitleContainer}>
                <Text style={detailStyle.itemTitle} numberOfLines={2}>{item.title}</Text>
              </View>
              <View style={detailStyle.itemPriceContainer}>
                <Text style={detailStyle.itemPrice} numberOfLines={1}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}

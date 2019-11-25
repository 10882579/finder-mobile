import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { defaultStyle, accountStyle } from '@src/static/index';
import { EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';

import Header from "./header";
import Rating from './rating';

import { updateAccount } from '@redux/actions/account';

class App extends Component {

  uploadImage = async () => {

    const { updateAccountImage } = this.props;

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Images',
      aspect: [1, 1],
    });
    if (!result.cancelled){
      updateAccountImage({image: result.uri})
    }
  }

  navigateToDetail = (screen) => {
    const { navigation, account } = this.props;
    navigation.navigate("Detail", {
      screen: screen,
      rating: account.rating,
      from: {
        screen: 'Account'
      }
    });
  }

  render() {

    const { account } = this.props;

    return (
      <View style={defaultStyle.container}>
        <View style={[accountStyle.mainContainer, defaultStyle.shadow]}>
          <View style={accountStyle.topContainer}>
            <Header {...this.props}/>
          </View>
          <View style={defaultStyle.flex}>
            <View style={accountStyle.nameContainer}>
              <Text style={accountStyle.name} numberOfLines={1}>
                {account.first_name} {account.last_name}
              </Text>
            </View>
            <Rating rating={account.rating} />
          </View>
          <View style={accountStyle.accountContainer}>
            <View style={accountStyle.accountImageContainer}>
              <View style={accountStyle.accountImage}>
                <Image source={{uri: account.image}} style={defaultStyle.image}/>
                <TouchableOpacity
                  style={accountStyle.accountImageUploadButton}
                  activeOpacity={0.9} onPress={ this.uploadImage }
                >
                  <EvilIcons name='camera' color='white' size={20}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={accountStyle.navigationContainer}>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("myposts") }>
            <AntDesign name='bars' size={28}/>
            <Text style={accountStyle.navigationText}>E'lonlarim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("savedposts") }>
            <Feather name='bookmark' size={28}/>
            <Text style={accountStyle.navigationText}>Belgilangan e'lonlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("following") }>
            <AntDesign name='like2' size={28}/>
            <Text style={accountStyle.navigationText}>Kuzatilayotkanlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accountStyle.navigationList} onPress={ () => this.navigateToDetail("rating") }>
            <AntDesign name='staro' size={28}/>
            <Text style={accountStyle.navigationText}>Reyting</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountImage: (obj) => {
      dispatch(updateAccount(obj))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

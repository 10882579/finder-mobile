import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { detailStyle } from '@src/static/index';

export default class App extends Component {

  state = {
    review: '',
    rating: 0,
  }

  toggleRating = (rating) => {
    this.setState( (prev) => {
      return {...prev, rating: rating}
    })
  }

  handleAccountReview = () => {
    const { navigation, postAccountReview } = this.props;
    const { params } = navigation.state;
    postAccountReview(params.id, this.state, () => {
      this.props.toggleForm();
      this.setState({review: '', rating: 0})
    })
  }

  render() {
    const { rating, review } = this.state;
    const { showForm, toggleForm } = this.props;

    if(showForm) {
      return (
        <View style={[detailStyle.reviewFormContainer]}>
          <View style={detailStyle.formRatingContainer}>
            <TouchableOpacity onPress={ () => this.toggleRating(1) }>
              <FontAwesome name='star' style={[
                detailStyle.formStar, 
                rating >= 1 ? detailStyle.selectedRating : null
              ]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.toggleRating(2) }>
              <FontAwesome name='star' style={[
                detailStyle.formStar, 
                rating >= 2 ? detailStyle.selectedRating : null
              ]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.toggleRating(3) }>
              <FontAwesome name='star' style={[
                detailStyle.formStar, 
                rating >= 3 ? detailStyle.selectedRating : null
              ]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.toggleRating(4) }>
              <FontAwesome name='star' style={[
                detailStyle.formStar, 
                rating >= 4 ? detailStyle.selectedRating : null
              ]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.toggleRating(5) }>
              <FontAwesome name='star' style={[
                detailStyle.formStar, 
                rating == 5 ? detailStyle.selectedRating : null
              ]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ toggleForm } style={detailStyle.formHideButton}>
              <AntDesign name="close" size={24}/>
            </TouchableOpacity>
          </View>
          <TextInput
            value={review}
            multiline={true}
            maxLength={250}
            autoCorrect={false}
            style={detailStyle.reviewInput}
            underlineColorAndroid='transparent'
            onFocus={ this.handleInputFocus }
            onChangeText={ (v) => this.setState({...this.state, review: v}) }
          />
          <TouchableOpacity
            activeOpacity={review.length > 10 && rating > 0 ? 0.5 : 1}
            onPress={ this.handleAccountReview }
            style={[
              detailStyle.formSubmitButton, 
              review.length > 10 && rating > 0 ? detailStyle.activeFormButton : null
            ]}>
            <Text style={detailStyle.formButtonText}>Joylamoq</Text>
          </TouchableOpacity>
        </View>
      ) 
    }
    else return null
  }
}

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Permissions } from 'expo';
import { defaultStyle, createStyle } from '@src/static/index';
import { handleGoBack } from '@redux/actions/handleGoBack';
import { publishPost, saveEditedPost } from '@redux/actions/create';
import { KeyboardAwareScrollView as ScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, UploadedImages, ImmediateInfo, Description } from './components/index';

class App extends Component {

  componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.props.updateCreateState({permissionsCameraRollGranted: status === 'granted'})
  }

  scrollToInput = (event) => {
    this.scrollView.props.scrollToFocusedInput(event.nativeEvent.target)
  }

  render() {
    return (
        <View style={defaultStyle.flex}>
          <ScrollView style={defaultStyle.flex}
            bounces={false}
            innerRef={ref => this.scrollView = ref}
            scrollEventThrottle={1}
          >
            <View style={createStyle.stepContainer}>
              <UploadedImages {...this.props}/>
              <ImmediateInfo {...this.props} scrollToInput={ this.scrollToInput }/>
            </View>
            <Description {...this.props} scrollToInput={ this.scrollToInput }/>
          </ScrollView>
          <Header {...this.props}/>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    data: state.create.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCreateState: (obj) => {
      dispatch({
        type: "UPDATE_CREATE_STATE",
        payload: obj
      })
    },
    uploadImage: (photo) => {
      dispatch({
        type: 'UPLOAD_IMAGE',
        payload: photo,
      })
    },
    deleteImage: (i) => {
      dispatch({
        type: 'DELETE_UPLOADED_IMAGE',
        payload: i
      })
    },
    updateCreateDataState: (value) => {
      dispatch({
        type: 'UPDATE_CREATE_DATA_STATE',
        payload: value
      })
    },
    eraseCreateDataState: () => {
      dispatch({
        type: 'ERASE_CREATE_DATA_STATE',
      })
    },
    updateNavState: (obj) => {
      dispatch({
        type: 'UPDATE_NAV_STATE',
        payload: obj
      })
    },
    publishPost: (nav) => {
      dispatch(publishPost(nav))
    },
    saveEditedPost: (nav, id) => {
      dispatch(saveEditedPost(nav, id))
    },
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

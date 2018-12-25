import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker, Permissions } from 'expo';
import { defaultStyle, createStyle } from '@src/static/index';
import { handleGoBack } from '@redux/actions/handleGoBack';

import { publishPost } from '@src/redux/actions/create';
import { Header, UploadedImages, ImmediateInfo, Description } from './components/index';

class App extends Component {

  componentDidMount = () => {

  }

  componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.props.updateCreateState({permissionsCameraRollGranted: status === 'granted'})
  }

  render() {
    return (
        <View style={defaultStyle.flex}>
          <Header {...this.props}/>
          <ScrollView style={defaultStyle.flex}
            ref={ref => this.scrollView = ref}
            scrollEventThrottle={1}
          >
            <View style={createStyle.stepContainer}>
              <UploadedImages {...this.props}/>
              <ImmediateInfo {...this.props}/>
            </View>
            <Description {...this.props}/>
          </ScrollView>
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
    // updateNavigationState: (obj) => {
    //   dispatch({
    //     type: 'UPDATE_NAVIGATION_STATE',
    //     payload: obj
    //   })
    // },
    publishPost: (nav) => {
      dispatch(publishPost(nav))
    },
    // saveEditedPostAsync: (nav, id) => {
    //   dispatch(saveEditedPostAsync(nav, id))
    // },
    handleGoBack: (nav) => {
      dispatch(handleGoBack(nav))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import { AsyncStorage } from 'react-native'
import { fetchAllPosts } from './home';
import axios from 'axios';

const publishPost = (nav) => {
  return (dispatch, getState) => {
    const { create, account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/post/create/`
    ) : (
      `http://localhost:8000/post/create/`
    )
    const formData = new FormData()

    for (const key in create.data){
      if (key != 'selectedImages'){
        formData.append(key, create.data[key])
      }
      else{
        for (var i = 0; i < create.data.selectedImages.length; i++) {
          formData.append('image', {
            uri: create.data.selectedImages[i].uri,
            type: 'image/jpg',
            name: 'image.jpg',
          })
        }
      }
    }

    if (account.accountFetched && account.token){
      axios({
        method: 'POST',
        url: url,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'X-Auth-Token': account.token
        },
        data: formData,
        onUploadProgress: (progressEvent) => {
          dispatch({
            type: 'UPDATE_CREATE_STATE',
            payload: {progress: Math.round(progressEvent.loaded / progressEvent.total * 100)}
          })
        }
      })
      .then((res) => {
        dispatch({
          type: 'ERASE_CREATE_DATA_STATE'
        })
        dispatch(fetchAllPosts())
      })
      .catch( (err) => {

      })
      nav.navigate('Home')
    }
  }
}

export {
  publishPost,
}

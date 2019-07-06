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

const saveEditedPost = (nav, id) => {
  return (dispatch, getState) => {
    const { create, account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/post/${id}/edit/`
    ) : (
      `http://localhost:8000/post/${id}/edit/`
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
          'X-auth-token': account.token
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
        dispatch({type: 'ERASE_CREATE_DATA_STATE'})
        // dispatch(fetchAllPostsAsync(navigation))
      })
      .catch( (err) => {

      })
      nav.navigate('Home')
    }
  }
}

const fetchUserPosts = (id, page, callback) => {
  return (dispatch, getState) => {
    const { mode, account } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${id}/posts/page=${page}`
    ) : (
      `http://localhost:8000/account/${id}/posts/page=${page}`
    )
    axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
      url: url,
    })
    .then(({data}) => {
      callback(data);
    })
    .catch((err) => {

    })
  }
}

const fetchUserSavedPosts = (page, callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/account/posts/page=${page}`
      ) : (
        `http://localhost:8000/account/posts/page=${page}`
      )
      axios({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'X-Auth-Token': account.token
        },
        url: url,
      })
      .then( ({ data }) => {
        callback(data);
      })
      .catch((err) => {

      })
    }
  }
}

export {
  publishPost,
  saveEditedPost,
  fetchUserPosts,
  fetchUserSavedPosts,
}

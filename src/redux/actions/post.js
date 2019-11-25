import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig.SERVER;

const publishPost = () => {
  return (dispatch, getState) => {
    const { create, account } = getState();
    const formData = new FormData()

    for (const key in create){
      if (key != 'selectedImages'){
        formData.append(key, create[key])
      }
      else{
        for (var i = 0; i < create.selectedImages.length; i++) {
          if(create.selectedImages[i] !== undefined){
            formData.append('image', {
              uri: create.selectedImages[i].uri,
              type: 'image/jpg',
              name: 'image.jpg',
            })
          }
        }
      }
    }

    if (account.accountFetched && account.token){
      axios({
        method: 'POST',
        url: `${SERVER}/post/create/`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'X-Auth-Token': account.token
        },
        data: formData,
        onUploadProgress: (progressEvent) => {
          dispatch({
            type: 'PROGRESS_STATUS',
            payload: {
              progress: Math.round(progressEvent.loaded / progressEvent.total * 100),
              title: create.title
            }
          })
        }
      })
      .then( (res) => {
        if(res.status == 200){
          dispatch({type: 'ERASE_CREATE_STATE'});
        }
      })
      .catch( (err) => {

      })
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
    const { account } = getState();
    axios({
      method: 'GET',
      url: `${SERVER}/account/${id}/posts/page=${page}`,
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
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
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'GET',
        url: `${SERVER}/account/posts/page=${page}`,
        headers: {
          'Accept': 'application/json',
          'X-Auth-Token': account.token
        },
      })
      .then( ({ data }) => {
        callback(data);
      })
      .catch((err) => {

      })
    }
  }
}

const savePost = (id) => {
  return (dispatch, getState) => {

    const { account } = getState();
    axios({
      method: 'POST',
      url: `${SERVER}/post/${id}/save/`,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then(({data, status}) => {
      if(status == 200){
        dispatch({type: 'TOGGLE_SAVE_POST'})
      }
    })
    .catch((err) => {

    })    
  }
}

export {
  publishPost,
  saveEditedPost,
  fetchUserPosts,
  fetchUserSavedPosts,
  savePost,
}

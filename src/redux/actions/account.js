import axios from 'axios';

const loginToAccount = (callback) => {
  return (dispatch, getState) => {
    const { mode, login } = getState();
    const url = mode == 'production' ? (
      `https://finder-uz.herokuapp.com/account/login/`
    ) : (
      `http://localhost:8000/account/login/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
      },
      data: login
    })
    .then( ({data, status}) => {
      callback(status, data)
    })
    .catch( ({response}) => {
      if(response.status == 400){
        const status = response.status;
        const errors = response.data;
        callback(status, errors)
      }
    })
  }
}

const fetchAccount = (nav, token) => {
  return (dispatch, getState) => {
    const { mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/`
    ) : (
      `http://localhost:8000/account/`
    )
    if(token !== null){
      axios({
        method: 'POST',
        url: url,
        headers: {
          'Accept': 'application/json',
          'x-auth-token': token
        },
      })
      .then((res) => {
        if(res.status === 200){
          dispatch({
            type: 'UPDATE_ACCOUNT_STATE',
            payload: {...res.data, token: token, accountFetched: true}
          })
          // if(screen.length > 0){
          //   if(screen[screen.length - 1].direction == 'Post'){
          //     nav.navigate('Post', {id: screen[screen.length - 1].id})
          //   }
          //   if(screen[screen.length - 1].direction == 'Account'){
          //     if (res.data.account_id !== screen[screen.length - 1].id){
          //       nav.navigate('Account', {id: screen[screen.length - 1].id})
          //     }
          //   }
          //   else{
          //     nav.navigate(screen[screen.length - 1].direction)
          //   }
          //   dispatch({type: 'POP_LAST_SCREEN'})
          // }
        }
      })
      .catch((err) => {

      })
    }
  }
}

const fetchSpecificAccount = (id, callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${id}/`
    ) : (
      `http://localhost:8000/account/${id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({status, data}) => {
      callback(data)
    })
    .catch((err) => {

    })
  }
}

const fetchFollowingUsers = (page, callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/following/page=${page}`
    ) : (
      `http://localhost:8000/account/following/page=${page}`
    )
    if(account.accountFetched){
      axios({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'X-Auth-Token': account.token
        },
        url: url,
      })
      .then(({data, status}) => {
        callback(data);
      })
      .catch((err) => {

      })
    }
  }
}

const updateAccount = (obj, nav) => {
  return (dispatch, getState) => {
    const { account, mode } = getState()
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/account/update/`
    ) : (
      `http://localhost:8000/account/update/`
    )
    const formData = new FormData()
    for (const key in obj){
      if (key != 'image' && obj[key].length > 0){
        formData.append(key, obj[key])
      }
      else if (key == 'image'){
        formData.append('image', {
          uri: obj.image,
          type: 'image/jpg',
          name: 'image.jpg',
        })
      }
    }
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-auth-token': account.token
      },
      data: formData,
      // onUploadProgress: (progressEvent) => {
      //   dispatch({
      //     type: 'UPDATE_SETTINGS_STATE',
      //     payload: {loading: Math.round(progressEvent.loaded / progressEvent.total * 100)}
      //   })
      // }
    })
    .then((res) => {
      if(res.status === 200){
        dispatch(fetchAccount(nav, account.token))
      }
    })
    .catch((err) => {
      const { status } = err.response;
      // if (status === 403){
      //   alert("Parol noto'g'ri!")
      //   dispatch({
      //     type: 'UPDATE_SETTINGS_STATE',
      //     payload: {loading: 0}
      //   })
      // }
      // else if(status === 401){
      //   AsyncStorage.removeItem('token')
      //   dispatch({
      //     type: 'LOG_OUT'
      //   })
      //   navigation.navigate('Login')
      // }
      // else{
      //   alert("Kiritilgan ma'lumot noto'g'ri!")
      //   dispatch({
      //     type: 'UPDATE_SETTINGS_STATE',
      //     payload: {loading: 0}
      //   })
      // }
    })
  }
}

const followAccount = (id, callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/account/${id}/follow/`
      ) : (
        `http://localhost:8000/account/${id}/follow/`
      )
      axios({
        method: 'POST',
        url: url,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then(({data, status}) => {
        if(status == 200){
          callback()
        }
      })
      .catch((err) => {

      })
    }
  }
}


export {
  loginToAccount,
  fetchAccount,
  fetchSpecificAccount,
  fetchFollowingUsers,
  updateAccount,
  followAccount
}

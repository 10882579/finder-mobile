import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig.SERVER;

const loginToAccount = (callback) => {
  return (dispatch, getState) => {
    const { login } = getState();
    axios({
      method: 'POST',
      url: `${SERVER}/account/login/`,
      headers: {
        'Accept': 'application/json',
      },
      data: login
    })
    .then( ({data, status}) => {
      if(status == 200){
        dispatch({
          type: "UPDATE_ACCOUNT_STATE",
          payload: {...data, accountFetched: true}
        });
        dispatch({type: "ERASE_LOGIN_STATE"});
        callback(status, data);
      }
    })
    .catch( ({response}) => {
      const status = response.status;
      const errors = response.data;
      callback(status, errors)
    })
  }
}

const registerAccount = (callback) => {
  return (dispatch, getState) => {
    const { register } = getState();
    axios({
      method: 'POST',
      url: `${SERVER}/account/register/`,
      headers: {
        'Accept': 'application/json',
      },
      data: register
    })
    .then( ({data, status}) => {
      if(status == 200){
        dispatch({
          type: "UPDATE_ACCOUNT_STATE",
          payload: {...data, accountFetched: true}
        });
        dispatch({type: "ERASE_REGISTER_STATE"});
        callback(status, data);
      }
    })
    .catch( ({response}) => {
      const status = response.status;
      const errors = response.data
      callback(status, errors);
    })
  }
}

const fetchAccount = (token) => {
  return (dispatch, getState) => {
    if(token !== null){
      axios({
        method: 'GET',
        url: `${SERVER}/account/`,
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
        }
      })
      .catch((err) => {

      })
    }
  }
}

const fetchSpecificAccount = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    axios({
      method: 'GET',
      url: `${SERVER}/account/${id}/`,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({status, data}) => {
      if(status == 200){
        callback(data)
      }
    })
    .catch((err) => {

    })
  }
}

const fetchFollowingUsers = (page, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'GET',
        url: `${SERVER}/account/following/page=${page}`,
        headers: {
          'Accept': 'application/json',
          'X-Auth-Token': account.token
        },
      })
      .then(({data, status}) => {
        callback(data);
      })
      .catch((err) => {

      })
    }
  }
}

const updateAccount = (obj) => {
  return (dispatch, getState) => {
    const { account } = getState();
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
      url: `${SERVER}/account/update/`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-auth-token': account.token
      },
      data: formData,
    })
    .then((res) => {
      dispatch({
        type: 'UPDATE_ACCOUNT_STATE',
        payload: obj
      })
    })
    .catch((err) => {
      
    })
  }
}

const followAccount = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/account/${id}/follow/`,
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
  registerAccount,
  fetchAccount,
  fetchSpecificAccount,
  fetchFollowingUsers,
  updateAccount,
  followAccount
}

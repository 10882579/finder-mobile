import axios from 'axios';

const savePost = (obj) => {
  return new Promise( (resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/post/${obj.id}/save/`
    ) : (
      `http://localhost:8000/post/${obj.id}/save/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': obj.token
      },
    })
    .then(({data, status}) => {
      resolve(status)
    })
    .catch((err) => {
      reject(err.response.status)
    })
  })
}

const setPostSold = (obj) => {
  return new Promise( (resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/post/${obj.id}/sold/`
    ) : (
      `http://localhost:8000/post/${obj.id}/sold/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': obj.token
      },
    })
    .then(({data, status}) => {
      resolve(status)
    })
    .catch((err) => {
      reject(err.response.status)
    })
  })
}

const deletePost = (obj) => {
  return new Promise( (resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/post/${obj.id}/delete/`
    ) : (
      `http://localhost:8000/post/${obj.id}/delete/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': obj.token
      },
    })
    .then(({data, status}) => {
      resolve(status)
    })
    .catch((err) => {
      reject(err.response.status)
    })
  })
}

const registerAccount = (obj) => {
  return new Promise( (resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/account/register/`
    ) : (
      `http://localhost:8000/account/register/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
      },
      data: obj.data
    })
    .then( ({data, status}) => {
      if (status == 200){
        resolve(data)
      }
    })
    .catch( ({response}) => {
      if(response.status == 400){
        const status = response.status;
        const errors   = response.data
        reject({status, errors})
      }
    })
  })
}

export {
  registerAccount,
  savePost,
  setPostSold,
  deletePost,
}

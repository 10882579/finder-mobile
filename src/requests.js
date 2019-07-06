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

export {
  savePost,
  setPostSold,
  deletePost,
}

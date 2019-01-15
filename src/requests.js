import axios from 'axios';

const fetchSpecificAccount = (obj) => {
  return new Promise((resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/account/${obj.id}/`
    ) : (
      `http://localhost:8000/account/${obj.id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': obj.token
      },
    })
    .then( ({status, data}) => {
      resolve(data)
    })
    .catch((err) => {
      reject(err.response)
    })
  })
}

const fetchPost = (obj) => {
  return new Promise( (resolve, reject) => {
    const url = obj.mode == 'production' ? (
      `https://finder-uz.herokuapp.com/post/${obj.id}/`
    ) : (
      `http://localhost:8000/post/${obj.id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'x-auth-token': obj.token
      },
    })
    .then(({status, data}) => {
      if(status === 200){
        resolve(data)
      }
    })
    .catch((err) => {
      reject(err.response)
    })
  })
}

export {
  fetchSpecificAccount,
  fetchPost
}

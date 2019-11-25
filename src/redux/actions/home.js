import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig.SERVER;

const fetchPosts = () => {
  return (dispatch, getState) => {
    const { home } = getState();
    axios({
      method: 'GET',
      url: `${SERVER}/post/list/`,
      headers: {
        'Accept': 'application/json',
      },
      params: home.filter
    })
    .then( ({ status, data }) => {
      if(status === 200){
        dispatch({
          type: 'SET_HOME_POSTS_STATE',
          payload: data
        })
      }
    })
    .catch((err) => {

    })
  }
}

const fetchPost = (id, cb) => {
  return (dispatch, getState) => {
    const { account } = getState();
    axios({
      method: 'GET',
      url: `${SERVER}/post/${id}/`,
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
    })
    .then(({status, data}) => {
      if(status === 200){
        cb(data, null);
      }
    })
    .catch((err) => {
      cb(null, err.response);
    })
  }
}


export {
  fetchPosts,
  fetchPost
}

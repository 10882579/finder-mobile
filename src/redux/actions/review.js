import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig.SERVER;

const fetchAccountReviews = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();

    const url = id ? `${SERVER}/review/${id}/list/` 
                   : `${SERVER}/review/list/`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
    })
    .then( ({ data }) => {
      callback(data);
    })
    .catch( (err) => {

    })
  }
}

const postAccountReview = (id, data, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    axios({
      method: 'POST',
      url: `${SERVER}/review/${id}/create/` ,
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': account.token
      },
      data: data,
    })
    .then( ({ status }) => {
      if(status == 200){
        callback()
      }
    })
    .catch( (err) => {
      console.log(err);
      
    })
  }
}

export {
  fetchAccountReviews,
  postAccountReview
}
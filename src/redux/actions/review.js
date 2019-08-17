import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig ? localconfig.SERVER : "https://finder-uz.herokuapp.com";

const fetchAccountReviews = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();

    const url = id ? `${SERVER}/review/${id}/list/` 
                   : `${SERVER}/review/list/`;
    axios({
      method: 'POST',
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

export {
  fetchAccountReviews,
}
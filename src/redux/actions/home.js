import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig ? localconfig.SERVER : "https://finder-uz.herokuapp.com";

const fetchAllPosts = () => {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      url: `${SERVER}/post/list/`,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then( ({ status, data }) => {
      if(status === 200){
        const arr = data;
        const filteredData = [];

        let premium = [];
        let regular = [];

        let premiumDataLength = arr.premium.length;
        let regularDataLength = arr.regular.length;

        while (true){
          if (premiumDataLength !== 0){
            for (var i = 0;;i++) {
              if (premium.length === 3 || premiumDataLength === 0) {
                // console.log('Stopping premium loop');
                break
              }
              if(premium.length < 3 && arr.premium[i] !== undefined){
                premium.push(arr.premium[i])
                delete arr.premium[i]
                premiumDataLength = premiumDataLength - 1
                // console.log('Pushing premium data to premium');

              }
            }
          }

          for (var j = 0;; j++) {
            if(premium.length < 3 && regularDataLength > 0 && arr.regular[j] !== undefined){
              premium.push(arr.regular[j])
              delete arr.regular[j]
              regularDataLength = regularDataLength - 1
              // console.log('Pushing regular data to premium');
            }
            else if(regularDataLength > 0 && arr.regular[j] !== undefined){
                regular.push(arr.regular[j])
                delete arr.regular[j]
                regularDataLength = regularDataLength - 1
                // console.log('Pushing regular data to regular');
            }
            if (regularDataLength === 0 || regular.length === 3){
              // console.log('Stopping regular loop');
              break
            }
          }

          if(premium.length == 3){
            filteredData.push(premium);
            premium = []
            // console.log('Pushing premium data to filteredData');
          }
          if(regular.length == 3){
            filteredData.push(regular);
            regular = []
            // console.log('Pushing regular data to filteredData');
          }
          if (regularDataLength === 0 && premiumDataLength === 0) {
            // console.log('Out of data');
            break
          }
        }

        if(premium.length > 0){
          filteredData.push(premium);
          premium = []
        }
        if(regular.length > 0){
          filteredData.push(regular);
          regular = []
        }

        // console.log('Looping done');
        // console.log('premium', premium);
        // console.log('regular', regular);
        // console.log('Filtered Data', filteredData);
        // console.log('Whole Data', arr);


        dispatch({
          type: 'UPDATE_HOME_ALLPOST_STATE',
          payload: filteredData
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
  fetchAllPosts,
  fetchPost
}

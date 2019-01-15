import axios from 'axios';

const savePost = (nav) => {
  return (dispatch, getState) => {
    const { account, mode, post } = getState();
    const { params } = nav.state;
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/post/${params.id}/save/`
      ) : (
        `http://localhost:8000/post/${params.id}/save/`
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
        status == 200 ? dispatch({
          type: 'UPDATE_POST_STATE',
          payload: {saved: !post.saved}
        }) : null
      })
      .catch((err) => {

      })
    }
    else{
      dispatch({
        type: 'UPDATE_NAV_STATE',
        payload: {direction: 'Post', id: params.id}
      })
      nav.navigate('Account')
    }
  }
}

const setPostSold = (nav) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const { params } = nav.state;
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/post/${params.id}/sold/`
      ) : (
        `http://localhost:8000/post/${params.id}/sold/`
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
        status == 200 ? dispatch({
          type: 'UPDATE_POST_STATE',
          payload: {sold: true}
        }) : null
      })
      .catch((err) => {

      })
    }
    else{
      dispatch({
        type: 'UPDATE_NAV_STATE',
        payload: {direction: 'Post', id: params.id}
      })
      nav.navigate('Account')
    }
  }
}

const deletePost = (nav) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const { params } = nav.state;
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/post/${params.id}/delete/`
      ) : (
        `http://localhost:8000/api/post/${params.id}/delete/`
      )
      axios({
        method: 'POST',
        url: url,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then((res) => {
        dispatch({type: 'ERASE_DETAIL_STATE'})
  
      })
      .catch((err) => {

      })
    }
  }
}

export {
  savePost,
  setPostSold,
  deletePost
}

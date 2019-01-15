import axios from 'axios';

const deletePost = (nav) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const { params } = nav.state;
    if(account.accountFetched){
      const url = mode.server == 'production' ? (
        `https://finder-uz.herokuapp.com/post/${params.id}/delete/`
      ) : (
        `http://localhost:8000/post/${params.id}/delete/`
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
  deletePost
}

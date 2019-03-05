import axios from 'axios';

const fetchConversations = (callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/chat/conversations/`
    ) : (
      `http://localhost:8000/chat/conversations/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({data}) => {
      callback(data, 200)
    })
    .catch( ({response}) => {
      callback(null, 401)
    })
  }
}

const fetchMessages = (id, callback) => {
  return (dispatch, getState) => {
    const { account, mode } = getState();
    const url = mode.server == 'production' ? (
      `https://finder-uz.herokuapp.com/chat/messages/${id}/`
    ) : (
      `http://localhost:8000/chat/messages/${id}/`
    )
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Accept': 'application/json',
        'X-auth-token': account.token
      },
    })
    .then( ({data}) => {
      callback(data, 200)
    })
    .catch( ({response}) => {
      callback(null, 401)
    })
  }
}

export {
  fetchConversations,
  fetchMessages
}

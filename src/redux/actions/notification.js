import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig ? localconfig.SERVER : "https://finder-uz.herokuapp.com";

const fetchConversations = () => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/chat/conversations/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then( ({data, status}) => {
        if(status == 200){
          dispatch({
            type: "SET_CONVERSATION_STATE",
            payload: data
          })
        }
      })
      .catch( ({response}) => {
        
      })
    }
  }
}

const fetchMessages = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/chat/messages/${id}/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then( ({data, status}) => {
        if(status == 200){
          dispatch({
            type: "SET_MESSAGE_STATE",
            payload: data
          })
          callback()
        }
      })
      .catch( ({response}) => {
  
      })
    }
  }
}

export {
  fetchConversations,
  fetchMessages
}

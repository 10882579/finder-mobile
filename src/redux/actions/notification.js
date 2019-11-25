import axios from 'axios';
import localconfig from '@src/localconfig';

const SERVER = localconfig.SERVER;

const fetchConversations = () => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'GET',
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

const fetchNotifications = () => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'GET',
        url: `${SERVER}/notification/list/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then( ({data, status}) => {
        if(status == 200){
          dispatch({
            type: "SET_NOTIFICATION_STATE",
            payload: data
          })
        }
      })
      .catch( ({response}) => {
        
      })
    }
  }
}

const setNotificationRead = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/notification/${id}/read/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then( ({data, status}) => {
        if(status == 200){
          dispatch({
            type: 'SET_NOTIFICATION_READ',
            payload: id
          })
        }
      })
      .catch( ({response}) => {
        
      })
    }
  }
}

const fetchChatRoomName = (id, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/chat/${id}/name/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
      })
      .then( ({data, status}) => {
        if(status == 200){
          callback(data)
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
        method: 'GET',
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

const saveMessage = (obj, callback) => {
  return (dispatch, getState) => {
    const { account } = getState();
    if(account.accountFetched){
      axios({
        method: 'POST',
        url: `${SERVER}/chat/${obj.room}/save-message/`,
        headers: {
          'Accept': 'application/json',
          'X-auth-token': account.token
        },
        data: {
          message: obj.message
        }
      })
      .then( ({status}) => {
        if(status === 200){
          callback()
        }
      })
      .catch( ({response}) => {
  
      })
    }
  }
}

export {
  setNotificationRead,
  fetchNotifications,
  fetchConversations,
  fetchChatRoomName,
  fetchMessages,
  saveMessage
}

const initialState  = {
  notifications: [],
  conversations: [],
  messages: [],
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION_STATE':
      state = {
        ...state, 
        notifications: action.payload
      }
      break;
    case 'SET_CONVERSATION_STATE':
      state = {
        ...state, 
        conversations: action.payload
      }
      break;
    case 'SET_MESSAGE_STATE':
      state = {
        ...state, 
        messages: action.payload
      }
      break;
    case 'ADD_MESSAGE':
      state = {
        ...state, 
        messages: [...state.messages, action.payload]
      }
      break;
    case 'UPDATE_LAST_MESSAGE':
      const new_cons = [];
      state.conversations.forEach((item) => {
        if(item.id == action.id){
          new_cons.push({
            ...item,
            last_message: action.payload
          })
        }
        else{
          new_cons.push(item)
        }
      })
      state = {
        ...state,
        conversations: new_cons
      }
      break;
    case 'ADD_NOTIFICATION':
      state = {
        ...state, 
        notifications: [...state.notifications, action.payload]
      }
      break;
    case 'SET_NOTIFICATION_READ':
      const new_notif = [];
      state.notifications.forEach((item) => {
        if(item.id == action.payload){
          new_notif.push({
            ...item,
            read: true
          })
        }
        else{
          new_notif.push(item)
        }
      })
      state = {
        ...state,
        notifications: new_notif
      }
      break;
    case 'LOG_OUT':
      state = initialState
      break;
  }
  return state
}

export default reducer

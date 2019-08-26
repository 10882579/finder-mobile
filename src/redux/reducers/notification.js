const initialState  = {
  conversations: [],
  messages: [],
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'LOG_OUT':
      state = initialState
      break;
  }
  return state
}

export default reducer

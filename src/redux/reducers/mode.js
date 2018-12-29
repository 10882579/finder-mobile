const initialState  = {
  server: '',
  screen: []
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAV_STATE':
      if(state.screen.length == 3){
        let data = state.screen.splice(0, 1);
        state = {
          ...state,
          screen: [...data, action.payload]
        }
      }
      else{
        state = {
          ...state,
          screen: [...state.screen, action.payload]
        }
      }
      break;
    case 'ERASE_NAVIGATION_STATE':
      state = {
        ...state,
        screen: [...initialState.screen]
      }
      break;
    case 'POP_LAST_SCREEN':
      const data = state.screen;
      data.pop()
      state = {
        ...state,
        screen: [...data]
      }
      break;
    case 'LOG_OUT':
      state = {
        ...initialState
      }
      break;
  }
  return state
}

export default reducer

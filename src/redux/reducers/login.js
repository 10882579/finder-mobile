const initialState  = {
  entry: '',
  password: ''
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break
    case 'ERASE_LOGIN_STATE':
      state = {
        ...initialState
      }
      break
  }
  return state
}

export default reducer

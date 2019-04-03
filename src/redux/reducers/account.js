const initialState  = {
  accountFetched: false,
  token: '',
  first_name: '',
  last_name: '',
  email: '',
  image: '',
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_STATE':
      state = {
        ...state,
        ...action.payload,
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

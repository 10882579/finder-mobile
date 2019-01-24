const initialState  = {
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  password: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break
    case 'ERASE_REGISTER_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break
  }
  return state
}

export default reducer

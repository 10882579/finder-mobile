const initialState  = {
  fetched: false
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POST_STATE':
      state = {
        ...state,
        ...action.payload
      }
      break;
    case 'ERASE_POST_STATE':
      state = {
        ...initialState
      }
      break;
  }
  return state
}
export default reducer

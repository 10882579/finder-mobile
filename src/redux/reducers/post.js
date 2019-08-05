const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST_STATE':
      state = action.payload
      break;
    case 'TOGGLE_SAVE_POST':
      state = {
        ...state,
        saved: !state.saved
      }
      break;
  }
  return state
}

export default reducer

const initialState  = {
  allPosts: [],
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HOME_ALLPOST_STATE':
      state = {
        ...state,
        allPosts: action.payload
      }
      break;
  }
  return state
}

export default reducer

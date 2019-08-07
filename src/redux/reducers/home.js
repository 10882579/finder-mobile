const initialState  = {
  allPosts: [],
  uploadProgress: {
    progress: 0,
    title: ''
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_HOME_ALLPOST_STATE':
      state = {
        ...state,
        allPosts: action.payload
      }
      break;
    case 'PROGRESS_STATUS':
      state = {
        ...state,
        uploadProgress: action.payload
      }
      break;
  }
  return state
}

export default reducer

const initialState  = {
  posts: [],
  uploadProgress: {
    progress: 0,
    title: ''
  },
  filter: {
    search: '',
    category: '',
    condition: '',
    city_town: '',
    state: '',
    gte: '',
    lte: '',
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HOME_POSTS_STATE':
      state = {
        ...state,
        posts: action.payload
      }
      break;
    case 'PROGRESS_STATUS':
      state = {
        ...state,
        uploadProgress: action.payload
      }
      break;
    case 'UPDATE_FILTER':
      state = {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload
        }
      }
      break;
    case 'CLEAR_FILTER':
      state = {
        ...state,
        filter: initialState.filter
      }
      break;
  }
  return state
}

export default reducer

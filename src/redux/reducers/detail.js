const initialState  = {
  posts: [],
  savedPosts: [],
  following: [],
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_POSTS':
      state = {
        ...state,
        posts: [...state.posts, ...action.payload]
      }
      break
    case 'SAVED_POSTS':
      state = {
        ...state,
        savedPosts: [...state.savedPosts, ...action.payload]
      }
      break
    case 'FOLLOWING_USERS':
      state = {
        ...state,
        following: [...state.following, ...action.payload]
      }
      break
    case 'ERASE_DETAIL_STATE':
      state = {
        ...initialState
      }
      break
    case 'LOG_OUT':
      state = {
        ...initialState
      }
      break;
  }
  return state
}

export default reducer

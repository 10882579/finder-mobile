import { fetchPost } from '@redux/actions/home';

const handleGoBack = (nav) => {
  return (dispatch, getState) => {
    const { mode, account } = getState();
    const { screen } = mode;

    if(screen.length > 0){
      if (screen[screen.length - 1].direction == 'Post'){
        dispatch(fetchPost(screen[screen.length - 1].id, (data) => {
          nav.navigate('Post', {...data})
        }))
        dispatch({type: 'ERASE_CREATE_DATA_STATE'})
      }
      else{
        nav.navigate(screen[screen.length - 1].direction, {page: 1})
      }
      dispatch({type: 'POP_LAST_SCREEN'})
    }
    else{
      nav.navigate('Home')
    }
  }
}

export {
  handleGoBack
}

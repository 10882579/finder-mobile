import { fetchPost } from '@src/requests';

const handleGoBack = (nav) => {
  return (dispatch, getState) => {
    const { mode, account } = getState();
    const { screen } = mode;

    if(screen.length > 0){
      if (screen[screen.length - 1].direction == 'Post'){
        fetchPost({
          mode: mode.server,
          token: account.token,
          id: screen[screen.length - 1].id
        })
        .then( (data) => {
          dispatch({type: 'ERASE_CREATE_DATA_STATE'})
          nav.navigate('Post', {...data})
        })
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

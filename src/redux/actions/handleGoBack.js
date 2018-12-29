const handleGoBack = (nav) => {
  return (dispatch, getState) => {
    const { mode } = getState();
    const { screen } = mode;

    if(screen.length > 0){
      if (screen[screen.length - 1].direction == 'Post' || screen[screen.length - 1].direction == 'Account'){
        nav.navigate(screen[screen.length - 1].direction, {id: screen[screen.length - 1].id})
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

const handleGoBack = (nav) => {
  return (dispatch, getState) => {
    nav.navigate('Home')
  }
}

export {
  handleGoBack
}

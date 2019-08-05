import { fetchPost } from '@redux/actions/home';

const handleGoBack = (nav) => {
  return (dispatch, getState) => {
      nav.navigate('Home');
  }
}

export {
  handleGoBack
}

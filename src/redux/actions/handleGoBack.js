export default (params, nav) => {
  const state = params ? params : {};
  const from = state.from ? state.from : {screen: 'Home'};

  if(from.screen == 'Detail'){
    nav.navigate(from.screen, {screen: from.which});
  }
  if(from.screen == 'Post' || from.screen == 'User'){
    nav.navigate(from.screen, {id: from.id});
  }
  else{
    nav.navigate(from.screen);
  }
}

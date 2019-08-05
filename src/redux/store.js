import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import home     from './reducers/home';
import create   from './reducers/create';
import account  from './reducers/account';
import login    from './reducers/login';
import register from './reducers/register';
import post     from './reducers/post';
import notif    from './reducers/notification';

const reducer = combineReducers(
  {
    post,    
    account,
    create,
    home,
    login,
    register,
    notification: notif
  }
)

const store = createStore(reducer, applyMiddleware(thunk))

export default store

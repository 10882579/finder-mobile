import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import home     from './reducers/home';
import mode     from './reducers/mode';
import create   from './reducers/create';
import account  from './reducers/account';
import detail   from './reducers/detail';
import login    from './reducers/login';

const reducer = combineReducers(
  {
    account,
    create,
    home,
    mode,
    detail,
    login
  }
)

const store = createStore(reducer, applyMiddleware(thunk))

export default store

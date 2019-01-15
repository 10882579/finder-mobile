import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import home     from './reducers/home';
import mode     from './reducers/mode';
import create   from './reducers/create';
import account  from './reducers/account';
import detail   from './reducers/detail';``

const reducer = combineReducers(
  {
    account,
    create,
    home,
    mode,
    detail
  }
)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

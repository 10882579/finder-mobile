import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import home from './reducers/home';

const reducer = combineReducers(
  {
    home: home
  }
)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

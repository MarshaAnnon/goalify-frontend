import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'

const reducer = combineReducers({
    user: usersReducer //this user key will show up in your store & point it to usersReducer
  })
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

  export default store
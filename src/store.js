import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'


const reducer = combineReducers({
  users: users,
  currentUser,
  loginForm
  })
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

  export default store
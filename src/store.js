import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import topics from './reducers/topics'
import signupForm from './reducers/signupForm'
import topicForm from './reducers/topicForm'

const reducer = combineReducers({
  currentUser,
  loginForm,
  topics,
  signupForm,
  topicForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
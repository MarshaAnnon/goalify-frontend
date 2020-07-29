import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import topics from './reducers/topics'
import goals from './reducers/goals'
import signupForm from './reducers/signupForm'
import topicForm from './reducers/topicForm'

const reducer = combineReducers({
  currentUser,
  loginForm,
  topics,
  signupForm,
  topicForm,
  goals
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
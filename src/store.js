import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import topicForm from './reducers/topicForm'
import topics from './reducers/topics'
import goalForm from './reducers/goalForm'


const reducer = combineReducers({
  currentUser,
  loginForm,
  topics,
  signupForm,
  topicForm,
  goalForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
import React from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Topics from './components/Topics'
import NewTopicForm from './components/NewTopicForm'
import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render (){
    const { loggedIn } = this.props
    return (
      <div className="App">
        <NavBar />
          {loggedIn ? <Logout /> : null }
          <Route exact path='/' render={() => loggedIn ? <Topics /> : <Home />} />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/topics' component={ Topics } />
          <Route exact path='/topics/new' component={ NewTopicForm } />
          {/* <Route exact path='/goals/new' component={ NewGoal } /> */}
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser  
  }
}
  

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

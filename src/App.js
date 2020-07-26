import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  render (){
    return (
      this.props.currentUser ? <Logout /> : <Login />
    );
  }
}
  
  const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps, { getCurrentUser })(App);

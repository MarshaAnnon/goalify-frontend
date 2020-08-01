import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './auth/Logout'

const NavBar = ({ currentUser, loggedIn }) => {
    
    return (
        <div className="NavBar">
          {loggedIn ? <Logout /> : null }
          { loggedIn ? <><p id="loggedin"> Logged in as { currentUser.attributes.username }</p></> : null }           
          <NavLink exact activeclass="true" to="/topics">My Topics</NavLink>            
          <NavLink exact activeclass="true" to="/topics/new">Create a New Topic</NavLink> 
    
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
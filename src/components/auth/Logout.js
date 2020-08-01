import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser.js'
import { Link, withRouter } from 'react-router-dom'

const Logout = ({ logout, history }) => {
    
    return (
        <a onClick={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
            }   
        } >
        </a>
    )
}

export default withRouter(connect(null, { logout })(Logout))
import React from 'react'
import { connect } from 'react-redux'




const NavBar = ({ currentUser }) => {
    
    return (
        <div className="NavBar">
            { currentUser ? `Welcome, ${ currentUser.attributes.username }, check out your topics to complete, add, edit or delete goals!` : "" }
            
        </div>
    )
}




const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)
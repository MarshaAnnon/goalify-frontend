import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const NavBar = ( {logout} ) => {
  return (
    <Navbar className="navbar" expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Goalify</Navbar.Brand>
        <NavDropdown title="Menu" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="/topics">My Topics</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/topics/new">Create a New Topic</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/#" onClick={ logout } >Log Out</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
    )
}

export default connect(null, { logout }) (NavBar)
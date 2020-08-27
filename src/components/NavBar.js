import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = ( {logout} ) => {
  return (
  <Navbar sticky="top" expand="lg" variant="dark" bg="warning">
    <Container id='navbar-container'>
      <Navbar.Brand to="/">Goalify</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <LinkContainer to="/topics">
              <NavDropdown.Item>My Topics</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/topics/new">
              <NavDropdown.Item>Create a New Topic</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider/>
            <LinkContainer to="/#" onClick={logout}>
              <NavDropdown.Item >Log Out</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default connect(null, { logout }) (NavBar)
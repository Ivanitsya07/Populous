import React from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

export default class NavigationLoggedOut extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#2b3f5c' }}>
        <Navbar dark expand>
          <NavbarToggler right="true" onClick={this.toggle} />
          <Link to="/" className="navbar-brand">
            <img src="./logo.png" alt="Populous" height={33} />
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/login" className="nav-link">
                  LOGIN
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/registration" className="nav-link">
                  SIGNUP
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

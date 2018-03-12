import { Meteor } from 'meteor/meteor';
import React from 'react';
import {
  Container,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

import {
  SET_CURRENT_USER,
  APP_LOADING,
} from '../../wrappers/PrivateApp/modules';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { user, dispatch } = this.props;

    return (
      <div style={{ backgroundColor: '#2b3f5c' }}>
        {/*
          Issues with dark navbar
          https://github.com/reactstrap/reactstrap/issues/544

          Dark prop sets the links to light, parent div sets the background to the blue colour
        */}

        <Navbar
          className="header" color="faded" dark expand="lg"
        >
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/"><img src="./logo.png" alt="Populous" height={33} /></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#logout"
                  onClick={e => {
                    e.preventDefault();
                    Meteor.logout(err => {
                      if (err) {
                        toastr.error('Error logging out', err.reason);
                      } else {
                        dispatch(push('/login'));
                        dispatch({ type: SET_CURRENT_USER, user: null });
                        dispatch({ type: APP_LOADING, loading: true });
                      }
                    });
                  }}
                >
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>
                  {user.fullName()}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect()(Navigation);

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

    const borrowerLinks = () => {
      if (user.isBorrower()) {
        return [
          <Link className="nav-link" key={"1"} to="/add-invoice">Add Invoice</Link>,
          <Link className="nav-link" key={"2"} to="/invoices">My Invoices</Link>
        ];
      }
    };

    return (
      <div style={{
        backgroundColor: '#2b3f5c',
        marginBottom: '30px'
      }}>
        {/*
          Issues with dark navbar
          https://github.com/reactstrap/reactstrap/issues/544

          Dark prop sets the links to light, parent div sets the background to the blue colour
        */}

        <Navbar
          className="header" color="faded" dark expand="lg"
        >
          <Container>
            <Link className="navbar-brand" to="/">
                <img src="./logo.png" alt="Populous" height={33} />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                { borrowerLinks() }
                <NavItem>
                  <Link className="nav-link" to="/wallet">Wallet</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/settings">Settings</Link>
                </NavItem>
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
                  {/* <NavLink disabled>
                    {user.fullName()}
                  </NavLink> */}
                  <NavLink
                    href="#profile"
                    onClick={e => {
                      e.preventDefault();

                      this.props.slideMenuHandler();
                    }}
                  >
                    {user.fullName()}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default connect()(Navigation);

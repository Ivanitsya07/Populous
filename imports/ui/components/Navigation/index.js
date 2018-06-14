import { Meteor } from 'meteor/meteor';
import React from 'react';
import {
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
import { stopSubscription } from 'meteor-redux-middlewares';

import { ACCOUNTS_USER_SUB } from '../../wrappers/PrivateApp/modules';

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
          <NavItem key={"1"}>
            <Link className="nav-link icon-link" to="/add-invoice"><img src="./img/icons/add-invoice.png" height={20} /><span>Add Invoice</span></Link>
          </NavItem>
        ];
      }
    };

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
          <Link className="navbar-brand" to="/">
            <img src="./img/logo.png" alt="Populous" height={33} />
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { borrowerLinks() }
              <NavItem>
                <Link className="nav-link icon-link" to="/"><img src="./img/icons/dashboard.png" height={20} /><span>Dashboard</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link icon-link" to="/invoices"><img src="./img/icons/invoice.png" height={20} /><span>My Invoices</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link icon-link" to="/wallet"><img src="./img/icons/wallet.png" height={20} /><span>Wallet</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link icon-link" to="/market"><img src="./img/icons/market.png" height={20} /><span>Market</span></Link>
              </NavItem>
              <NavItem>
                <NavLink className="icon-link"
                  href="#sidemenu"
                  onClick={e => {
                    e.preventDefault();
                    this.props.slideMenuHandler();
                  }}
                >
                  <img src="./img/icons/menu-user.png" height={20} /><span>{user.firstName}</span>
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

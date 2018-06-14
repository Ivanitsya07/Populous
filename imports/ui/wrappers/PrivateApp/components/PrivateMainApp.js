import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { userRoles } from 'meteor/populous:constants';

import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';

import {
    BorrowerDashboard,
    InvestorDashboard
  } from '../../../routes/Dashboards';
  import Invoices from '../../../routes/Invoices';
  import Invoice from '../../../routes/Invoice';
  import AddInvoice from '../../../routes/AddInvoice';
  import Settings from '../../../routes/Settings';
  import BorrowerOnlyRoute from '../../../route-helpers/BorrowerOnlyRoute';
  import UnverifiedOrDeclinedRoute from '../../../route-helpers/UnverifiedOrDeclinedRoute';
  import Navigation from '../../../components/Navigation';
  import NavigationEmpty from '../../../components/Navigation/NavigationEmpty';
  import Upload from '../../../routes/Upload';
  import Wallet from '../../../routes/Wallet';
  import Setup2FA from '../../../routes/Setup2FA';
  import { Page, Content } from '../../../components/styled-components/Divs';
  import Footer from '../../../components/Footer';
  
const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class PrivateMainApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.slideMenuHandler = this.slideMenuHandler.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  slideMenuHandler() {
      this.setState(
          {open: !this.state.open}          
      );
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  render() {
    const sidebar = <SidebarContent onSetOpen={this.onSetOpen} currentUser={this.props.currentUser} />;

    const sidebarProps = {
      sidebar: sidebar,
      docked: false,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: true,
      shadow: true,
      pullRight: true,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      transitions: true,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <Page >
          <Navigation user={this.props.currentUser} slideMenuHandler={this.slideMenuHandler} />
          <Content>
            <Container onClick={() => {this.setState({open: false})}}>
            <Route exact path="/" component={this.props.dashboard} />
            <BorrowerOnlyRoute exact path="/add-invoice" component={AddInvoice} />
            <Route exact path="/invoices" component={Invoices} />
            <Route exact path="/invoice/:invoiceId" component={Invoice} />
            <Route exact path="/wallet" component={Wallet} />
            <Route exact path="/settings" component={Settings} />
            {/* This route is only accessible to accounts that are unverified */}
            <UnverifiedOrDeclinedRoute path="/upload" component={Upload} />
            </Container>
          </Content>
          <Footer />
        </Page>
        
      </Sidebar>
    );
  }
}

export default PrivateMainApp;
// ReactDOM.render(<App />, document.getElementById('example'));

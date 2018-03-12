import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { userRoles } from 'meteor/populous:constants';

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

import PrivateMainApp from './PrivateMainApp';

const PrivateApp = ({ loading, currentUser }) => {
  if (loading) {

    // TODO: Nice full screen loading icon
    return <div>Loading</div>;
  }

  if (!currentUser) {

    // TODO: Redirect or show something
    return <div>500 Internal server error</div>;
  }

  // Make sure the user has 2 factor auth setup
  if (!currentUser.twoFAKey) {
    return (
      <Page>
        <NavigationEmpty user={currentUser} />
        <Content>
          <Setup2FA />
        </Content>
        <Footer />
      </Page>
    );
  }

  let Dashboard = BorrowerDashboard;

  // Render the pages depending on the users type
  if (currentUser.role === userRoles.investor) {
    Dashboard = InvestorDashboard;
  }

  return (
    <PrivateMainApp currentUser={currentUser} dashboard={Dashboard} />

    // <Page>
    //   <Navigation user={currentUser} />
    //   <Content>
    //     <Container>
    //       <Route exact path="/" component={Dashboard} />
    //       <BorrowerOnlyRoute exact path="/add-invoice" component={AddInvoice} />
    //       <BorrowerOnlyRoute exact path="/invoices" component={Invoices} />
    //       <BorrowerOnlyRoute exact path="/invoice/:invoiceId" component={Invoice} />
    //       <Route exact path="/wallet" component={Wallet} />
    //       <Route exact path="/settings" component={Settings} />
    //       {/* This route is only accessible to accounts that are unverified */}
    //       <UnverifiedOrDeclinedRoute path="/upload" component={Upload} />
    //     </Container>
    //   </Content>
    //   <Footer />
    // </Page>
  );
};

export default PrivateApp;

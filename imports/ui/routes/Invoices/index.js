import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Alert, Card, Col, Row} from 'reactstrap';
import { Invoice } from 'meteor/populous:api';

import {
  H1,
  H3,
  H5
} from '../../components/styled-components/Typography/headers';
import { Block } from '../../components/styled-components/Divs';
import MyInvoicesFilters from './components/MyInvoicesFilters';
import MyInvoicesMoreFilters from './components/MyInvoicesMoreFilters';
import InvoiceCard from './components/InvoiceCard';

const Invoices = ({ loading, invoices }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row>
        <Col xs={'12'} md={'8'}>
          <H3>My Invoices</H3>
          <p>
            Manage your portfolio of invoices and view statistics on earnings
            and potential earnings.
          </p>
          <Row>
            <Col xs={'12'}>
              <MyInvoicesFilters />
            </Col>
          </Row>
        </Col>
        <Col xs={'12'} md={'4'}>
          <Block>
            <Card body style={{ backgroundColor: '#f8f9fa' }}>
              <div style={{ textAlign: 'right' }}>
                <H5><Link to={'#'}>View Wallet</Link></H5>
                <H5>Wallet Balance</H5>
                <H1>GBPPT: 14,580.00</H1>
              </div>
            </Card>
          </Block>
        </Col>
      </Row>
      <div style={{ height: '32px' }} />
      <Row>
        <Col xs={'12'}>
          <MyInvoicesMoreFilters />
        </Col>
      </Row>
      <Row>
        <Col xs={'12'}>
          {invoices.length > 0
            ? invoices.map(invoice => <InvoiceCard invoice={invoice} />)
            : <Alert color="info">
                <p style={{ textAlign: 'center' }}>
                  You don't seem to have any invoices.
                </p>
              </Alert>}
        </Col>
      </Row>
      {/* TODO: Remove later, just to demonstrate with static data */}
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </div>
  );
};

export default withTracker(() => {
  // Get the invoice data for the user
  const handle = Meteor.subscribe('invoices.user', Meteor.userId());

  return {
    loading: !handle.ready(),
    invoices: Invoice.find({ borrowerId: Meteor.userId() }).fetch()
  };
})(Invoices);

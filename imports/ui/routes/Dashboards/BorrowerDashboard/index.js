import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PaymentsWidget from './components/PaymentsWidget';
import InvestmentsByCountriesWidget from './components/InvestmentsByCountriesWidget';
import SummaryWidget from './components/SummaryWidget';
import FundsWidget from './components/FundsWidget';

const BorrowerDashboard = () =>
  <Container>
    <Row>
      <Col xs={12}>
        <h1>Dashboard</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={8}>
        <PaymentsWidget />
        <div style={{ height: '32px' }} />
        <InvestmentsByCountriesWidget />
        <div style={{ height: '32px' }} />
      </Col>
      <Col xs={12} md={4}>
        <SummaryWidget />
        <div style={{ height: '32px' }} />
        <FundsWidget/>
      </Col>
    </Row>
  </Container>;

export default BorrowerDashboard;

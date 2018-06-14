import React from 'react';
import { Row, Col } from 'reactstrap';

import PaymentsWidget from './components/PaymentsWidget';
import InvestmentsByCountriesWidget from './components/InvestmentsByCountriesWidget';
import SummaryWidget from './components/SummaryWidget';
import FundsWidget from './components/FundsWidget';
import { H2, Small } from '../../../components/styled-components/Typography/headers';
import { StyledInput} from '../../../components/styled-components/Inputs';

const BorrowerDashboard = () =>
  <div>
    <Row>
      <Col xs={12} className="m-t-40 m-b-20">
        <H2 transform="uppercase" opacity={0.8}>Dashboard
          <Small opacity={0.6}>WALLET</Small>
          <StyledInput type="select">
            <option>USDp</option>
            <option>GBPp</option>
          </StyledInput>
        </H2>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={8}>
        <PaymentsWidget />
        <InvestmentsByCountriesWidget />
      </Col>
      <Col xs={12} md={4}>
        <SummaryWidget />
        <FundsWidget />
      </Col>
    </Row>
  </div>;

export default BorrowerDashboard;

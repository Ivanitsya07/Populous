import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {
  LinkedCard,
  StyledLink
} from '../../../components/styled-components/LinkedCard';

const InvoiceCard = () => {
  const invoice = {
    amount: 1000,
    currency: 'GBPp',
    invoiceNumber: 254125488455,
    invoiceName: 'Defence Technologies International',
    debtorName: 'Defence Technologies International',
    dueDate: '01-01-2018',
    salePrice: 900
  };

  const returnOnInvestmentPerc = ((invoice.amount - invoice.salePrice) /
    invoice.salePrice *
    100).toFixed(2);

  return (
    <StyledLink to={'#'} style={{ textDecoration: 'none', color: '' }}>
      <LinkedCard style={{ padding: '12px', margin: '8px' }}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div>
                <span>{invoice.invoiceNumber}</span>
                <span> {invoice.invoiceName}</span>
              </div>
              <div>
                <span>Auction Open</span>{' | '}<span>Ends in 3 days</span>
                {' | '}<span>Created 11-01-2017</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={6} md={2}>
                  <span><small>Currency</small></span>
                  <div>GBPp</div>
                </Col>
                <Col xs={6} md={2}>
                  <span><small>Amount</small></span>
                  <div>{invoice.amount}</div>
                </Col>
                <Col xs={6} md={2}>
                  <span><small>Return</small></span>
                  <div>{returnOnInvestmentPerc}%</div>
                </Col>
                <Col xs={6} md={2}>
                  <span><small>Sale</small></span>
                  <div>{invoice.salePrice}</div>
                </Col>
                <Col xs={6} md={3}>
                  <span><small>Due date</small></span>
                  <div>{invoice.dueDate}</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </LinkedCard>
    </StyledLink>
  );
};

InvoiceCard.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  invoiceNumber: PropTypes.number,
  invoiceName: PropTypes.string,
  debtorName: PropTypes.string,
  dueDate: PropTypes.string,
  salePrice: PropTypes.number
};

export default InvoiceCard;

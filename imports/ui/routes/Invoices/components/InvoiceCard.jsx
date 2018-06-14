import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import moment from 'moment';

import {
  LinkedCard,
  StyledLink
} from '../../../components/styled-components/LinkedCard';
import {
  CardInfo,
  MainText, Status, SubText, TableHead,
} from "../../../components/styled-components/Invoices/InvoiceCard";

const InvoiceCard = (props) => {

  const {invoice: {_id, amount, salePrice, invoiceNumber,
    currency,dueDate, createdAt,status, debtorName}} = props;

  const returnOnInvestmentPerc = ((amount - salePrice) / salePrice * 100)
    .toFixed(2);

  return (
    <StyledLink to={'/invoice/' + _id} style={{textDecoration: 'none', color: ''}}>
      <LinkedCard>
          <Row>
            <Col xs={12} md={6}>
              <div>
                <MainText withMargin>{invoiceNumber}</MainText>
                <MainText>{debtorName}</MainText>
              </div>
              <CardInfo>
                <Status status={status}>Auction {status}</Status>
                <SubText withMargin>Ends {moment().to(dueDate)}</SubText>
                <SubText>Created {moment(createdAt).format('MM-DD-YYYY')}</SubText>
              </CardInfo>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs="6" sm={2} md={2}>
                  <TableHead>Currency</TableHead>
                  <MainText>{currency}</MainText>
                </Col>
                <Col xs="6" sm={2} md={2}>
                  <TableHead>Amount</TableHead>
                  <MainText>{amount}</MainText>
                </Col>
                <Col xs="6" sm={3} md={2}>
                  <TableHead>Sale Price</TableHead>
                  <MainText>{salePrice}</MainText>
                </Col>
                <Col xs="6" sm={2} md={2}>
                  <TableHead>Return</TableHead>
                  <MainText>{returnOnInvestmentPerc}%</MainText>
                </Col>
                <Col xs="6" sm={3} md={3}>
                  <TableHead>Due date</TableHead>
                  <MainText>{moment(dueDate).format('MM-DD-YYYY')}</MainText>
                </Col>
              </Row>
            </Col>
          </Row>
      </LinkedCard>
    </StyledLink>
  );
};

InvoiceCard.propTypes = {
  invoice: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    invoiceNumber: PropTypes.string.isRequired,
    debtorName: PropTypes.string.isRequired,
    dueDate: PropTypes.object.isRequired,
    createdAt: PropTypes.object.isRequired,
    salePrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired
};

export default InvoiceCard;

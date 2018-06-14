import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { reduxForm } from 'redux-form';
import {
  averageInvoiceValues,
  averageInvoiceVolumes
} from 'meteor/populous:constants';

import Button from '../../../components/styled-components/Button';
import { Small, P, H5 } from '../../../components/styled-components/Typography/headers';

let KYCWizardFormReviewPage = props => {
  const { handleSubmit, pristine, previousPage, submitting, currentUser } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <H5 opacity={0.7} transform="uppercase" className="text-center m-b-30">
        Please review provided information
      </H5>

      <Row className="table-row">
        <Col className="title" xs={12}>
          <P>Company Information</P>
        </Col>
        {currentUser.isBorrower() &&
        <Col xs={12}>
          <label>Company Name</label>
          <P opacity={0.8}>{props.valuesForReview.companyName}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12}>
          <label>Company Number</label>
          <P opacity={0.8}>{props.valuesForReview.companyNumber}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12}>
          <label>Company Description</label>
          <P opacity={0.8}>{props.valuesForReview.companyDescription}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={6}>
          <label>Address</label>
          <P opacity={0.8}>{props.valuesForReview.addressLine1}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={6}>
          <label>{' '}</label>
          <P opacity={0.8}>{props.valuesForReview.addressLine2}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={4}>
          <label>City</label>
          <P opacity={0.8}>{props.valuesForReview.city}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={2}>
          <label>Postal Code</label>
          <P opacity={0.8}>{props.valuesForReview.postcode}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={6}>
          <label>Country</label>
          <P opacity={0.8}>{props.valuesForReview.country}</P>
        </Col>}
        <Col xs={12}>
          <label>Bank Statements</label>
          {props.valuesForReview.bankStatements.length > 0 ? props.valuesForReview.bankStatements.map(
                (statement, i) => <P className="blue" key={i}>{statement.name}</P>
              ) : <P opacity={0.8}>No Bank Statements</P>}
        </Col>

        {currentUser.isBorrower() &&
        <Col className="title" xs={12}>
          <P>Trading Volume</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={6}>
          <label>Expected Monthly Volume</label>
          <P opacity={0.8}>{averageInvoiceVolumes[props.valuesForReview.averageInvoiceVolume]}</P>
        </Col>}
        {currentUser.isBorrower() &&
        <Col xs={12} sm={6}>
          <label>Expected Average Value</label>
          <P opacity={0.8}>{props.valuesForReview.currencySelector ? `${props.valuesForReview.currencySelector}` : null}
            {' '}{` ${averageInvoiceValues[props.valuesForReview.averageInvoiceValue]}`}</P>
        </Col>}

        <Col className="title" xs={12}>
          <P>Company Contact Person</P>
        </Col>
        <Col xs={12} sm={6}>
          <label>First Name</label>
          <P opacity={0.8}>{props.valuesForReview.firstName}</P>
        </Col>
        <Col xs={12} sm={6}>
          <label>Last Name</label>
          <P opacity={0.8}>{props.valuesForReview.lastName}</P>
        </Col>
        {currentUser.isBorrower() &&
        <Col xs={12}>
          <label>Title/Position</label>
          <P opacity={0.8}>{props.valuesForReview.title}</P>
        </Col>}
        {!currentUser.isBorrower() &&
        <Col xs={12}>
          <label>Country</label>
          <P opacity={0.8}>{props.valuesForReview.country}</P>
        </Col>}
        <Col xs={12}>
          <label>ID Document</label>
            {props.valuesForReview.bankStatements.length > 0 ? 
              props.valuesForReview.personalIdentification.map((personalId, i) => <P className="blue" key={i}>{personalId.name}</P>) :
              <P opacity={0.8}>No Personal Identification Added</P>}
        </Col>
      </Row>

      <div className="text-center m-t-40">
        <Button className="previous" onClick={previousPage} width="160px">
          Previous
        </Button>
        {' '}
        <Button primary type="submit" disabled={pristine || submitting} width="160px">
          Submit Data
        </Button>
      </div>
    </form>
  );
};

KYCWizardFormReviewPage = reduxForm({
  form: 'kycwizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  // validate
})(KYCWizardFormReviewPage);

KYCWizardFormReviewPage = connect(({ form: { kycwizard: { values } } }) => ({
  valuesForReview: values
}))(KYCWizardFormReviewPage);

export default KYCWizardFormReviewPage;

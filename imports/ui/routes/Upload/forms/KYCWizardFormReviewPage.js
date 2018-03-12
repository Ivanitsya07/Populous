import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { reduxForm } from 'redux-form';
import {
  averageInvoiceValues,
  averageInvoiceVolumes
} from 'meteor/populous:constants';

import Button from '../../../components/styled-components/Button';

let KYCWizardFormReviewPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup style={{ textAlign: 'left' }}>
              <ListGroupItem>
                <h5>Company Information</h5>
                <p>
                  <strong>Address Line 1:</strong>
                  {' '}{props.valuesForReview.addressLine1}
                </p>
                <p>
                  <strong>Address Line 2:</strong>
                  {' '}{props.valuesForReview.addressLine2}
                </p>
                <p><strong>City:</strong> {props.valuesForReview.city}</p>
                <p>
                  <strong>Company Description:</strong>
                  {' '}{props.valuesForReview.companyDescription}
                </p>
                <p>
                  <strong>Company Name:</strong>
                  {' '}{props.valuesForReview.companyName}
                </p>
                <p>
                  <strong>Company Number:</strong>
                  {' '}{props.valuesForReview.companyNumber}
                </p>
                <p><strong>Country:</strong> {props.valuesForReview.country}</p>
                <p>
                  <strong>First Name:</strong> {props.valuesForReview.firstName}
                </p>
                <p>
                  <strong>LastName:</strong> {props.valuesForReview.lastName}
                </p>
                <p>
                  <strong>Postcode:</strong> {props.valuesForReview.postcode}
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <h5>Company Bank Statements</h5>
                {props.valuesForReview.bankStatements.length > 0 ? props.valuesForReview.bankStatements.map(
                  statement => statement.name
                ) : <p>No Bank Statements</p>}
              </ListGroupItem>
              <ListGroupItem>
                <h5>Trading Volume</h5>
                <p>
                  <strong>Currency Selected: </strong>
                  {props.valuesForReview.currencySelector}
                </p>
                <p>
                  <strong>Average Invoice Value: </strong>
                  {` ${averageInvoiceValues[props.valuesForReview.averageInvoiceValue]}`}
                  {' '}{props.valuesForReview.currencySelector ? `${props.currencySelector}` : null}
                </p>
                <p>
                  <strong>Average Invoice Volume: </strong>
                  {averageInvoiceVolumes[props.valuesForReview.averageInvoiceVolume]}
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <h5>Personal Identification</h5>
                {props.valuesForReview.bankStatements.length > 0 ? props.valuesForReview.personalIdentification.map(
                  personalId => personalId.name
                ) : <p>No Personal Identification Added</p>}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div>
        <div style={{ height: '32px' }}/>

        <Button className="previous" onClick={previousPage}>
          Previous
        </Button>
        {' '}
        <Button primary type="submit" disabled={pristine || submitting}>
          Submit KYC Data
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

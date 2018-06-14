import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderDropzoneInput from '../../../form-helpers/renderDropzoneInput';
import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { renderCountrySelector } from '../../../form-helpers/renderSelectFields';
import Button from '../../../components/styled-components/Button';
import { Small, P, H5 } from '../../../components/styled-components/Typography/headers';
import KYCValidation from './KYCValidation';

let KYCWizardFormPersonalIdentification = props => {
  const { handleSubmit, pristine, previousPage, submitting, currentUser } = props;
  return (
    <form className="form multi" onSubmit={handleSubmit}>
      <H5 opacity={0.7} transform="uppercase" className="text-center m-b-30">
        Company Company Person
      </H5>

      <Row>
        <Col xs={12} md={6}>
          <Field
            name="firstName"
            type="text"
            component={renderInputReactstrap}
            label="First Name"
            placeholder={''}
          />
        </Col>
        <Col xs={12} md={6}>
          <Field
            name="lastName"
            type="text"
            component={renderInputReactstrap}
            label="Last Name"
            placeholder={''}
          />
        </Col>
        {currentUser.isBorrower() &&
        <Col xs={12} md={12}>
          <Field
            name="title"
            type="text"
            component={renderInputReactstrap}
            label="Title/Position"
            placeholder={''}
          />
        </Col>}
        {!currentUser.isBorrower() &&
        <Col xs={12} md={12}>
          <Field name="country" component={renderCountrySelector} />
        </Col>}
      </Row>

      <Row>
        <Col xs={12}>
          <Field
            name="personalIdentification"
            component={renderDropzoneInput}
            acceptedFiles=".pdf, .png, .jpg, .jpeg"
            uploadFileTypeDesc="Please upload a copy of your ID, passport, or drivers license"
          />
        </Col>
      </Row>

      <div className="text-center m-t-40">
        <Button className="previous" onClick={previousPage} width="150px">
          Previous
        </Button>
        {' '}
        <Button primary type="submit" className="next" width="150px">
          Review
        </Button>
      </div>
    </form>
  );
};

KYCWizardFormPersonalIdentification = reduxForm({
  form: 'kycwizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: KYCValidation
})(KYCWizardFormPersonalIdentification);

export default KYCWizardFormPersonalIdentification;

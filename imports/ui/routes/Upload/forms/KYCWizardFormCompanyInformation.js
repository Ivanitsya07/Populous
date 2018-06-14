import React from 'react';
import { FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { renderCountrySelector } from '../../../form-helpers/renderSelectFields';
import renderDropzoneInput from '../../../form-helpers/renderDropzoneInput';
import renderCheckbox from '../../../form-helpers/renderCheckbox';
import KYCValidation from './KYCValidation';
import Button from '../../../components/styled-components/Button';
import { Small, P, H5 } from '../../../components/styled-components/Typography/headers';

let KYCWizardFormCompanyInformation = props => {
  const { handleSubmit, currentUser } = props;
  return (
    <form className="form multi" onSubmit={handleSubmit}>
      <H5 opacity={0.7} transform="uppercase" className="text-center m-b-30">
        Company
      </H5>

      {currentUser.isBorrower() &&
      <Row>
        <Col xs={12} md={6}>
          <Field
            name="companyName"
            type="text"
            component={renderInputReactstrap}
            label="Company Name"
            placeholder={''}
          />
          <Field
            name="companyNumber"
            type="text"
            component={renderInputReactstrap}
            label="Company Number"
            placeholder={''}
          />

          <Field
            name="companyDescription"
            type="textarea"
            component={renderInputReactstrap}
            label="Company Description"
            placeholder={''}
          />
        </Col>
        <Col xs={12} md={6}>
          <Field
            name="addressLine1"
            type="text"
            component={renderInputReactstrap}
            label="Address"
            placeholder={''}
            className="m-b-0"
          />
          <Field
            name="addressLine2"
            type="text"
            component={renderInputReactstrap}
            label=""
            placeholder={''}
          />
          <Row>
            <Col md={8}>
              <Field
                name="city"
                type="text"
                component={renderInputReactstrap}
                label="City"
                placeholder={''}
              />
            </Col>
            <Col md={4}>
              <Field
                name="postcode"
                type="text"
                component={renderInputReactstrap}
                label="Postcode"
                placeholder={''}
              />
            </Col>
          </Row>

          <Field name="country" component={renderCountrySelector} />
        </Col>
      </Row>}

      <Row>
        <Col xs={12}>
          <Field
            name="bankStatements"
            component={renderDropzoneInput}
            acceptedFiles=".pdf, .doc, .docx, .pages, .xls, .xlsx, .numbers"
            uploadFileTypeDesc="Plesae upload the lastest company's bank statements"
          />
        </Col>
      </Row>

      {currentUser.isBorrower() &&
      <Row>
        <Col xs={12} className="text-center m-t-20">
          <Field
            name="onlyAccountConfirmation"
            component={renderCheckbox}
            type="checkbox"
            label={'I confirm that there are no other accounts connected to this company.'}
          />
        </Col>
      </Row>}

      <div className="text-center m-t-30">
        <Button primary type="submit" className="next" width="160px">
          Next
        </Button>
      </div>
    </form>
  );
};

KYCWizardFormCompanyInformation = reduxForm({
  form: 'kycwizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: KYCValidation
})(KYCWizardFormCompanyInformation);

// Ensure that the prop is NOT "initialValues"
// https://github.com/erikras/redux-form/issues/916
KYCWizardFormCompanyInformation = connect((state, ownProps) => ({
  initialValues: ownProps.initialValuesReduxForm
}))(KYCWizardFormCompanyInformation);

export default KYCWizardFormCompanyInformation;

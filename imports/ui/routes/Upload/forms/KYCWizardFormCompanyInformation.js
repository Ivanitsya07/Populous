import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { renderCountrySelector } from '../../../form-helpers/renderSelectFields';
import renderDropzoneInput from '../../../form-helpers/renderDropzoneInput';
import renderCheckbox from '../../../form-helpers/renderCheckbox';

import Button from '../../../components/styled-components/Button';
import KYCValidation from './KYCValidation';

let KYCWizardFormCompanyInformation = props => {
  const { handleSubmit, currentUser } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5>1. Company Information</h5>
      <div style={{ height: '16px' }}/>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="companyName"
              type="text"
              component={renderInputReactstrap}
              label="Company Name"
              placeholder={'Company Name'}
            />
            <Field
              name="companyNumber"
              type="text"
              component={renderInputReactstrap}
              label="Company Number"
              placeholder={'Company Number'}
            />

            {/* TODO: Make searchable select  */}
            <Field
              name="companyDescription"
              type="text"
              component={renderInputReactstrap}
              label="Company Description"
              placeholder={'Company Description'}
            />

            <Field name="country" component={renderCountrySelector} />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="addressLine1"
              type="text"
              component={renderInputReactstrap}
              label="Address line 1"
              placeholder={'Address line 1'}
            />

            <Field
              name="addressLine2"
              type="text"
              component={renderInputReactstrap}
              label="Address line 2"
              placeholder={'Address line 2'}
            />

            <Field
              name="city"
              type="text"
              component={renderInputReactstrap}
              label="City"
              placeholder={'City'}
            />

            <Field
              name="postcode"
              type="text"
              component={renderInputReactstrap}
              label="Postcode"
              placeholder={'Postcode'}
            />
          </Col>
        </Row>

        <div style={{ height: '32px' }} />

        <Row>
          <Col xs={12}>
            {/* Bank Statements */}
            <div
              style={{
                maxWidth: '330px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              <Field
                name="bankStatements"
                component={renderDropzoneInput}
                acceptedFiles=".pdf, .doc, .docx, .pages, .xls, .xlsx, .numbers"
                uploadFileTypeDesc="Bank Statements"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            {currentUser.isBorrower() &&
              <div style={{ textAlign: 'left' }}>
                <p>
                  Please confirm that there are no other accounts connected to
                  this company:
                </p>
                <Field
                  name="onlyAccountConfirmation"
                  component={renderCheckbox}
                  type="checkbox"
                  label={"This is the sole account related to the company."}
                />
              </div>}
          </Col>
        </Row>
      </Container>
      <div>
        <div style={{ height: '32px' }} />
        <Button type="submit" className="next">
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

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderDropzoneInput from '../../../form-helpers/renderDropzoneInput';
import Button from '../../../components/styled-components/Button';
import KYCValidation from './KYCValidation';

let KYCWizardFormPersonalIdentification = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5>Personal Identification</h5>
      <div style={{ height: '16px' }}/>
      <Container>
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
                name="personalIdentification"
                component={renderDropzoneInput}
                acceptedFiles=".pdf, .png, .jpg, .jpeg"
                uploadFileTypeDesc="IDs"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Button className="previous" onClick={previousPage}>
          Previous
        </Button>
        {' '}
        <Button type="submit" className="next">
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

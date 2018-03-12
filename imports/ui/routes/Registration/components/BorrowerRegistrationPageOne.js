import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'reactstrap';

import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import Button from '../../../components/styled-components/Button';
import { validateRegistration } from '../../../form-helpers/validation';

const BorrowerRegistrationPageOne = ({ handleSubmit }) => (
  <form className="form" onSubmit={handleSubmit}>
    <Row>
      <Col sm={12} className="m-b-20">
        <Field
          name="email"
          type="email"
          component={renderInputReactstrap}
          label="Email"
          placeholder={''}
        />
      </Col>
      <Col sm={6} className="m-b-20">
        <Field
          name="password"
          type="password"
          component={renderInputReactstrap}
          label="Password"
          placeholder={''}
        />
      </Col>
      <Col sm={6} className="m-b-20">
        <Field
          name="passwordConfirm"
          type="password"
          component={renderInputReactstrap}
          label="Confirm Password"
          placeholder={''}
        />
      </Col>
    </Row>
    <div className="m-t-20 text-center">
      <Button primary type="submit" className="next" width="160px">
        Next
      </Button>
    </div>
  </form>
);

export default reduxForm({
  form: 'borrowerRegistrationForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validateRegistration
})(BorrowerRegistrationPageOne);

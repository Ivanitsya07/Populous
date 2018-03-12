import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../../components/styled-components/Button';
import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { renderCountrySelector } from '../../../form-helpers/renderSelectFields';
import { validateRegistration } from '../../../form-helpers/validation';

const InvestorRegistrationPageTwo = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form className="form multi" onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderInputReactstrap}
        label="First Name"
        placeholder={''}
      />
      <Field
        name="lastName"
        type="text"
        component={renderInputReactstrap}
        label="Last Name"
        placeholder={''}
      />
      <Field name="country" component={renderCountrySelector} />
      <div className="m-t-30 text-center">
        <Button className="previous" onClick={previousPage} width="140px">
          Previous
        </Button>
        <Button primary type="submit" disabled={pristine || submitting} width="140px">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'investorRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validateRegistration
})(InvestorRegistrationPageTwo);

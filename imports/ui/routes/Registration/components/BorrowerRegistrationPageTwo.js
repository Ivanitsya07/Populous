import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { areaCodes } from 'meteor/populous:constants';
import { FormGroup, Input } from 'reactstrap'

import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { validateRegistration } from '../../../form-helpers/validation';
import { renderCountrySelector } from '../../../form-helpers/renderSelectFields';
import Button from '../../../components/styled-components/Button';

const renderPhoneAreaCodeSelector = ({ input, meta: { touched, error } }) => (
    <FormGroup>
      <label>Phone Area Code</label>
      <Input
        id="country"
        name="country"
        type="select"
      >
        <option>Select an area code...</option>
        {
          areaCodes.map((areaCode, i) => (
            <option value={areaCode.code} key={i}>
              {areaCode.name} ({areaCode.code})
            </option>
          ))
        }
      </Input>
      { touched &&
        error &&
        <span> { error } </span>
      }
    </FormGroup>
  );

const BorrowerRegistrationPageTwo = props => {
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
      {/* TODO: Make searchable select  */}
      <Field
        name="companyDescription"
        type="text"
        component={renderInputReactstrap}
        label="Company Description"
        placeholder={''}
      />
      <Field
        name="addressLine1"
        type="text"
        component={renderInputReactstrap}
        label="Address line 1"
        placeholder={''}
      />
      <Field
        name="addressLine2"
        type="text"
        component={renderInputReactstrap}
        label="Address line 2"
        placeholder={''}
      />
      <Field
        name="city"
        type="text"
        component={renderInputReactstrap}
        label="City"
        placeholder={''}
      />
      <Field
        name="postcode"
        type="text"
        component={renderInputReactstrap}
        label="Postcode"
        placeholder={''}
      />
      <Field name="country" component={renderCountrySelector} />
      <Field name={'phoneAreaCode'} component={renderPhoneAreaCodeSelector} />
      <Field
        name={'phoneNumber'}
        type="text"
        component={renderInputReactstrap}
        label="Phone Number"
        placeholder={''}
      />
      <Field
        name="occupation"
        type="text"
        component={renderInputReactstrap}
        label="Occupation"
        placeholder={''}
      />
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
  form: 'borrowerRegistrationForm', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validateRegistration
})(BorrowerRegistrationPageTwo);

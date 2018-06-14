import React from 'react';
import { countries } from 'meteor/populous:constants';
import { currencies } from 'meteor/populous:constants';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { Input } from '../components/styled-components/Inputs';
import { Input as InputRS } from 'reactstrap';

export const renderSelectReactstrap = ({
  options,
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) =>
  <FormGroup>
    <Label>{label}</Label>
    <Input
      placeholder={placeholder}
      id="currency"
      name="currency"
      type="select"
    >
      {Object.keys(options).map(c =>
        <option key={c} value={options[c]}>
          {`${c} (${options[c]})`}
        </option>
      )}
    </Input>
    <FormFeedback>{touched && error && <span className="error"> {error} </span>}</FormFeedback>
  </FormGroup>;

export const renderCurrencySelector = ({
  input,
  label,
  meta: { touched, error }
}) => {
  return (
    <div>
      <FormGroup>
        <Label>{label}</Label>
        <InputRS {...input} type="select">
          <option disabled value="">Select a currency</option>
          {Object.keys(currencies).map(currency =>
            <option value={[currency]} key={[currency]}>
              {[currency]}
            </option>
          )}
        </InputRS>
        {touched && error && <span className="error"> {error} </span>}
      </FormGroup>
    </div>
  );
};

export const renderCountrySelector = ({ input, meta: { touched, error } }) =>
  <FormGroup>
    <label>Country</label>
    <InputRS {...input} type="select">
      <option disabled value="">Select a country...</option>
      {countries.map(country =>
        <option value={country.key} key={country.key}>
          {country.name}
        </option>
      )}
    </InputRS>
    {touched && error && <span className="error"> {error} </span>}
  </FormGroup>;

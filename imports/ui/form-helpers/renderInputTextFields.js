import React from 'react';
import PropTypes from 'prop-types';
import { countries } from 'meteor/populous:constants';
import { FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import classNames from 'classnames';
import { Input } from '../components/styled-components/Inputs';

export const renderInputReactstrap = props => {
  const {
    input,
    label,
    placeholder,
    helperText,
    type,
    meta: { touched, error }
  } = props;

  const valid = !(touched && error);

  // https://www.npmjs.com/package/classnames
  const classes = classNames({
    success: valid,
    danger: error
  });

  return valid
    // If valid, don't have the valid prop on <Input/>, we don't want green borders
    ? <FormGroup color={classes}>
        <Label>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={input.onChange}
          disabled={props.disabled || false}
          {...input}
        />
        {helperText &&
          <FormText color="muted">
            {helperText}
          </FormText>}
        {touched && error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    // If not valid, add the valid prop
    : <FormGroup color={classes}>
        <Label>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          valid={valid}
          onChange={input.onChange}
          disabled={props.disabled || false}
          {...input}
        />
        {helperText &&
          <FormText color="muted">
            {helperText}
          </FormText>}
        {touched && error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>;
};

renderInputReactstrap.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  })
};

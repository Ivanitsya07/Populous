import React from 'react';
import PropTypes from 'prop-types';
import { Label, FormGroup, FormFeedback, FormText } from 'reactstrap';
import classNames from 'classnames';
import DateTime from 'react-datetime';

//https://github.com/YouCanBookMe/react-datetime/issues/325
export const renderDateTimeField = ({
  input,
  label,
  helperText,
  disabled,
  meta: { touched, error }
}) => {
  const valid = !(touched && error);

  // https://www.npmjs.com/package/classnames
  const classes = classNames({
    success: valid,
    danger: error
  });

  return (
    <div>
      <FormGroup color={classes}>
        {label && <Label>{label}</Label>}
        {/* We can't use an styled-component Input, so we add the style object as an input prop*/}
        <DateTime
          name={input.name}
          inputProps={{
            name: 'dueDate',
            id: 'dueDate',
            style: {
              color: '#212529',
              backgroundColor: '#fff',
              border: '1px solid #ced4da',
              borderRadius: 0
            }
          }}
          locale="en"
          dateFormat="MM/DD/YYYY"
          timeFormat={false}
          closeOnSelect
          onChange={param => {
            input.onChange(param);
          }}
          disabled={disabled}
        />

      </FormGroup>
      {helperText && <p>{helperText}</p>}
      {touched && error && <div className={"invalid-feedback"}>{error}</div>}
    </div>
  );
};

renderDateTimeField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
};

import React from 'react';

/**
 * Can also be used for default form fields,
 * but this works for a checkbox nicely,
 * given that it doesn't require styling (yet)
 */
const renderCheckbox = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <span>
      <label style={{ marginLeft: '8px' }}>
        <input {...input} placeholder={label} type={type} />
        {label}
      </label>
    </span>
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>;

export default renderCheckbox;

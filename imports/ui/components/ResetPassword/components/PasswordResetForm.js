import React from 'react';
import {Form, Label} from 'reactstrap';

import Button from '../../styled-components/Button'
import {Input, StyledInput} from '../../styled-components/Inputs';

const PasswordResetForm = ({sendPasswordResetEmail, onSuccess}) => {

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        sendPasswordResetEmail(e.target.email.value, onSuccess);
      }}
    >
      <Label htmlFor="email" style={{display: 'block', textTransform: 'uppercase', fontSize: '12px'}}>
        Your account email
      </Label>
      <StyledInput name="email" type="email"/>
      <div style={{ marginTop: '40px'}} className="text-center">
        <Button primary>Send reset email</Button>
      </div>
    </form>
  );
}

export default PasswordResetForm;

import React from 'react';
import { Form, Label } from 'reactstrap';

import Button from '../../../components/styled-components/Button'
import { Input } from '../../../components/styled-components/Inputs';

const PasswordResetForm = ({ sendPasswordResetEmail }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      sendPasswordResetEmail(e.target.email.value);
    }}
  >
    <Label style={{ display: 'block' }}>
      Email address
      <Input name="email" type="email" />
    </Label>
    <Button primary>Send</Button>
  </form>
);

export default PasswordResetForm;

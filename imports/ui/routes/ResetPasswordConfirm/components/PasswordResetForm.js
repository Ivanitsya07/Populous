import React from 'react';
import { Form, Label } from 'reactstrap';

import Button from '../../../components/styled-components/Button'
import { Input } from '../../../components/styled-components/Inputs';

const PasswordResetForm = ({ match, resetPassword }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      resetPassword(
        e.target.password.value,
        e.target.passwordConfirm.value,
        match.params.token
      );
    }}
  >
    <Label style={{ display: 'block' }}>
      New password
      <Input name="password" type="password" />
    </Label>
    <Label style={{ display: 'block' }}>
      New password again
      <Input name="passwordConfirm" type="password" />
    </Label>
    <Button primary>Reset</Button>
  </form>
);

export default PasswordResetForm;

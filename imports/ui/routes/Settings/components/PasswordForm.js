import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import { toastr } from 'react-redux-toastr';

import { H3 } from '../../../components/styled-components/Typography/headers';
import Button from '../../../components/styled-components/Button'
import { Input } from '../../../components/styled-components/Inputs';

const PasswordForm = ({ save }) => (
  <Form
    onSubmit={e => {
      e.preventDefault();

      const {
        oldPassword,
        password,
        passwordConfirm
      } = e.target;

      // TODO: client validation

      if (password.value !== passwordConfirm.value) {
        toastr.error('Error', 'Your new passwords do not match');
        return;
      }

      save(oldPassword.value, password.value);
    }}
  >
    <H3>Change password</H3>
    <FormGroup>
      <Label for="oldPassword">Old password:</Label>
      <Input name="oldPassword" id="oldPassword" type="password" />
    </FormGroup>
    <FormGroup>
      <Label for="password">New password:</Label>
      <Input name="password" id="password" type="password" />
    </FormGroup>
    <FormGroup>
      <Label for="passwordConfirm">New password again:</Label>
      <Input name="passwordConfirm" id="passwordConfirm" type="password" />
    </FormGroup>
    <Button primary>Save</Button>
  </Form>
);

export default PasswordForm;

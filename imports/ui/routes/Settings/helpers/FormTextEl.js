import React from 'react';
import { FormGroup, Label } from 'reactstrap';

import { Input } from '../../../components/styled-components/Inputs';

// Little helper component for creating text inputs
const FormTextEl = ({ user, name, labelText }) => (
  <FormGroup>
    <Label for={name}>{ labelText }</Label>
    <Input
      defaultValue={user[name]}
      id={name}
      name={name}
      type="text"
    />
  </FormGroup>
);

export default FormTextEl;

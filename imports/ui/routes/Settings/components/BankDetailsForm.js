import React from 'react';
import { Form } from 'reactstrap';
import { bankDetailsFields } from 'meteor/populous:constants';

import { H3 } from '../../../components/styled-components/Typography/headers';
import Button from '../../../components/styled-components/Button';
import FormTextEl from '../helpers/FormTextEl';

const BankDetailsForm = ({ currentUser, save }) => (
  <Form
    onSubmit={e => {
      e.preventDefault();

      // TODO: client validation

      const updates = {};

      // Setup updates object
      bankDetailsFields.forEach(f => {
        if (f !== 'iban') {

          // Replace non-numeric values like hypens and spaces
          updates[f] = e.target[f].value.replace(/\D/g, '');
        } else {
          updates[f] = e.target[f].value
        }
      });

      save(updates);
    }}
  >
    <H3>Bank details</H3>
    <FormTextEl
      user={currentUser}
      name="accountNumber"
      labelText="Account number:"
    />
    <FormTextEl
      user={currentUser}
      name="sortCode"
      labelText="Sort code:"
    />
    <FormTextEl
      user={currentUser}
      name="iban"
      labelText="IBAN:"
    />
    <Button primary>Save</Button>
  </Form>
);

export default BankDetailsForm;

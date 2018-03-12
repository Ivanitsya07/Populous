import { Accounts } from 'meteor/accounts-base';
import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

import store from '/imports/store';

Accounts.onEmailVerificationLink((token, done) => {
  Accounts.verifyEmail(token, err => {
    if (err) {
      toastr.error('Verification failed', err.reason);
    } else {
      toastr.success('Verification successful');
    }

    done();
    store.dispatch(push('/'));
  });
});

import { Meteor } from 'meteor/meteor';
import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import { userRoles } from 'meteor/populous:constants';
import { User } from 'meteor/populous:api';
import { loginAfter2FA } from '../../../../routes/Login/modules/actions/index';
import { requires2FA } from './requires2FA';
const moveTwoFAState = token => {
  return dispatch => {
    new User().callMethod('checkTwoFAToken', token, (err) => {
      if (err) {
        toastr.error('Error', err.reason);
      } else {
        Meteor.logout();
        dispatch(push('/'));
      }
    });
  };
};

export default moveTwoFAState;

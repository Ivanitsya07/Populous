import speakeasy from 'speakeasy';
import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

import { SET_2FA_KEY, } from '../';
import { SET_CURRENT_USER } from '../../../../wrappers/PrivateApp/modules';

// This thunk verifies the users code and saves
// the secret key to their user object
const verifyCode = code => {
  return (dispatch, getState) => {
    const {
      app: { currentUser },
      setup2FA: { key },
    } = getState();

    const verified = speakeasy.totp.verify({
      secret: key.string,
      encoding: 'hex',
      token: code
    });

    if (!verified) {
      toastr.error(
        'Error',
        'That code is invalid, please try again'
      );
      return;
    }

    currentUser.save2FASecret(key.string, (err, user) => {
      if (err) {
        toastr.error(
          'Error',
          'There was an error saving your 2FA code. Please try again'
        );
        return;
      }

      toastr.success(
        'Success',
        'Your 2-factor authentication is now setup'
      );

      dispatch({ type: SET_CURRENT_USER, user });
      dispatch(push('/'));
    });
  };
};

export default verifyCode;

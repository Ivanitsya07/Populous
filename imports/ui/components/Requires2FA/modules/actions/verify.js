import speakeasy from 'speakeasy';
import { toastr } from 'react-redux-toastr';

// This thunk verifies the users 2FA code and calls
// the child thunk if successful
const verify = code => {
  return (dispatch, getState) => {
    const {
      app: { currentUser },
      requires2FA: { onSuccess, args },
    } = getState();

    let secret;

    if (currentUser) {
      secret = currentUser.twoFAKey;
    } else {

      // The user is passed as the first arg
      secret = args[0].twoFAKey;
    }

    const verified = speakeasy.totp.verify({
      secret,
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

    // Call the success handler
    onSuccess();
  };
};

export default verify;

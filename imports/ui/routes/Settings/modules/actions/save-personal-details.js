import { toastr } from 'react-redux-toastr';

import { SET_CURRENT_USER } from '../../../../wrappers/PrivateApp/modules';
import { requires2FA } from '../../../../components/Requires2FA/modules/actions';

// This thunk saves changes to the users personal details
const savePersonalDetails = updates => {
  return (dispatch, getState) => {
    const { currentUser } = getState().app;

    currentUser.updatePersonalDetails(updates, (err, user) => {
      if (err) {
        toastr.error('Error', err.reason);
      } else {
        dispatch({ type: SET_CURRENT_USER, user });
        toastr.success('Success', 'Your details have been saved');
      }
    });
  };
};

export default requires2FA(savePersonalDetails);

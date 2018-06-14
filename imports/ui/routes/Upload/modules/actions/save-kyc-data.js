import { Meteor } from 'meteor/meteor';
import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

import { SET_CURRENT_USER } from '../../../../wrappers/PrivateApp/modules';
import { UPDATE_SAVING_STATE } from '../';

// This thunk takes all of the data from the KYC upload
// form and saves it to the user object.
const saveKYCData = formData => {
  return (dispatch, getState) => {
    const { currentUser } = getState().app;

    const KYCData = formData;

    delete KYCData.onlyAccountConfirmation;
    delete KYCData.personalIdentification;
    delete KYCData.bankStatements;

    // Save the data
    currentUser.saveKYCData(KYCData, currentUser.isBorrower(), (err, user) => {
      if (err) {
        toastr.error('Error while saving', err.reason);
      } else {

        dispatch(push('/settings'));
        toastr.success(
          'Saved successfully',
          "You'll hear from us within 48 hours"
        );

        // Update the user
        dispatch({ type: SET_CURRENT_USER, user });
      }

      dispatch({ type: UPDATE_SAVING_STATE, state: false });
    });

  }
};

export default saveKYCData;

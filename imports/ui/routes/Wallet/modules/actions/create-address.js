import { Meteor } from 'meteor/meteor';
import { toastr } from 'react-redux-toastr';

import { UPDATE_CREATING_ADDRESS } from '../';

// This thunk creates a new PPT address
// for the current user
const createAddress = () => {
  return (dispatch, getState) => {
    const { currentUser } = getState().app;

    dispatch({ type: UPDATE_CREATING_ADDRESS, state: true });

    // Create a new PPT address
    Meteor.call('ethComm.createPPTAddress', currentUser, (err) => {
      if (err) {
        toastr.error(
          'There was an error creating your PPT address. Please try again'
        );
        dispatch({ type: UPDATE_CREATING_ADDRESS, state: false });
        return;
      }
    });
  }
};

export default createAddress;

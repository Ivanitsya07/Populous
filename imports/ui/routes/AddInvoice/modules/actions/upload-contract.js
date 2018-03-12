import { Meteor } from 'meteor/meteor';
import { toastr } from 'react-redux-toastr';
import { encrypt } from 'meteor/populous:crypto';
import { push } from 'react-router-redux';

import {
  SET_REJECTED_FILE,
  RESET_ADD_INVOICE
} from '../';

// This thunk is the handler for the contact upload
// Dropzone component. If there are any files of
// incorrect format, we set them to the state. Accepted
// files are uploaded to IPFS and the hash saved to the
// current invoice
const uploadContract = (acceptedFiles, rejectedFiles) => {
  return (dispatch, getState) => {
    const {
      app: { currentUser },
      addInvoice: { currentInvoice },
    } = getState();

    if (!currentInvoice) {
      toastr.error('Error', 'No invoice found');
      return;
    }

    if (rejectedFiles.length > 0) {
      const file = rejectedFiles[0];
      dispatch({ type: SET_REJECTED_FILE, file });
      return;
    }

    dispatch({ type: SET_REJECTED_FILE, file: null });

    if (acceptedFiles.length === 0) {
      return;
    }

    const signedContract = acceptedFiles[0];

    // To get the raw data from the actual file we
    // need to use the FileReader API
    const reader = new FileReader();

    // Setup the event handlers
    reader.onload = () => {

      // Encrypt the signed contract string
      const encryptedContent = encrypt(reader.result);

      // TODO: Make the `path` prop something unique
      const file = {
        path: signedContract.name,
        content: encryptedContent.string
      };

      Meteor.call('ipfs.addFile', file, (err, res) => {
        if (err) {
          toastr.error('Error', err.reason);
          return
        }

        const signedContract = {
          signedContractIPFSHash: res.hash,
          signedContractIV: encryptedContent.iv
        };

        currentInvoice.saveSignedContract(signedContract, err => {
          if (err) {
            toastr.error('Error', err.reason);
          } else {
            toastr.success('Success', 'Invoice submitted!');
            dispatch(push(`/invoice/${currentInvoice._id}`));
            dispatch({ type: RESET_ADD_INVOICE });
          }
        });
      });
    };

    reader.onabort = () => {
      // dispatch({ type: FILE_LOADING, loading: false });
      toastr.error('Error', 'File reading was aborted. Please try again');
    };

    reader.onerror = () => {
      // dispatch({ type: FILE_LOADING, loading: false });
      toastr.error('Error', 'File reading failed. Please try again');
    };

    // Start the reading
    reader.readAsText(signedContract);
  };
};

export default uploadContract;

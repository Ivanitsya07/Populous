import { toastr } from 'react-redux-toastr';
import { encrypt } from 'meteor/populous:crypto';
import { File } from 'meteor/populous:api';

import {
  FILE_LOADING,
  FILE_SAVED,
  SET_SAVED_FILE,
  SET_REJECTED_FILE,
  SET_UPLOADED_INVOICE_ID,
} from '../';

// This thunk is the handler for the invoice file upload
// Dropzone component. If there are any files of
// incorrect format, we set them to the state. Accepted
// files are enrypted and uploaded to the DB
const uploadInvoiceFile = (acceptedFiles, rejectedFiles) => {
  return (dispatch, getState) => {
    const { app: { currentUser } } = getState();

    if (rejectedFiles.length > 0) {
      const file = rejectedFiles[0];
      dispatch({ type: SET_REJECTED_FILE, file });
      return;
    }

    dispatch({ type: SET_REJECTED_FILE, file: null });

    if (acceptedFiles.length === 0) {
      return;
    }

    dispatch({ type: FILE_LOADING, loading: true });

    const invoiceFile = acceptedFiles[0];

    // To get the raw data from the actual file we
    // need to use the FileReader API
    const reader = new FileReader();

    // Setup the event handlers
    reader.onload = () => {
      const fileData = reader.result;

      // This is an encypted data object { iv, string }
      const encryptedFileObj = encrypt(fileData);

      const file = new File({
        name: invoiceFile.name,
        encryptedFile: encryptedFileObj.string,
        encryptionIV: encryptedFileObj.iv
      });

      // Save to the DB
      file.callMethod('create', (err, { _id }) => {
        dispatch({ type: FILE_LOADING, loading: false });

        if (err) {
          toastr.error('Error', err.reason);
          return;
        }

        dispatch({ type: FILE_SAVED, saved: true });
        dispatch({ type: SET_SAVED_FILE, file: invoiceFile });
        dispatch({ type: SET_UPLOADED_INVOICE_ID, _id });
      });
    };

    reader.onabort = () => {
      dispatch({ type: FILE_LOADING, loading: false });
      toastr.error('Error', 'File reading was aborted. Please try again');
    };

    reader.onerror = () => {
      dispatch({ type: FILE_LOADING, loading: false });
      toastr.error('Error', 'File reading failed. Please try again');
    };

    // Start the reading
    reader.readAsBinaryString(invoiceFile);
  };
};

export default uploadInvoiceFile;

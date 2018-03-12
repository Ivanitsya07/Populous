import { toastr } from 'react-redux-toastr';
import { File } from 'meteor/populous:api';

import { requires2FA } from '../../../../components/Requires2FA/modules/actions';
import { UPDATE_SAVING_STATE } from '../';
import saveKYCData from './save-kyc-data';

/**
 *
 * @param reduxFormValues data coming from redux-form
 * @return thunk
 *
 This thunk takes the data from the KYC upload
 form and saves the bank statement and ID documents
 to the DB. It then passes those File's IDs and form
 data to the `saveKYCData` action which will save that
 info to the User object.
 */
const uploadKYCDocuments = reduxFormValues => {
  return (dispatch, getState) => {

    const { bankStatements, personalIdentification } = reduxFormValues;
    const { currentUser } = getState().app;

    dispatch({ type: UPDATE_SAVING_STATE, state: true });

    const numberOfBankStatements = bankStatements.length;
    const numberOfIdDocuments = personalIdentification.length;
    let uploadedBankStatements = [];
    let uploadedPersonalIdDocuments = [];

    if (numberOfBankStatements === 0) {
      toastr.error(
        'Missing documents',
        'Please upload at least one bank statement document'
      );
      dispatch({ type: UPDATE_SAVING_STATE, state: false });
      return;
    }

    if (numberOfIdDocuments === 0) {
      toastr.error(
        'Missing documents',
        'Please upload at least one identification document'
      );
      dispatch({ type: UPDATE_SAVING_STATE, state: false });
      return;
    }

    // The onlyAccount field is only shown for borrowers
    if (currentUser.isBorrower()) {
      if (!reduxFormValues.onlyAccountConfirmation) {
        toastr.error(
          'Multiple accounts not allowed',
          `Populous only allows one account per business.
           Please log in to your other account`
        );
        dispatch({ type: UPDATE_SAVING_STATE, state: false });
        return;
      }
    }

    // This closure allows the onload to be kept DRY
    // It converts the file data and sends it to the server
    // for encoding, encryption and saving to the DB. We get back
    // the _id for the saved File object so we can save it
    const onload = (reader, uploadedFiles, file) => {
      return () => {
        const fileData = reader.result;

        // We need to convert the standard ArrayBuffer into a
        // Unit8Array to send to the server
        const fileDataUint8 = new Uint8Array(fileData);

        // Create an empty file instance
        const f = new File({ name: file.name });

        // Save to the DB
        f.callMethod('createFromArrayBuffer', fileDataUint8, (err, { _id }) => {
          if (err) {
            toastr.error('Error', err.reason);
            dispatch({ type: UPDATE_SAVING_STATE, state: false });
            return;
          }

          uploadedFiles.push(_id);

          // If all of the documents have been uploaded, save.
          if (
            numberOfBankStatements === uploadedBankStatements.length &&
            numberOfIdDocuments === uploadedPersonalIdDocuments.length
          ) {

            // Save the KYC data to the user object
            dispatch(saveKYCData({
              ...reduxFormValues,
              uploadedBankStatements,
              uploadedPersonalIdDocuments,
            }));
          }
        });
      };
    };

    const onabort = () => {
      dispatch({ type: UPDATE_SAVING_STATE, state: false });
      toastr.error('Error', 'File reading was aborted. Please try again');
    };

    const onerror = () => {
      dispatch({ type: UPDATE_SAVING_STATE, state: false });
      toastr.error('Error', 'File reading failed. Please try again');
    };

    // Another closure for keeping this code DRY.
    // We need to pass the file to the onload closure so
    // we can access the file.name property for saving.
    const getFileData = uploadedFiles => {
      return file => {
        const reader = new FileReader();
        reader.onabort = onabort;
        reader.onerror = onerror;
        reader.onload = onload(reader, uploadedFiles, file);
        reader.readAsArrayBuffer(file);
      };
    };

    // Start reading the files
    bankStatements.forEach(getFileData(uploadedBankStatements));
    personalIdentification.forEach(getFileData(uploadedPersonalIdDocuments));
  }
};

export default requires2FA(uploadKYCDocuments);

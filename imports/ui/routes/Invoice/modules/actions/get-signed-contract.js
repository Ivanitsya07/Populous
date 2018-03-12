import { Meteor } from 'meteor/meteor';
import { toastr } from 'react-redux-toastr';
import { decrypt } from 'meteor/populous:crypto';

// This thunk is called when the user wants to download
// the contract PDF signature file. It gets the current invoice's
// hash and pulls the data from IPFS, decrypts it and initiates
// the download
const getSignedContract = () => {
  return (dispatch, getState) => {
    const { invoice } = getState().invoiceDetail;

    if (!invoice) {
      toastr.error('Error', 'No invoice found. Please refresh the page');
      return;
    }

    const hash = invoice.signedContractIPFSHash;

    Meteor.call('ipfs.getFile', hash, (err, res) => {
      if (err) {
        toastr.error('Error', err.reason);
        return
      }

      const fileName = invoice._id + '_signed.pdf.sig';
      const signedContract = decrypt(res, invoice.signedContractIV);

      const blob = new Blob([signedContract], { type: 'text/plain' });

      // Create a fake element and start the download
      const element = document.createElement('a');
      document.body.appendChild(element);
      element.setAttribute('href', window.URL.createObjectURL(blob));
      element.setAttribute('download', fileName);
      element.style.display = '';
      element.click();
      document.body.removeChild(element);
    });
  };
};

export default getSignedContract;

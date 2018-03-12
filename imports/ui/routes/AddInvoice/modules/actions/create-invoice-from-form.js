import { toastr } from 'react-redux-toastr';
import { Invoice } from 'meteor/populous:api';
import { currencies } from 'meteor/populous:constants';
import {
  SHOW_CONTRACT_DOWNLOAD,
  SET_CURRENT_INVOICE,
  FILE_SAVED,
  SET_UPLOADED_INVOICE_ID,
} from '../';

// This thunk takes a form submission event's values
// object and attempts to create a new Invoice
const createInvoiceFromForm = values => {
  return (dispatch, getState) => {
    const { uploadedInvoiceId } = getState().addInvoice;

    if (!uploadedInvoiceId) {
      toastr.error('Error', 'Please upload your invoice');
      return;
    }

    const currency = currencies[values.currencies];

    const invoice = new Invoice({
      currency,
      invoiceNumber: values.Invoicenumber,
      dueDate: new Date(Date.parse(values.DueDate)),
      debtorName: values.DebtorName,
      invoiceFileId: values.uploadedInvoiceId
    });

    // Make sure we pass a number to get the right error
    const amount = parseInt(values.Amount);
    const salePrice = parseInt(values.SaleGoal);

    // If parseInt fails, it will be falsy
    invoice.amount = amount ? amount : 0;
    invoice.salePrice = salePrice ? salePrice : 0;

    invoice.create((err, newInvoice) => {
      if (err) {
        toastr.error('Error', err.reason);
      } else {
        dispatch({ type: SHOW_CONTRACT_DOWNLOAD });
        dispatch({
          type: SET_CURRENT_INVOICE,
          invoice: newInvoice
        });
        dispatch({ type: FILE_SAVED, saved: false });
        dispatch({ type: SET_UPLOADED_INVOICE_ID, _id: null });
      }
    });
  };
};

export default createInvoiceFromForm;

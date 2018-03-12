import jsPDF from 'jspdf';
import { User } from 'meteor/populous:api';

// This thunk creates a PDF contact from the Invoice data
// in the current state. It triggers an automatic download
// for the client
const downloadContract = () => {
  return (dispatch, getState) => {
    const { addInvoice: { currentInvoice } } = getState();

    if (!currentInvoice) {
      throw new Error('No invoice found');
    }

    const borrower = User.findOne(currentInvoice.borrowerId);

    if (!borrower) {
      throw new Error('No user found for this invoice');
    }

    const doc = new jsPDF();

    doc.setFontSize(24);
    doc.setFontStyle('bold');
    doc.text(10, 25, 'POPULOUS WORLD RECOURSE');

    doc.setFontSize(16);
    doc.text(10, 40, 'INVOICE DISCOUNTING AGREEMENT MADE WITH:');
    doc.text(10, 48, borrower.fullName());

    doc.setFontStyle('normal');
    doc.setFontSize(14);
    doc.text(10, 60, 'Invoice ID:');
    doc.text(65, 60, currentInvoice._id);
    doc.text(10, 67, 'Invoice number:');
    doc.text(65, 67, currentInvoice.invoiceNumber);
    doc.text(10, 74, 'Currency:');
    doc.text(65, 74, currentInvoice.currency);
    doc.text(10, 81, 'Amount:');
    doc.text(65, 81, currentInvoice.amount.toString());
    doc.text(10, 88, 'Sale target:');
    doc.text(65, 88, currentInvoice.salePrice.toString());
    doc.text(10, 95, 'Debtor:');
    doc.text(65, 95, currentInvoice.debtorName);
    doc.text(10, 102, 'Borrower:');
    doc.text(65, 102, borrower.fullName());
    doc.text(10, 109, 'Borrower Ethereum ID:');
    doc.text(65, 109, borrower.ethId());

    // TODO: Make name unique
    doc.save(`populous-invoice-contract.pdf`);
  };
};

export default downloadContract;

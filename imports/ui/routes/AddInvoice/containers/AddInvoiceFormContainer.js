import { connect } from 'react-redux';

import AddInvoiceForm from '../components/AddInvoiceForm';
import { UPDATE_CURRENT_AMOUNT } from '../modules';
import {
  createInvoiceFromForm,
  uploadInvoiceFile
} from '../modules/actions';

const mapStateToProps = ({ addInvoice }) => {
  const { rejectedFile, fileLoading, fileSaved, currentAmount, uploadedInvoiceId } = addInvoice;
  return { rejectedFile, fileLoading, fileSaved, currentAmount, uploadedInvoiceId };
};

const mapDispatchToProps = dispatch => ({
  createInvoice: reduxFormValues => dispatch(createInvoiceFromForm(reduxFormValues)),
  updateCurrentAmount: e => dispatch({
    type: UPDATE_CURRENT_AMOUNT,
    amount: e.target.value
  }),
  uploadInvoiceFile: (a, r) => dispatch(uploadInvoiceFile(a,r ))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInvoiceForm)

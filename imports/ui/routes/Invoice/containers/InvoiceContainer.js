import { Meteor } from 'meteor/meteor';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withTracker } from 'meteor/react-meteor-data';
import { Invoice as InvoiceAPI } from 'meteor/populous:api';

import Invoice from '../components/Invoice';
import { getSignedContract } from '../modules/actions';
import {
  SET_INVOICE,
  INVOICE_DETAIL_READY,
  RESET_INVOICE_DETAIL
} from '../modules';

const reduxData = connect(
  state => ({ ...state.app, ...state.invoiceDetail }),
  dispatch => ({
    getSignedContract: () => dispatch(getSignedContract()),
    init: invoice => {
      dispatch({ type: SET_INVOICE, invoice });
      dispatch({ type: INVOICE_DETAIL_READY });
    },
    reset: () => dispatch({ type: RESET_INVOICE_DETAIL }),
    noInvoiceFound: () => dispatch(push('/')) // TODO: Push to 404
  })
);

// Subscribe to the meteor db and init the store
const meteorData = withTracker(({ loading, init, ...props }) => {
  const { match: { params: { invoiceId } }, noInvoiceFound } = props;

  // Make sure the data for the current invoice is available
  const invoiceSubscription = Meteor.subscribe('invoices.id', invoiceId);

  // If the data is ready, init the state with the invoice data
  if (loading && invoiceSubscription.ready()) {
    const invoice = InvoiceAPI.findOne(invoiceId);

    if (invoice) {
      init(invoice);
    } else {
      noInvoiceFound();
    }
  }

  // We have to return an object for withTracker to work
  return {};
});

// Let reduxData override any values set in meteorData
export default compose(reduxData, meteorData)(Invoice);

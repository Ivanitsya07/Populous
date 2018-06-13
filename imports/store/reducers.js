import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { routerReducer } from 'react-router-redux'

import app from '../ui/wrappers/PrivateApp/modules';
import InvoicesList from '../ui/routes/Invoices/modules';
import addInvoice from '../ui/routes/AddInvoice/modules';
import invoiceDetail from '../ui/routes/Invoice/modules';
import uploadKYC from '../ui/routes/Upload/modules';
import setup2FA from '../ui/routes/Setup2FA/modules';
import wallet from '../ui/routes/Wallet/modules';
import requires2FA from '../ui/components/Requires2FA/modules';

const rootReducer = combineReducers({
  form: formReducer, // Redux Form has to have key 'form'
  router: routerReducer,
  toastr: toastrReducer,
  app,
  InvoicesList,
  addInvoice,
  invoiceDetail,
  uploadKYC,
  setup2FA,
  requires2FA,
  wallet
});

export default rootReducer;

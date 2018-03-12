export const SET_INVOICE = 'INVOICE/SET_INVOICE';
export const INVOICE_DETAIL_READY = 'INVOICE/INVOICE_DETAIL_READY';
export const RESET_INVOICE_DETAIL = 'INVOICE/RESET_INVOICE_DETAIL';

const initialState = {
  loading: true,
  invoice: null,
};

const invoiceDetail = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICE:
      return { ...state, invoice: action.invoice };

    case INVOICE_DETAIL_READY:
      const loading = typeof(action.state) === 'boolean'
        ? action.state : false;
      return { ...state, loading };

    case RESET_INVOICE_DETAIL:
      return initialState;

    default:
      return state;
  }
};

export default invoiceDetail;

export const SHOW_CONTRACT_DOWNLOAD = 'ADD_INVOICE/SHOW_CONTRACT_DOWNLOAD';
export const SET_CURRENT_INVOICE = 'ADD_INVOICE/SET_CURRENT_INVOICE';
export const SET_REJECTED_FILE = 'ADD_INVOICE/SET_REJECTED_FILE';
export const FILE_LOADING = 'ADD_INVOICE/FILE_LOADING';
export const FILE_SAVED = 'ADD_INVOICE/FILE_SAVED';
export const SET_SAVED_FILE = 'ADD_INVOICE/SET_SAVED_FILE';
export const SET_UPLOADED_INVOICE_ID = 'ADD_INVOICE/SET_UPLOADED_INVOICE_ID';
export const UPDATE_CURRENT_AMOUNT = 'ADD_INVOICE/UPDATE_CURRENT_AMOUNT';
export const RESET_ADD_INVOICE = 'ADD_INVOICE/RESET_ADD_INVOICE';

const initialState = {
  showContactDownload: false,
  currentInvoice: null,
  rejectedFile: null,
  fileLoading: false,
  fileSaved: false,
  savedFile: null,
  uploadedInvoiceId: null,
  currentAmount: 0
};

const addInvoice = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_AMOUNT:
      return { ...state, currentAmount: action.amount };

    case SHOW_CONTRACT_DOWNLOAD:
      return { ...state, showContactDownload: true };

    case SET_CURRENT_INVOICE:
      return { ...state, currentInvoice: action.invoice };

    case SET_REJECTED_FILE:
      return { ...state, rejectedFile: action.file };

    case FILE_LOADING:
      return { ...state, fileLoading: action.loading };

    case FILE_SAVED:
      return { ...state, fileSaved: action.saved };

    case SET_SAVED_FILE:
      return { ...state, savedFile: action.file };

    case SET_UPLOADED_INVOICE_ID:
      return { ...state, uploadedInvoiceId: action._id };

    case RESET_ADD_INVOICE:
      return { ...initialState };

    default:
      return state;
  }
};

export default addInvoice;

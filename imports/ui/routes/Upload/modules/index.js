export const UPDATE_AVERAGE_VALUE = 'UPLOAD_KYC/UPDATE_AVERAGE_VALUE';
export const UPDATE_AVERAGE_VOLUME = 'UPLOAD_KYC/UPDATE_AVERAGE_VOLUME';
export const REMOVE_BANK_STATEMENT = 'UPLOAD_KYC/REMOVE_BANK_STATEMENT';
export const REMOVE_ID_DOCUMENT = 'UPLOAD_KYC/REMOVE_ID_DOCUMENT';
export const UPDATE_SAVING_STATE = 'UPLOAD_KYC/UPDATE_SAVING_STATE';

const initialState = {
  saving: false,
};

const upload = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SAVING_STATE:
      return { ...state, saving: action.state };
    default:
      return state;
  }
};

export default upload;

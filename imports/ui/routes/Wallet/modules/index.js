export const UPDATE_CREATING_ADDRESS = 'WALLET/UPDATE_CREATING_ADDRESS';

const initialState = {
  creatingAddress: false,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_CREATING_ADDRESS:
      return { ...state, creatingAddress: action.state };

    default:
      return state;
  }
};

export default wallet;

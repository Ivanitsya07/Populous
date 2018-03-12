export const SET_CURRENT_USER = 'APP/SET_CURRENT_USER';
export const APP_LOADING = 'APP/APP_LOADING';

const initialState = {
  currentUser: null,
  loading: true,
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.user };

    case APP_LOADING:
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};

export default app;

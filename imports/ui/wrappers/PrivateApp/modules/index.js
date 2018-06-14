import {STOP_SUBSCRIPTION} from "meteor-redux-middlewares";

export const ACCOUNTS_USER_SUBSCRIPTION_READY = 'ACCOUNTS_USER_SUBSCRIPTION_READY';
export const ACCOUNTS_USER_SUBSCRIPTION_CHANGED = 'ACCOUNTS_USER_SUBSCRIPTION_CHANGED';
export const ACCOUNTS_USER_SUB = 'accounts.user';

const initialState = {
  currentUser: null,
  loading: true,
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case ACCOUNTS_USER_SUBSCRIPTION_READY:
      return {...state, loading: !action.payload.ready};

    case ACCOUNTS_USER_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        currentUser: action.payload[0]
      };

    case STOP_SUBSCRIPTION:
      if (action.payload === ACCOUNTS_USER_SUB) {
        return {...state, currentUser: null};
      }

    default:
      return state;
  }
};

export default app;

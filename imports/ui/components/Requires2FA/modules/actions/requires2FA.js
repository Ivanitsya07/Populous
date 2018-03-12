import {
  SHOW_2FA_CHECKER,
  RESET_2FA_CHECKER
} from '../';

const requires2FA = (child, onCancel) => {
  return (...args) => {
    return dispatch => {
      dispatch({
        type: SHOW_2FA_CHECKER,
        args, // set args incase we need them
        onSuccess: () => {

          // Run the child thunk
          // (it might be an action creator or a action)
          if (typeof child === 'function') {
            dispatch(child(...args));
          } else {
            dispatch(child);
          }
          dispatch({ type: RESET_2FA_CHECKER });
        },
        onCancel: () => {

          // Call the provided onCancel function if it exists
          onCancel && onCancel();
          dispatch({ type: RESET_2FA_CHECKER });
        },
      });
    }
  }
};

export default requires2FA;

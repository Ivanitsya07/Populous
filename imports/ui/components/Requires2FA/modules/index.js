export const SHOW_2FA_CHECKER = 'REQUIRES_2FA/SHOW_2FA_CHECKER';
export const RESET_2FA_CHECKER = 'REQUIRES_2FA/RESET_2FA_CHECKER';

const initialState = {
  show2FAChecker: false,
  args: null,
  onSuccess: null,
  onCancel: null,
};

const requires2FA = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_2FA_CHECKER:
      return {
        ...state,
        show2FAChecker: true,
        args: action.args,
        onSuccess: action.onSuccess,
        onCancel: action.onCancel,
      };

    case RESET_2FA_CHECKER:
      return { ...initialState };

    default:
      return state;
  }
};

export default requires2FA;

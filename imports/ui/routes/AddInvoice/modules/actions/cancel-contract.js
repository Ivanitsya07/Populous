import { toastr } from 'react-redux-toastr';
import {
  RESET_ADD_INVOICE
} from '../';

const cancelContract = () => {
  return (dispatch) => {
    dispatch({ type: RESET_ADD_INVOICE });
    toastr.warning('Cancelled adding invoice');
  };
};

export default cancelContract;

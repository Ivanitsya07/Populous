import { connect } from 'react-redux';

import TwoFAKeyResetForm from '../components/TwoFAKeyResetForm';
import { sendTwoFAKeyResetEmail } from '../modules/actions';

export default connect(null, { sendTwoFAKeyResetEmail })(TwoFAKeyResetForm);

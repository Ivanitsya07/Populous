import { connect } from 'react-redux';

import PasswordResetForm from '../components/PasswordResetForm';
import { sendPasswordResetEmail } from '../modules/actions';

export default connect(null, { sendPasswordResetEmail })(PasswordResetForm);

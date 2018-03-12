import { connect } from 'react-redux';

import PasswordForm from '../components/PasswordForm';
import { saveNewPassword } from '../modules/actions';

const mapDispatchToProps = dispatch => ({
  save: (o, n) => dispatch(saveNewPassword(o, n)),
});

export default connect(
  null,
  mapDispatchToProps
)(PasswordForm)

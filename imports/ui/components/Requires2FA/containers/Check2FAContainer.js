import { connect } from 'react-redux';

import Check2FA from '../components/Check2FA';
import { verify } from '../modules/actions';

const mapStateToProps = ({ requires2FA }) => ({
  show: requires2FA.show2FAChecker,
  onCancel: requires2FA.onCancel,
});

const mapDispatchToProps = dispatch => ({
  verify: code => { dispatch(verify(code)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Check2FA)

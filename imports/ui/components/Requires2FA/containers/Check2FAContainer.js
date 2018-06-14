import { connect } from 'react-redux';
import { compose } from 'redux';

import Check2FA from '../components/Check2FA';
import { verify, moveTwoFAState } from '../modules/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ requires2FA }) => ({
  show: requires2FA.show2FAChecker,
  onCancel: requires2FA.onCancel
});

const mapDispatchToProps = dispatch => ({
  verify: code => {
    dispatch(verify(code));
  },
  moveTwoFAState: token => {
    dispatch(moveTwoFAState(token));
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Check2FA);

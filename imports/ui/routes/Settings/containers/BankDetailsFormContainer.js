import { connect } from 'react-redux';

import BankDetailsForm from '../components/BankDetailsForm';
import { saveBankDetails } from '../modules/actions';

const mapStateToProps = ({ app }) => ({
  currentUser: app.currentUser,
});

const mapDispatchToProps = dispatch => ({
  save: u => dispatch(saveBankDetails(u)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankDetailsForm)

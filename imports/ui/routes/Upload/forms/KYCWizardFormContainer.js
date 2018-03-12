import { connect } from 'react-redux';

import KYCWizardForm from './KYCWizardForm'
import { uploadKYCDocuments } from '../modules/actions';

const mapStateToProps = ({ app, form: { wizard }, uploadKYC }) => ({
  currentUser: app.currentUser,
  saving: uploadKYC.saving,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(uploadKYCDocuments(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KYCWizardForm)

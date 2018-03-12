import { connect } from 'react-redux';

import AddInvoice from '../components/AddInvoice';

const mapStateToProps = ({ app, addInvoice }) => ({
  currentUser: app.currentUser,
  showContactDownload: addInvoice.showContactDownload,
});

export default connect(
  mapStateToProps
)(AddInvoice)

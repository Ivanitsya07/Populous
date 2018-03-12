import { connect } from 'react-redux';

import UploadContract from '../components/UploadContract';
import { uploadContract } from '../modules/actions';

const mapStateToProps = ({ addInvoice: { rejectedFile } }) => ({
  rejectedFile
});

export default connect(
  mapStateToProps,
  {
    upload: uploadContract
  }
)(UploadContract)

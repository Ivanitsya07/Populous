import { connect } from 'react-redux';

import DownloadContract from '../components/DownloadContract';
import { downloadContract, cancelContract } from '../modules/actions';

export default connect(
  null,
  {
    download: downloadContract,
    cancel: cancelContract
  }
)(DownloadContract)

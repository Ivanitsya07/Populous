import React from 'react';
import { statuses } from 'meteor/populous:constants';

import UnverifiedBanner from '../../../components/UnverifiedBanner';
import AddInvoiceForm from '../containers/AddInvoiceFormContainer';
import DownloadContract from '../containers/DownloadContractContainer';

/**
 * @description
 * https://docs.google.com/document/d/15HJpQEo5kYnlmyPNKemb_dNUUvbttPrvRlkN_qC6Mc4/edit?usp=sharing
 */
const AddInvoice = props => {
  const { currentUser, showContactDownload } = props;

  if (currentUser.KYCStatus !== statuses.verified) {
    return <UnverifiedBanner status={currentUser.KYCStatus} />;
  }

  return (
    <div>
      { showContactDownload ?
        <DownloadContract /> :
        <AddInvoiceForm />
      }
    </div>
  );
};

export default AddInvoice;

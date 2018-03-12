import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import {
  H3,
  H5
} from '../../../components/styled-components/Typography/headers';
import Button from '../../../components/styled-components/Button';
import UploadContract from '../containers/UploadContractContainer';

const DownloadContract = ({ download, cancel }) =>
  <div>
    <H3>Successfully created invoice contract</H3>
    <H5>Next steps</H5>
    <ListGroup>
      <ListGroupItem>
        <p>1. Download the invoice contract</p>
        <Button primary onClick={download}>
          Download Contract
        </Button>
      </ListGroupItem>
      <ListGroupItem>
        <p>2. Sign the '.pdf' file with your signature</p>
      </ListGroupItem>
      <ListGroupItem>
        <p>
          3. Upload the '.pdf' file you signed, back onto the Populous platform
        </p>
        <UploadContract />
      </ListGroupItem>
    </ListGroup>


    <Button onClick={cancel}>Cancel</Button>
  </div>;

export default DownloadContract;

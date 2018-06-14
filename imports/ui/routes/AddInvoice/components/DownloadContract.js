import React from 'react';
import { Row, Col } from 'reactstrap';

import { H2, P, Small } from '../../../components/styled-components/Typography/headers';
import Button from '../../../components/styled-components/Button';
import UploadContract from '../containers/UploadContractContainer';

const DownloadContract = ({ download, cancel }) => (
  <Row>
    <Col xs={{ size: '12' }} lg={{ size: '12' }}>
      <Row>
        <Col className="text-center m-t-40 m-b-30">
          <H2 transform="uppercase" opacity={0.8}>Sign Contract</H2>
        </Col>
      </Row>
      <Row>
        <Col xs={'12'} md={'8'} className="p-l-20 p-r-20 m-t-10 text-center">
          <P opacity={0.8} className="text-left">Each invoice requires a signed contract between you and Populous because et ornare ante lorem a purus. Learn more in our <a href="#">terms and conditions.</a></P>
          <P opacity={0.8} className="text-left">Please print the contract, sign it and upload here. You can also do this later. Your invoice is already available in My Invoices.</P>
          <P opacity={0.8} className="text-left">Note that invoice won’t be approved until you upload the signed contract for it.</P>
          <Button primary
            width="315px"
            className="m-t-20"
            onClick={download}
          >
            <i className="fa fa-download" /> Download Contract to Sign
          </Button>
        </Col>
        <Col xs={'12'} md={'4'} className="p-l-30 p-r-30 m-t-10">
          <UploadContract/>
        </Col>
      </Row>
      <Row>
        <Col className="text-center m-t-40 m-b-30">
          <Button width="190px" onClick={cancel} >
            Back to Invoice
          </Button>
          <Button primary width="190px" >
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="m-b-30">
        <Col md={{ size: '10', offset: 1 }} lg={{ size: '8', offset: 2 }}>
          <Small opacity={0.8}>Invoice auction will be activated after administrator approval. Auction duration is 24 hours. You are free to select the winner before it ends or cancel it at any time.</Small>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default DownloadContract;

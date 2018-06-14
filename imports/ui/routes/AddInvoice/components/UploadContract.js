import React from 'react';
import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';
import { Alert } from 'reactstrap';

const dropzoneStyle = {
  width: '100%',
  height: '360px',
  cursor: 'pointer',
  border: '2px dashed #A5ACB5',
  posistion: 'relative',
  textAlign: 'center'
};

const iconStyle = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)'
};

const btnStyle = {
  position: 'relative',
  top: 'calc(100% - 105px)',
  transform: 'translateY(-50%)'
};

const UploadContract = ({ upload, rejectedFile }) =>
  <div>
    <Dropzone onDrop={upload} accept=".pdf" style={dropzoneStyle}>
      <img src="./img/img-contract-icon.png" height={80} style={iconStyle} />
      <div className="text-center" style={btnStyle}>
        <a href="javascript:;">UPLOAD SIGNED CONTRACT</a>
      </div>
    </Dropzone>

    {rejectedFile &&
      rejectedFile.name.includes('.pdf') &&
      <Alert color="danger">
        <b>{rejectedFile.name}</b> isn't the right format,
          please upload your invoice as a PDF.
      </Alert>}
  </div>;

export default UploadContract;

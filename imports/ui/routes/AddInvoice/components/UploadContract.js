import React from 'react';
import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';
import { Alert } from 'reactstrap';

const dropzoneStyle = {
  width: '100%',
  height: '100%',
  cursor: 'pointer'
};

// Because Files are usually uploading by
// people clicking a button and bringing up a File window
const fakeButton = {
  backgroundColor: '#373d5c',
  padding: '6 12 12 6',
  color: '#fff'
};

const UploadContract = ({ upload, rejectedFile }) =>
  <div>
    <Dropzone onDrop={upload} accept=".pdf">
      <Alert color={'info'}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesome name="file" />
          <h6>Drop your invoice file here</h6>
          <p>or</p>
          <div style={fakeButton}>
            Select File
          </div>
          <small>
            PDF only
          </small>
        </div>
      </Alert>
    </Dropzone>

    {rejectedFile &&
      rejectedFile.name.includes('.pdf') &&
      <Alert color="danger">
        <p>
          '{rejectedFile.name}' isn't the right format,
          please upload your invoice as a .pdf.
        </p>
      </Alert>}
    }
  </div>;

export default UploadContract;

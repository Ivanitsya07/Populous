import React from 'react';
import { Alert } from 'reactstrap';
import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';

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

const AddInvoiceDropzone = ({
  uploadInvoiceFile,
  rejectedFile,
  fileLoading,
  fileSaved
}) =>
  <div>
    { !fileLoading &&
      !fileSaved &&
      <Dropzone
        onDrop={uploadInvoiceFile}
        accept=".pdf, .doc, .docx, .pages, .xls, .xlsx, .numbers"
        style={dropzoneStyle}
      >
        <Alert color={'info'}>
          <div style={{ textAlign: 'center' }}>
            <FontAwesome name="file" />
            <h6>Drop your invoice file here</h6>
            <p>or</p>
            <div style={fakeButton}>
              Select File
            </div>
            <small>
              Accepted formats: .pdf, .doc, .docx, .pages, .xls, .xlsx, .numbers
            </small>
          </div>
        </Alert>
      </Dropzone>}

    {fileLoading &&
      <Alert color="info">
        <div style={{ textAlign: 'center' }}>
          Uploading to IPFS
        </div>
      </Alert>}
    {fileSaved && <Alert color="success"><div>File saved</div></Alert>}

    {rejectedFile &&
      <Alert color="danger">
        <p>
          '{rejectedFile.name}' isn't the right format,
          please upload your invoice as a .pdf.
        </p>
      </Alert>}

  </div>;

export default AddInvoiceDropzone;

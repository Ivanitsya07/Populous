import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { Document, Page, setOptions } from 'react-pdf/build/entry.noworker';

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});

const dropzoneStyle = {
  width: '100%',
  height: '400px',
  cursor: 'pointer',
  border: '2px dashed #A5ACB5',
  posistion: 'relative',
  textAlign: 'center'
};

const resultStyle = {
  cursor: 'pointer',
  border: '2px solid #A5ACB5',
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
  top: 'calc(100% - 100px)',
  transform: 'translateY(-50%)'
};

const AddInvoiceDropzone = ({
  uploadInvoiceFile,
  rejectedFile,
  fileLoading,
  fileSaved,
  savedFile
}) =>
  <div>
    { !fileLoading &&
      !fileSaved &&
      <Dropzone
        onDrop={uploadInvoiceFile}
        accept=".pdf"
        style={dropzoneStyle}
        disablePreview={true}
        className="custom-dropzone"
      >
        <img src="./img/img-invoice-icon.png" height={80} style={iconStyle} />
        <div className="text-center" style={btnStyle}>
          <a href="javascript:;">UPLOAD INVOICE</a>
        </div>
      </Dropzone>}

    {fileLoading &&
      <div style={dropzoneStyle}>
        <span style={iconStyle}>Uploading to IPFS</span>
      </div>}
    {fileSaved && savedFile &&
      <div style={resultStyle}>
        <Document file={savedFile}>
          <Page className="custom" pageNumber={1} />
        </Document>
      </div>}

    {rejectedFile &&
      <UncontrolledAlert color="danger">
        <b>{rejectedFile.name}</b> isn't the right format,
        please upload your invoice as PDF.
      </UncontrolledAlert>}
  </div>;

export default AddInvoiceDropzone;

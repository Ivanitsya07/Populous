import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Button, Card, Fade, Row, Col } from 'reactstrap';
import { Small, P } from '../components/styled-components/Typography/headers';

const dropzoneStyle = {
};

// Because Files are usually uploading by
// people clicking a button and bringing up a File window
const fakeButton = {
  backgroundColor: '#5ea0f3',
  color: '#fff',
  maxWidth: '210px',
  padding: '6px 4px',
  margin: 'auto',
  textTransform: 'uppercase',
  cursor: 'pointer'
};

// Originally Taken from
// https://github.com/BBB/dropzone-redux-form-example/blob/master/src/App.js
// Added Reactstrap and removing files
const renderDropzoneInput = props => {
  const files = props.input.value;
  // Pass onChange an array of Files with the file at the index removed.
  const removeFileFromFilesArray = index =>
    props.input.onChange(() => props.input.value.splice(index, 1));
  return (
    <Row className="m-t-10">
      <Col className="text-center" xs={12} md={files.length > 0 ? 6 : 12}>
        <p><small>{props.uploadFileTypeDesc}</small></p>
        <Dropzone
          name={props.name}
          onDrop={(filesToUpload, e) => props.input.onChange(filesToUpload)}
          style={dropzoneStyle}
        >
          <div style={fakeButton}>
            <i className="fa fa-upload fa-fw"></i> Upload Documents
          </div>
        </Dropzone>
        {props.meta.touched &&
          props.meta.error &&
          <span className="error">{props.meta.error}</span>}
      </Col>

      <Fade className="col" in={files.length > 0}>
        {files.length > 0 &&
          Array.isArray(files) &&
          <p className="m-b-10"><small>Already Uploaded</small></p>}
        {files &&
          Array.isArray(files) &&
          files.map((file, i) =>
            <Row className="border-row" key={i}>
              <Col xs={10}>
                <P opacity={0.8
                }>{` ${file.name} `}</P>
              </Col>
              <Col xs={2} className="text-right">
                <a href="javascript:;" onClick={e => removeFileFromFilesArray(i)}><img src="./img/icons/delete.png" height={18} /></a>
              </Col>
            </Row>
          )}
      </Fade>
    </Row>
  );
};

renderDropzoneInput.propTypes = {
  acceptedFiles: PropTypes.string,
  uploadFileTypeDesc: PropTypes.string
};

export default renderDropzoneInput;

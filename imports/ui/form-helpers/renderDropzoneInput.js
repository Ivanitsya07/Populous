import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Button, Card, Fade } from 'reactstrap';
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
  color: '#fff',
  maxWidth: '163px',
  padding: '6px 4px',
  margin: 'auto',
  marginBottom: '10px'
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
    <div>
      <Dropzone
        name={props.name}
        onDrop={(filesToUpload, e) => props.input.onChange(filesToUpload)}
        style={dropzoneStyle}
      >
        <Card>
          <div style={{ textAlign: 'center', padding: '8px' }}>
            <FontAwesome name="file" />
            <h6>Drop your {props.uploadFileTypeDesc} here</h6>
            <p>or</p>
            <div style={fakeButton}>
              Select Files
            </div>
            <small>
              Accepted formats: {props.acceptedFiles}
            </small>
          </div>
        </Card>
      </Dropzone>

      <div style={{ height: '8px' }} />

      {props.meta.touched &&
        props.meta.error &&
        <span className="error">{props.meta.error}</span>}

      <Fade in={files.length > 0}>
        {files &&
          Array.isArray(files) &&
          <strong><p>Uploaded {props.uploadFileTypeDesc}:</p></strong>}
        {files &&
          Array.isArray(files) &&
          files.map((file, i) =>
            <p key={i}>
              {` ${file.name} `}
              <Button outline color="danger" size="sm">
                <FontAwesome
                  name="times"
                  onClick={e => removeFileFromFilesArray(i)}
                />
              </Button>
            </p>
          )}
      </Fade>
    </div>
  );
};

renderDropzoneInput.propTypes = {
  acceptedFiles: PropTypes.string,
  uploadFileTypeDesc: PropTypes.string
};

export default renderDropzoneInput;

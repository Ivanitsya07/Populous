import React from 'react';

import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import PasswordResetFormContainer from "../ResetPassword/containers/PasswordResetFormContainer";

const PasswordReset = ({open, toggle}) =>
  <Modal isOpen={open} className="custom" toggle={toggle}>
    <ModalHeader toggle={toggle}>Password reset</ModalHeader>
    <ModalBody>
      <div style={{margin: '20px 0',}}>
        <div style={{fontSize: '16px'}}>
          Please enter your account email. We’ll send a reset email with further instructions.
        </div>
      </div>
      <PasswordResetFormContainer onSuccess={() => toggle()}/>
    </ModalBody>
  </Modal>
;

export default PasswordReset;
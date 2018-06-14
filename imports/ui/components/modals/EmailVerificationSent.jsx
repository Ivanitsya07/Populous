import React from 'react';

import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link} from "react-router-dom";

const EmailVerificationSent = ({open, toggle}) =>
  <Modal isOpen={open} className="custom" toggle={toggle}>
    <ModalHeader toggle={toggle}>Email verification</ModalHeader>
    <ModalBody>
      <div style={{margin: '20px 0',}} className="text-center">
        <div style={{marginBottom: '20px'}}>
          <img src="/img/baloon.png"/>
        </div>
        <div style={{fontSize: '19px', marginBottom: '20px'}}>Thank you for registering!</div>
        <div style={{fontSize: '16px'}}>
          Please verify your email. We’ve sent you a verification link.
        </div>
      </div>
      <Link to="/resend-verification">Resend a verification link.</Link>
    </ModalBody>
  </Modal>
;

export default EmailVerificationSent;
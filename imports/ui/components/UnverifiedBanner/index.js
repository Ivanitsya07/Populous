import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { statuses } from 'meteor/populous:constants';

const UnverifiedBanner = ({ status }) => {

  // default is unverified
  let body = [
    <p key="0">Your account is currently unverified.</p>,
    <p key="1">Please click the button below to begin the verification process</p>,
    <p className="lead" key="2">
      <Link to="/upload" className="btn btn-primary">
        Verify account
      </Link>
    </p>
  ];

  if (status === statuses.declined) {
    body = [
      <p key="0">Your account verification was declined by our admins.</p>,
      <p key="1">Please click the button below to read why and submit a new application.</p>,
      <p className="lead" key="2">
        <Link to="/upload/declined" className="btn btn-danger">
          View rejection notice
        </Link>
      </p>
    ];
  } else if (status === statuses.pending) {
    statusString = '';
    body = [
      <p key="0">Your account verification is under review.</p>,
      <p key="1">We'll email you shortly with the result of your application.</p>
    ];
  }

  return (
    <Jumbotron>
      <h1 className="display-5">Can't access this yet!</h1>
      <p className="lead">
        Before you add an invoice we must verify your identity.
      </p>
      <hr className="my-2" />
      { body }
    </Jumbotron>
  );
};

export default UnverifiedBanner;

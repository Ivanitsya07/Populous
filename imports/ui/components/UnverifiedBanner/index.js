import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { statuses } from 'meteor/populous:constants';
import { Card } from '../styled-components/Divs';
import Button from '../styled-components/Button';
import { H3, P } from '../styled-components/Typography/headers';
import ButtonLink from '../styled-components/ButtonLink';

const UnverifiedBanner = ({ status }) => {

  // default is unverified
  let body = [
    <p key="0">Your account is currently unverified.</p>,
    <p key="1">Please click the button below to begin the verification process</p>,
    <p className="lead" key="2">
      <ButtonLink primary to={'/upload'}>Verify account</ButtonLink>
    </p>
  ];

  if (status === statuses.declined) {
    body = [
      <p key="0">Your account verification was declined by our admins.</p>,
      <p key="1">Please click the button below to read why and submit a new application.</p>,
      <p className="lead" key="2">
        <ButtonLink to={'/upload/declined'}>View rejection notice</ButtonLink>
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
    <Row>
      <Col>
        <Card className="m-t-40 text-center">
          <H3>You can't access this yet!</H3>
          <P opacity={0.8}>
            Before you add an invoice we must verify your identity.
          </P>
          <hr />
          { body }
        </Card>
      </Col>
    </Row>
  );
};

export default UnverifiedBanner;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import UnverifiedOrDeclinedRoute from '../../../route-helpers/UnverifiedOrDeclinedRoute';
import Declined from '../Declined';
import KYCWizardFormContainer from '../forms/KYCWizardFormContainer';

const Upload = props => {
  return (
    <Container>
      <UnverifiedOrDeclinedRoute
        component={Declined}
        path="/upload/declined"
        exact
      />

      <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
        <Row>
          <Col xs={12}>
            <h3>Provide your identity data to Populous</h3>
            <p>
              Activate your account by uploading your identity documents to
              Populous. You will receive an email within 48 hours with the
              status of your application.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <KYCWizardFormContainer />
          </Col>
        </Row>
      </div>

      <div style={{ height: '32px ' }} />

      <Row>
        <Col xs={6}>
          <h5>Bank Statement Policy</h5>
        </Col>
        <Col xs={6}>
          <h5>ID documents Policy</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus pulvinar ipsum sed efficitur. Duis ultrices dolor neque,
            a condimentum ante ultrices vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus rhoncus pulvinar ipsum sed
            efficitur. Duis ultrices dolor neque, a condimentum ante vel.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import UnverifiedOrDeclinedRoute from '../../../route-helpers/UnverifiedOrDeclinedRoute';
import Declined from '../Declined';
import KYCWizardFormContainer from '../forms/KYCWizardFormContainer';
import { Small, P } from '../../../components/styled-components/Typography/headers';

const Upload = props => {
  return (
    <div>
      <UnverifiedOrDeclinedRoute
        component={Declined}
        path="/upload/declined"
        exact
      />

      <Row className="text-center">
        <Col xs={'12'} sm={{ size: '10', offset: 1 }} md={{ size: '12', offset: 0 }} lg={{ size: '8', offset: 2 }}>
          <p className="m-t-40 m-b-20">
            <img src="./img/img-profile.png" height={70} />
          </p>
          <P opacity={0.8} transform="uppercase">
            Populous Customer Profile
          </P>
          <Small opacity={0.9}>
            Please provide us relevant identification documents. This allows us to keep your account active.
            Your documents will be processed within 24-48 hours of upload.
          </Small>
        </Col>
      </Row>

      <KYCWizardFormContainer />

      <Row className="m-t-40 m-b-30">
        <Col>
          <P opacity={0.8}>Bank Statement Policy</P>
          <Small opacity={0.8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus pulvinar ipsum sed efficitur. Duis ultrices dolor neque,
            a condimentum ante ultrices vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus rhoncus pulvinar ipsum sed
            efficitur. Duis ultrices dolor neque, a condimentum ante vel.
          </Small>
        </Col>
        <Col>
          <P opacity={0.8}>ID documents Policy</P>
          <Small opacity={0.8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus pulvinar ipsum sed efficitur. Duis ultrices dolor neque,
            a condimentum ante ultrices vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus rhoncus pulvinar ipsum sed
            efficitur. Duis ultrices dolor neque, a condimentum ante vel.
          </Small>
        </Col>
      </Row>
    </div>
  );
};

export default Upload;

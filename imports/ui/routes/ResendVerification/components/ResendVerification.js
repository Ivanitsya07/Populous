import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ResendVerificationForm from '../containers/ResendVerificationFormContainer';
import { H1 } from '../../../components/styled-components/Typography/headers';
import { Block, Page } from '../../../components/styled-components/Divs';
import NavigationLoggedOut from '../../../components/Navigation/NavigationLoggedOut';

const ResendVerification = () => (
  <Page>
    <div>
      <NavigationLoggedOut />
      <Container fluid>
        <Row>
          <Col xs={'12'}>
            <Block invert>
              <H1 invert>
                Resend email verification email
              </H1>

              <ResendVerificationForm />
            </Block>
          </Col>
        </Row>
      </Container>
    </div>
  </Page>
);

export default ResendVerification;

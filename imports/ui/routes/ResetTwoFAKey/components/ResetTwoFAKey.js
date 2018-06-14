import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import TwoFAKeyResetForm from '../containers/TwoFAKeyResetFormContainer';
import { H1 } from '../../../components/styled-components/Typography/headers';
import { Block, Page } from '../../../components/styled-components/Divs';
import NavigationLoggedOut from '../../../components/Navigation/NavigationLoggedOut';

const ResetTwoFAKey = () => (
  <Page>
    <div>
      <NavigationLoggedOut />
      <Container fluid>
        <Row>
          <Col>
            <Block invert>
              <H1 invert>Can't access your 2-FA device?</H1>
              <TwoFAKeyResetForm />
            </Block>
          </Col>
        </Row>
      </Container>
    </div>
  </Page>
);

export default ResetTwoFAKey;

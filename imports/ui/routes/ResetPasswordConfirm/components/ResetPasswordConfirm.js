import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import PasswordResetForm from '../containers/PasswordResetFormContainer';
import { H1 } from '../../../components/styled-components/Typography/headers';
import { Block, Page } from '../../../components/styled-components/Divs';
import NavigationLoggedOut from '../../../components/Navigation/NavigationLoggedOut';

const ResetPasswordConfirm = () => (
  <Page>
    <div>
      <NavigationLoggedOut />
      <Container fluid>
        <Row>
          <Col xs={'12'}>
            <Block invert>
              <H1 invert>
                Reset your password
              </H1>

              <PasswordResetForm />
            </Block>
          </Col>
        </Row>
      </Container>
    </div>
  </Page>
);

export default ResetPasswordConfirm;

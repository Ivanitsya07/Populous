import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import TabForm from './TabForm';
import { H1, Lead, Small, P } from '../../components/styled-components/Typography/headers';
import { PageHeader, Page, Content } from '../../components/styled-components/Divs';
import NavigationLoggedOut from '../../components/Navigation/NavigationLoggedOut';
import Footer from '../../components/Footer';

const Registration = props => {
  return (
    <div>
      <Page>
        <NavigationLoggedOut />
        <Content>
          <PageHeader invert center src="/img/img@login-banner.png" position="top right">
            <Row>
              <Col xs={'12'} sm={'12'}>
                <H1 invert>
                  Sign Up for Populous
                </H1>
                <Lead invert>
                  and join invoice financing industry today
                </Lead>
              </Col>
            </Row>
          </PageHeader>
          <Container>
            <Row>
              <Col className="m-t-20 text-center">
                <P opacity={0.8} transform="uppercase">
                  Register as
                </P>
              </Col>
            </Row>
            <TabForm />
            <Row>
              <Col className="m-t-30 m-b-30 text-center">
                <Small opacity={0.7}>By pressing the button above I agree to the </Small>
                <Small><a href="#" target="_blank">Terms and Conditions</a></Small>
              </Col>
            </Row>
          </Container>
        </Content>
        <Footer />
      </Page>
    </div>
  );
};

export default withRouter(Registration);

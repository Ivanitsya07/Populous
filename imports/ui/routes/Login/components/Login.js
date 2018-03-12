import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { userRoles } from 'meteor/populous:constants';

import LoginForm from '../components/LoginForm';
import { H1, H3, Lead } from '../../../components/styled-components/Typography/headers';
import { PageHeader, Block, Page, Content } from '../../../components/styled-components/Divs';
import NavigationLoggedOut from '../../../components/Navigation/NavigationLoggedOut';
import Button from '../../../components/styled-components/Button';
import Footer from '../../../components/Footer';

const Login = () =>
  <Page>
    <div>
      <NavigationLoggedOut />
      <Content>
        <PageHeader invert center src="/img/img@login-banner.png" position="top right">
          <Row>
            <Col xs={'12'} sm={'12'}>
              <H1 invert>
                Login to Populous
              </H1>
              <Lead invert>
                Hello! Nice to see you here again
              </Lead>
            </Col>
          </Row>
        </PageHeader>
        <Container>
          <Row>
            <Col xs={'12'} sm={{ size: '10', offset: 1 }} lg={{ size: '6', offset: 3 }}>
              <Block>
                <LoginForm
                  form="borrower"
                  initialValues={{ role: userRoles.investor }}
                />
              </Block>
            </Col>
          </Row>
        </Container>
      </Content>
      <Footer />
    </div>
  </Page>;

export default Login;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { userRoles } from 'meteor/populous:constants';

import LoginForm from '../components/LoginForm';
import { H1, H3, Lead } from '../../../components/styled-components/Typography/headers';
import { PageHeader, Block, Page, Content } from '../../../components/styled-components/Divs';
import NavigationLoggedOut from '../../../components/Navigation/NavigationLoggedOut';
import Footer from '../../../components/Footer';
import EmailVerificationSent from "../../../components/modals/EmailVerificationSent";
import PasswordReset from "../../../components/modals/PasswordReset";

const initialState = {
  showResetPasswordForm: false,
};

class Login extends React.Component{

  constructor(props){
    super(props);
    const {location} = props;

    this.state = {
      ...initialState,
      showEmailVerificationSentModal: location.state && location.state.showModal,
    };
  }

  toggleModal = (key)=>{
    if(this.state[key] !== undefined) {
      this.setState({[key]: !this.state[key]});
    }
  };

  onResetPasswordLinkClick = (event)=>{
    event.preventDefault();
    this.toggleModal('showResetPasswordForm');
  };

  render(){
    const {showEmailVerificationSentModal, showResetPasswordForm} = this.state;

    return (
      <Page>
        <div>
          <NavigationLoggedOut/>
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
                <Col xs={'12'} sm={{size: '10', offset: 1}} lg={{size: '6', offset: 3}}>
                  <Block>
                    <LoginForm
                      form="borrower"
                      initialValues={{role: userRoles.investor}}
                      onClickResetPassword={this.onResetPasswordLinkClick}
                    />
                  </Block>
                </Col>
              </Row>
            </Container>
          </Content>
          <Footer/>
        </div>
        <EmailVerificationSent open={showEmailVerificationSentModal} toggle={()=>this.toggleModal('showEmailVerificationSentModal')}/>
        <PasswordReset open={showResetPasswordForm} toggle={()=>this.toggleModal('showResetPasswordForm')}/>
      </Page>
    );
  }
};

export default Login;

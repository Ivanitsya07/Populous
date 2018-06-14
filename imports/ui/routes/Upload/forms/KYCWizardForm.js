import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade, Row, Col } from 'reactstrap';
import KYCWizardFormCompanyInformation from './KYCWizardFormCompanyInformation';
import KYCWizardFormTradingVolume from './KYCWizardFormTradingVolume';
import KYCWizardFormPersonalIdentification from "./KYCWizardFormPersonalIdentification";
import KYCWizardFormReviewPage from "./KYCWizardFormReviewPage";
import KYCFormSteps from "./KYCFormSteps";
import { Small, P } from '../../../components/styled-components/Typography/headers';

class KYCWizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { currentUser, onSubmit } = this.props;
    const { page } = this.state;

    // Restructure info from currentUser we need for CompanyInformationForm
    // ALEX: currentUser has prototype of Class vs Object, what's the deal with that.
    const {
      addressLine1,
      addressLine2,
      city,
      companyDescription,
      companyName,
      companyNumber,
      country,
      firstName,
      lastName,
      postcode
    } = currentUser;

    const kycFormInitialValues = {
      addressLine1,
      addressLine2,
      city,
      companyDescription,
      companyName,
      companyNumber,
      country,
      firstName,
      lastName,
      postcode,
      averageInvoiceValue: 2,
      averageInvoiceVolume: 2,
      bankStatements: [],
      personalIdentification: []
    };

    return (
      <div className="m-t-40">
        {currentUser.isBorrower() && 
          <Row>
            <Col xs={'12'} sm={{ size: '10', offset: 1 }} md={{ size: '12', offset: 0 }} lg={{ size: '8', offset: 2 }}>
              <Fade in={page === 1}>
                {page === 1 &&
                  <KYCWizardFormCompanyInformation
                    initialValuesReduxForm={kycFormInitialValues}
                    currentUser={currentUser}
                    onSubmit={this.nextPage}
                  />}
              </Fade>
              <Fade in={page === 2}>
                {page === 2 &&
                  <KYCWizardFormTradingVolume
                    currentUser={currentUser} // Just for validation to not break
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
              </Fade>
              <Fade in={page === 3}>
                {page === 3 &&
                  <KYCWizardFormPersonalIdentification
                    currentUser={currentUser} // Just for validation to not break
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
              </Fade>
              <Fade in={page === 4}>
                {page === 4 &&
                  <KYCWizardFormReviewPage
                    currentUser={currentUser} // Just for validation to not break
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                  />}
              </Fade>
              <Row className="m-t-30">
                <Col xs={'12'} md={{ size: '10', offset: 1 }}  xl={{ size: '8', offset: 2 }}>
                  <KYCFormSteps page={page-1} currentUser={currentUser}/>
                </Col>
              </Row>
            </Col>
          </Row>}
        {!currentUser.isBorrower() && 
          <Row>
            <Col xs={'12'} sm={{ size: '10', offset: 1 }} md={{ size: '12', offset: 0 }} lg={{ size: '8', offset: 2 }}>
              <Fade in={page === 1}>
                {page === 1 &&
                  <KYCWizardFormCompanyInformation
                    initialValuesReduxForm={kycFormInitialValues}
                    currentUser={currentUser}
                    onSubmit={this.nextPage}
                  />}
              </Fade>
              <Fade in={page === 2}>
                {page === 2 &&
                  <KYCWizardFormPersonalIdentification
                    currentUser={currentUser} // Just for validation to not break
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
              </Fade>
              <Fade in={page === 3}>
                {page === 3 &&
                  <KYCWizardFormReviewPage
                    currentUser={currentUser} // Just for validation to not break
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                  />}
              </Fade>
              <Row className="m-t-30">
                <Col xs={'12'} md={{ size: '10', offset: 1 }}  xl={{ size: '8', offset: 2 }}>
                  <KYCFormSteps page={page-1} currentUser={currentUser}/>
                </Col>
              </Row>
            </Col>
          </Row>}
      </div>
    );
  }
}

KYCWizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default KYCWizardForm;

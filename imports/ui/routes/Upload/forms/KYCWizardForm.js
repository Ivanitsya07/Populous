import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'reactstrap';
import KYCWizardFormCompanyInformation from './KYCWizardFormCompanyInformation';
import KYCWizardFormTradingVolume from './KYCWizardFormTradingVolume';
import KYCWizardFormPersonalIdentification from "./KYCWizardFormPersonalIdentification";
import KYCWizardFormReviewPage from "./KYCWizardFormReviewPage";
import KYCFormSteps from "./KYCFormSteps";

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
      <div>
        <div style={{ height: '32px' }}/>
        <KYCFormSteps page={page-1}/>
        <div style={{ height: '32px' }}/>
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
          <h5>Review Before Submission</h5>
          <div style={{ height: '16px' }}/>
          {page === 4 &&
          <KYCWizardFormReviewPage
            currentUser={currentUser} // Just for validation to not break
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
        </Fade>
      </div>
    );
  }
}

KYCWizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default KYCWizardForm;

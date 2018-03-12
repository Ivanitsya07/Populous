import React, { Component } from 'react';
import { TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import Tab from '../../components/styled-components/Tab';
import { Small } from '../../components/styled-components/Typography/headers';
import InvestorForm from './InvestorForm';
import BorrowerForm from './BorrowerForm';
import { createBorrower, createInvestor } from './helpers';

class TabForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    // Values comes from Redux Form
    const handleCreateBorrower = values => {
      const {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        companyName,
        companyNumber,
        companyDescription,
        addressLine1,
        addressLine2,
        city,
        postcode,
        country,
        phoneNumber,
        occupation
      } = values;

      createBorrower(
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        companyName,
        companyNumber,
        companyDescription,
        addressLine1,
        addressLine2,
        city,
        postcode,
        country,
        phoneNumber,
        occupation,
        this.props.history.push
      );
    };

    const handleCreateInvestor = values => {
      const {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        country
      } = values;

      createInvestor(
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        country,
        this.props.history.push
      );
    };

    return (
      <div>
        <Row className="m-b-15">
          <Col xs={'12'} sm={{ size: '10', offset: 1 }} lg={{ size: '6', offset: 3 }} className="text-center">
            <Tab width="45%" className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
              <i className="fa fa-check"></i> Invoice Seller
            </Tab>
            <Tab width="45%" className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
              <i className="fa fa-check"></i> Invoice Buyer
            </Tab>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs={'12'} sm={{ size: '10', offset: 1 }} lg={{ size: '6', offset: 3 }}>
                <Small opacity={0.8} className="text-center m-b-30">
                  I want to buy invoices and gain returns<br/>
                  on leveraged funds & investment
                </Small>
                <BorrowerForm onSubmit={handleCreateBorrower} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col xs={'12'} sm={{ size: '10', offset: 1 }} lg={{ size: '6', offset: 3 }}>
                <Small opacity={0.8} className="text-center m-b-30">
                  I want to sell my invoices online to take<br/>
                  control of my cash flow
                </Small>
                <InvestorForm onSubmit={handleCreateInvestor} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default withRouter(TabForm);

import React from 'react';
import {
  Container,
  Row,
  Col,
  Button as ButtonRS,
  FormGroup,
  Label,
  Collapse,
  Card
} from 'reactstrap';

import {
  H3,
  H5
} from '../../../components/styled-components/Typography/headers';
import { Input } from '../../../components/styled-components/Inputs';
import Button from '../../../components/styled-components/Button';

class MyInvoicesFilters extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { collapse: true };
  }

  handleToggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Card body style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <H3>
            <i className="fa fa-filter" aria-hidden="true" />{' '}Invoice
            Filters
            <ButtonRS
              size={'sm'}
              onClick={this.handleToggle}
              style={{ marginLeft: '1rem' }}
            >
              {this.state.collapse
                ? <i className="fa fa-caret-up" aria-hidden="true" />
                : <i className="fa fa-caret-down" aria-hidden="true" />}
            </ButtonRS>
          </H3>

          <Collapse isOpen={this.state.collapse}>
            <Row>
              <Col xs={'4'}>
                <H5> Status </H5>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Auction Open
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Auction Closed
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Awaiting Payment
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Pending
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Paid
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Expired
                  </Label>
                </FormGroup>
              </Col>

              <Col xs={'4'}>
                <H5> Created Date </H5>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Today
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    This Month
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    This Year
                  </Label>
                </FormGroup>
                <H5>Due Date</H5>

              </Col>
              <Col xs={'4'}>
                <H5>Amount</H5>
                <FormGroup>
                  <Label for="from">From</Label>
                  <Input
                    type="number"
                    name="from"
                    id="from"
                    placeholder="500"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="to">To</Label>
                  <Input type="number" name="to" id="to" placeholder="1000" />
                </FormGroup>
                <FormGroup>
                  <Label for="currency">In This Currency</Label>
                  <Input type="select" name="select" id="currency">
                    <option>GBP Pokens</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Button primary>Find Invoices</Button>
              <div style={{ width: '12px' }} />
              <Button primary>Show All Invoices</Button>
            </Row>
          </Collapse>
        </Container>
      </Card>
    );
  }
}

export default MyInvoicesFilters;

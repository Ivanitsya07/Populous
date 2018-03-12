import React from 'react';
import {
  Container,
  Row,
  Col,
  CardBody,
  Table
} from 'reactstrap';
import { Link } from 'react-router-dom'
import GhostButton from '../../../../components/styled-components/GhostButton';
import { Card, CardTitle } from '../../../../components/styled-components/Card';
import DateRangePicker from "../../../../components/DatePicker/DateRangePickerWrapper";

const PaymentsWidget = () => {
  return (
    <Card>
      <Container>
        <Row>
          <Col xs={12}>
            <CardBody>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}
              >
                <CardTitle>Payments</CardTitle>
                <Link to='invoices'><GhostButton>My Invoices</GhostButton></Link>
              </div>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>{/* Leave this Blank */}</th>
                    <th>
                      {/* Date Picker for Borrower's Invoices https://github.com/bitpopulous/platform/issues/97 */}
                      {/*Styling of React-Dates is FUD */}
                      {/*<DateRangePicker/>*/}
                      Invoices
                    </th>
                    <th>Awaiting Dues</th>
                    <th>Anticipated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Investments</strong></td>
                    <td>10,500,000.00</td>
                    <td>500,000.00</td>
                    <td>500,000.00</td>
                  </tr>
                  <tr>
                    <td><strong>Rate</strong></td>
                    <td>500,000.00</td>
                    <td>20,000.00</td>
                    <td>20,000.00</td>
                  </tr>
                  <tr>
                    <td><strong>Penalties</strong></td>
                    <td>3,000.00</td>
                    <td>2,000.00</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Totals</strong></td>
                    <td><strong>11,023,000.00</strong></td>
                    <td><strong>113,000.00</strong></td>
                    <td><strong>522,000.00</strong></td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}
              >
                <p>
                  Coming payments amounts in 7 days = -10,000,000.00
                </p>
                <GhostButton to='invoices'>See These Invoices</GhostButton>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default PaymentsWidget;

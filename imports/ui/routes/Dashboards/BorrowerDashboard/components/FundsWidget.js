import React from 'react';
import {
  CardBody,
  Table
} from 'reactstrap';
import GhostButton from "../../../../components/styled-components/GhostButton";
import { Card, CardTitle } from '../../../../components/styled-components/Card';

const FundsWidget = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Funds</CardTitle>
        <GhostButton>Refresh</GhostButton>
        <GhostButton>Go To Wallets</GhostButton>
        <Table bordered>
          <tbody>
          <tr>
            <td><strong>GBPp</strong></td>
            <td>10,500,000.00</td>
          </tr>
          <tr>
            <td><strong>USDp</strong></td>
            <td>500,000.00</td>
          </tr>
          <tr>
            <td><strong>EURp</strong></td>
            <td>200.50</td>
          </tr>
          <tr>
            <td><strong>JPYp</strong></td>
            <td>1.00</td>
          </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default FundsWidget;

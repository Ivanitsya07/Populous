import React from 'react';
import { CardBody, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardTitle } from '../../../../components/styled-components/Card';

const FundsWidget = () => {
  return (
    <Card className="m-t-10 m-b-30">
      <CardBody>
        <CardTitle>
          Funds
          <Link to={'/wallet'} className="pull-right">WALLETS</Link>
        </CardTitle>
        <Table responsive className="custom m-t-10">
           <thead>
            <tr>
              <th className="text-center"><i className="fa fa-refresh"></i> ETH</th>
              <th>AVAILABLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">GBPp</td>
              <td>10,500,000.00</td>
            </tr>
            <tr>
              <td className="text-center">USDp</td>
              <td>500,000.00</td>
            </tr>
            <tr>
              <td className="text-center">EURp</td>
              <td>200.50</td>
            </tr>
            <tr>
              <td className="text-center">JPYp</td>
              <td>1.00</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default FundsWidget;

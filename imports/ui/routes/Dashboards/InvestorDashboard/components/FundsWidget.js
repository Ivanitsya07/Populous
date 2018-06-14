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
        </CardTitle>
        <Table responsive className="custom m-t-10">
           <thead>
            <tr>
              <th></th>
              <th>AVAILABLE</th>
              <th>ON BID</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">USDp</td>
              <td>1,500.00</td>
              <td>3,500.00</td>
              <td>5,000.00</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default FundsWidget;

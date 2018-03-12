import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';
import { CardText, CardBody } from 'reactstrap';
import { Card, CardTitle } from '../../../../components/styled-components/Card';

const InvestmentsByCountriesWidget = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Investments From Countries</CardTitle>
        <VictoryPie
          data={[
            { x: 'United Kingdom', y: 20 },
            { x: 'USA', y: 40 },
            { x: 'Germany', y: 55 },
            { x: 'China', y: 55 }
          ]}
          innerRadius={100}
          colorScale={'cool'}
          // theme={VictoryTheme.material}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 3
            },
            labels: {
              fontSize: 12,
              fill: '#444'
            }
          }}
        />
      </CardBody>
    </Card>
  );
};

export default InvestmentsByCountriesWidget;

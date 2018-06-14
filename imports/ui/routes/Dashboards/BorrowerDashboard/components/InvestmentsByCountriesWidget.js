import React from 'react';
import { VictoryLegend, VictoryPie, VictoryTheme } from 'victory';
import { CardText, CardBody } from 'reactstrap';
import { Card, CardTitle } from '../../../../components/styled-components/Card';

const InvestmentsByCountriesWidget = () => {
  return (
    <Card className="m-t-10 m-b-30">
      <CardBody>
        <CardTitle>Investments From Countries <b className="p-l-10" style={{'textTransform':'initial'}}>- GBPp</b></CardTitle>
        <div className="text-center">
          <svg width={240} height={280}>
            <VictoryPie
              standalone={false}
              width={220} height={220}
              data={[
                { x: 'United Kingdom', y: 60 },
                { x: 'USA', y: 20 },
                { x: 'Germany', y: 12 },
                { x: 'China', y: 8 }
              ]}
              innerRadius={100}
              padAngle={1}
              colorScale={["#5A86C1", "#77C58C", "#EBA551", "#D67171"]}
              labels={() => null}
            />
            <VictoryLegend
              standalone={false}
              x={0} y={220}
              itemsPerRow={2}
              orientation="horizontal"
              gutter={35}
              data={[
                { name: "United Kingdom", symbol: { fill: "#5A86C1", type: "square" } },
                { name: "USA", symbol: { fill: "#77C58C", type: "square" } },
                { name: "Germany", symbol: { fill: "#EBA551", type: "square" } },
                { name: "China", symbol: { fill: "#D67171", type: "square" } }
              ]}
            />
          </svg>
        </div>
      </CardBody>
    </Card>
  );
};

export default InvestmentsByCountriesWidget;

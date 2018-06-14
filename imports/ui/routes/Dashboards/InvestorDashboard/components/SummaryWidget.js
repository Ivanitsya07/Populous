import React from 'react';
import { Row, Col, CardText, CardBody } from 'reactstrap';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { Card, CardTitle } from '../../../../components/styled-components/Card';
import { P } from '../../../../components/styled-components/Typography/headers';

const SummaryWidget = () => {
  return (
    <Card className="m-t-10 m-b-20">
      <CardBody>
        <CardTitle>Summary</CardTitle>
        <Row>
          <Col xs={12} lg={6} className="m-t-10">
            <Row>
              <Col xs={7}>
                <h4 style={{'color': '#5CA0F6'}}>4.0%</h4>
              </Col>
              <Col xs={4}>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={40}
                  margin={5}
                >
                  <SparklinesCurve color="#5CA0F6" />
                </Sparklines>
              </Col>
            </Row>
            <p>Average Rate of Interest</p>
          </Col>
          <Col xs={12} lg={6} className="m-t-10">
            <Row>
              <Col xs={7}>
                <h4 style={{'color': '#5CA0F6'}}>0.38%</h4>
              </Col>
              <Col xs={4}>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={40}
                  margin={5}
                >
                  <SparklinesCurve color="#5CA0F6" />
                </Sparklines>
              </Col>
            </Row>
            <p>Overdue Rate</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6} className="m-t-10">
            <Row>
              <Col xs={7}>
                <h4 style={{'color': '#5CA0F6'}}>5.2%</h4>
              </Col>
              <Col xs={4}>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={40}
                  margin={5}
                >
                  <SparklinesCurve color="#5CA0F6" />
                </Sparklines>
              </Col>
            </Row>
            <p>Investment Profit Margin</p>
          </Col>
          <Col xs={12} lg={6} className="m-t-10">
            <Row>
              <Col xs={7}>
                <h4 style={{'color': '#5CA0F6'}}>1.00%</h4>
              </Col>
              <Col xs={4}>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={40}
                  margin={5}
                >
                  <SparklinesCurve color="#5CA0F6" />
                </Sparklines>
              </Col>
            </Row>
            <p>Default Rate</p>
          </Col>
        </Row>

        <hr/>
        <Row>
          <Col className="text-right">
            <P opacity={0.7} className="m-b-5">Investments: USDp 562,953.00</P>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <P opacity={0.7} className="m-b-5">Returns: USDp 592,550.00</P>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <b className="m-b-5" style={{'color': '#77C58C'}}>Profit: USDp 29,597.00</b>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SummaryWidget;

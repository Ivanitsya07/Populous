import React from 'react';
import { Row, Col, CardBody } from 'reactstrap';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { Card, CardTitle } from '../../../../components/styled-components/Card';
import { P } from '../../../../components/styled-components/Typography/headers';

const SummaryWidget = () => {
  return (
    <Card className="m-t-10 m-b-30">
      <CardBody>
        <CardTitle>Summary</CardTitle>
        <Row>
          <Col xs={12} className="m-t-10">
            <Row>
              <Col xs={12} sm={5} md={12} lg={5}>
                <p>Average Rate</p>
              </Col>
              <Col xs={12} sm={7} md={12} lg={7}>
                <Row>
                  <Col xs={7} className="text-right">
                    <h4 style={{'color': '#5CA0F6'}}>4.0%</h4>
                  </Col>
                  <Col xs={5}>
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
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="m-t-10">
            <Row>
              <Col xs={12} sm={5} md={12} lg={5}>
                <p>Altman Z-score</p>
              </Col>
              <Col xs={12} sm={7} md={12} lg={7}>
                <Row>
                  <Col xs={7} className="text-right">
                    <h4 style={{'color': '#5CA0F6'}}>2.60</h4>
                  </Col>
                  <Col xs={5}>
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
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="m-t-10">
            <Row>
              <Col xs={12} sm={5} md={12} lg={5}>
                <p>Overdue Rate</p>
              </Col>
              <Col xs={12} sm={7} md={12} lg={7}>
                <Row>
                  <Col xs={7} className="text-right">
                    <h4 style={{'color': '#5CA0F6'}}>0.38%</h4>
                  </Col>
                  <Col xs={5}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SummaryWidget;

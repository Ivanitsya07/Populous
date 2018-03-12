import React from 'react';
import { Container, Row, Col, CardText, CardBody } from 'reactstrap';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import { Card, CardTitle } from '../../../../components/styled-components/Card';

const SummaryWidget = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Summary</CardTitle>
        <Container>
          <Row>
            <Col xs={12}>
              <span>
                <h5>Average Rate</h5>
                <h3>4.0%</h3>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={20}
                  margin={5}
                >
                  <SparklinesCurve />
                </Sparklines>
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <span>
                <h5>Altman Z-score</h5>
                <h3>2.60</h3>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={20}
                  margin={5}
                >
                  <SparklinesCurve />
                </Sparklines>
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <span>
                <h5>Overdue Rate</h5>
                <h3>0.38%</h3>
                <Sparklines
                  data={[5, 10, 5, 20, 8, 15]}
                  limit={5}
                  width={100}
                  height={20}
                  margin={5}
                >
                  <SparklinesCurve />
                </Sparklines>
              </span>
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

export default SummaryWidget;

import React from 'react';
import {
  Container,
  Row,
  Form,
  Col,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import { Input } from '../../../components/styled-components/Inputs';

class MyInvoicesMoreFilters extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={'3'} xs={'12'}>
            <FormGroup row>
              <InputGroup>
                <InputGroupAddon>
                  <i className="fa fa-search" aria-hidden="true" />
                </InputGroupAddon>
                <Input placeholder="Number, name, price, etc" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={'5'} xs={'0'}/>
          <Col md={'2'} xs={'6'}>
            <FormGroup row>
              <Label for="exampleSelect" style={{ marginTop: 'auto' }}>
                Sort By
              </Label>
              <Col>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={'2'} xs={'6'}>
            <FormGroup row>
              <Label for="exampleSelect" style={{ marginTop: 'auto' }}>
                Load
              </Label>
              <Col>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyInvoicesMoreFilters;

import React from 'react';
import {
  Row,
  Form,
  Col,
  FormGroup,
  Label,
} from 'reactstrap';
import { StyledInput} from '../../../components/styled-components/Inputs';
import {invoicesSort} from "../modules/constants";

class MyInvoicesMoreFilters extends React.Component {
  render() {
    const {fullText, perPage} = this.props.filters;
    return (
        <Row>
          <Col md={'4'} sm="6" xs={'12'}  style={{marginBottom:'10px'}}>
              <StyledInput style={{color: '#C0C5CC', fontSize: '16px'}} placeholder="Number, name, price, etc" value={fullText}
                              onChange={this.fullTextOnChange}/>
          </Col>
          <Col md={{size:'4', offset: 4}} sm="6" xs={'12'}  style={{marginBottom:'10px'}}>
            <FormGroup className="d-flex">
              <Label  for="exampleSelect" style={{marginTop: 'auto'}}>
                Sort By
              </Label>
              <Col>
                {this.getSortBy()}
              </Col>
            </FormGroup>
          </Col>
        </Row>
    );
  }

  getSortBy() {
    const {sortBy,} = this.props.filters;
    const options = [];

    for (const value in invoicesSort) {
      options.push(<option value={value} key={value}>{invoicesSort[value].label}</option>)
    }

    return (
        <StyledInput type="select" name="sort-by" value={sortBy} onChange={this.sortByChange}
        >
          {options}
        </StyledInput>
    );

  }

  sortByChange = (event) => {
    const {nativeEvent: {target: {value}}} = event;
    const {updateSortBy} = this.props;

    updateSortBy(value);
  };

  fullTextOnChange = (event) => {
    const {updateFullTextSearch} = this.props;
    const {nativeEvent: {target: {value}}} = event;
    updateFullTextSearch(value);
  };

  perPageChange = (event) => {
    const {updatePerPage} = this.props;
    const {nativeEvent: {target: {value}}} = event;
    updatePerPage(value);
  };

}

export default MyInvoicesMoreFilters;

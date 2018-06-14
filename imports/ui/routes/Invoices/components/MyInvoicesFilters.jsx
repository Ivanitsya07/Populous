import '../../../libs/react-input-slider/index.css';

import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label
} from 'reactstrap';
import InputRange from 'react-input-range';
import {currencies, invoiceStatuses} from 'meteor/populous:constants';
import {InputInvisible, StyledInput} from '../../../components/styled-components/Inputs';
import Button from '../../../components/styled-components/Button';
import DateRangePickerWrapper from "../../../components/DatePicker/DateRangePickerWrapper";
import {CustomCheckbox} from "../../../components/styled-components/Forms/CustomCheckbox";
import {UnderLineDiv} from "../../../components/styled-components/Divs";

class MyInvoicesFilters extends React.Component {

  render() {
    return (
      <div className="m-b-20">
        <Row className="m-b-20">
          <Col md="3" sm="6" xs="12" style={{marginBottom:'10px'}}>
            {this.getCurrency()}
          </Col>
          <Col md="4" sm="6" xs="12" style={{marginBottom:'10px'}}>
            {this.getSalePriceRange()}
          </Col>
          <Col md="5" sm="12" xs="12" style={{marginBottom:'10px'}}>
            {this.getDueDates()}
          </Col>
        </Row>
        <Row>
          <Col md="9" sm="12">
            {this.getStatusFilters()}
            <Row>
              <Col sm="6" xs="12">
                <Button style={{width:'100%'}} primary onClick={this.props.resetFilters}>Reset filters</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  getCurrency() {
    const currenciesValues = Object.values(currencies);
    const {currency} = this.props.filters;

    return (
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="currency">Currency</Label>
          <StyledInput  type="select" name="select" id="currency" onChange={this.props.currencyChange}
                          value={currency}>
            <option value='all'>Multiple</option>
            {currenciesValues.map(
              (currencyCode) => (<option value={currencyCode} key={currencyCode}>{currencyCode}</option>))
            }
          </StyledInput>
        <div style={{color: '#A5ACB5', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{currenciesValues.join(', ')}</div>
      </FormGroup>
    )
  }

  getSalePriceRange() {
    const {filters:{salePrice}, salePriceLimits} = this.props;

    return (
      <div>
        <Label>Sale price range</Label>
        <UnderLineDiv style={{marginBottom: '20px', padding: '0.275rem 0'}} className="d-flex justify-content-between align-items-center underline-block">
          <InputInvisible value={salePrice.min || 0} disabled/>
          <span style={{
            display: 'block',
            minHeight: '2px',
            minWidth: '12px',
            background: '#A5ACB5',
          }}/>
          <InputInvisible value={salePrice.max || 0} className="text-right " disabled/>
        </UnderLineDiv>
        <InputRange
          maxValue={salePriceLimits.max|| 1}
          minValue={salePriceLimits.min || 0}
          formatLabel={value => parseInt(value).toFixed(2)}
          value={{min: salePrice.min|| 0, max: salePrice.max|| 0}}
          onChange={this.props.salePriceChange}
        />
      </div>);
  }

  getDueDates() {
    const {dueDate} = this.props.filters;

    return (<div>
      <Label>due dates</Label>
      <UnderLineDiv>
        <DateRangePickerWrapper inner={{noBorder: true,}} onChange={this.props.dueDatesChange}
                                {...dueDate}/>
      </UnderLineDiv>
    </div>)
  }

  getStatusFilters() {
    return (<Row>
      <Col xs="12">
        <Label> Status </Label>
      </Col>
      <Col sm="4" xs="6">
        <CustomCheckbox label="Auction Open" name="auction-open"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.open))}/>
        <CustomCheckbox label="Auction Closed" name="auction-closed"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.auctionClosed))}/>
      </Col>
      <Col sm="4" xs="6">
        <CustomCheckbox label="Awaiting Payment" name="awaiting-payment"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.paymentPending))}/>
        <CustomCheckbox label="Pending" name="pending"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.pending))}/>
      </Col>
      <Col sm="4" xs="6">
        <CustomCheckbox label="Paid" name="paid"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.paid))}/>
        <CustomCheckbox label="Declined" name="declined"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.declined))}/>
        <CustomCheckbox label="Unsuccessful" name="unsuccessful"
                        {...(this.getStatusCheckboxProps(invoiceStatuses.unsuccessful))}/>
      </Col>
    </Row>);
  }

  getStatusCheckboxProps(status) {
    return {
      onChange: (event) => this.props.statusChange(status),
      value: status,
      checked: this.isChecked(status)
    };
  }

  isChecked(status) {
    const {statuses} = this.props.filters;
    return statuses.includes(status);
  }

}

export default MyInvoicesFilters;

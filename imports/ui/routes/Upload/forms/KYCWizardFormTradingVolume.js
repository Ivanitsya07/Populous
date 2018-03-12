import React from 'react';
import { connect } from 'react-redux';
import {
  averageInvoiceValues,
  averageInvoiceVolumes
} from 'meteor/populous:constants';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'reactstrap';

import { renderCurrencySelector } from '../../../form-helpers/renderSelectFields';
import renderRangeInput from '../../../form-helpers/renderRangeInput';
import Button from '../../../components/styled-components/Button';
import KYCValidation from './KYCValidation'

let KYCWizardFormTradingVolume = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5 style={{ marginBottom: '16px' }}>2. Trading volume</h5>

      <div style={{ maxWidth: '200px', margin: 'auto' }}>
        <Field component={renderCurrencySelector} name="currencySelector" label={"Currency: "}/>
      </div>

      <br />
      <Row>
        <Col xs={12} md={6}>
          <p>Our expected average value of invoices financed:</p>
          <Field
            component={renderRangeInput}
            name="averageInvoiceValue"
            max={4}
            min={0}
            step={1}
            initialValue={2}
          />
          {` ${averageInvoiceValues[props.averageInvoiceValue]}`}
          {' '}{props.currencySelector ? `${props.currencySelector}` : null}
        </Col>
        <Col xs={12} md={6}>
          <p>Our expected monthly volume of invoices financed: </p>
          <Field
            component={renderRangeInput}
            name="averageInvoiceVolume"
            max={4}
            min={0}
            step={1}
            initialValue={2}
          />
          {` ${averageInvoiceVolumes[props.averageInvoiceVolume]}`} invoices
        </Col>
      </Row>
      <div>
        <div style={{ height: '32px' }} />
        <Button type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
        {' '}
        <Button type="submit" className="next">
          Next
        </Button>
      </div>
    </form>
  );
};

KYCWizardFormTradingVolume = reduxForm({
  form: 'kycwizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: KYCValidation
})(KYCWizardFormTradingVolume);

// Ensure that the prop is NOT "initialValues"
// https://github.com/erikras/redux-form/issues/916
KYCWizardFormTradingVolume = connect(
  ({
    form: {
      kycwizard: {
        values: { averageInvoiceValue, averageInvoiceVolume, currencySelector }
      }
    }
  }) => ({
    averageInvoiceValue,
    averageInvoiceVolume,
    currencySelector
  })
)(KYCWizardFormTradingVolume);

export default KYCWizardFormTradingVolume;

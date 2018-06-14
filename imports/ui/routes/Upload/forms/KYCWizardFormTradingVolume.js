import React from 'react';
import { connect } from 'react-redux';
import { averageInvoiceValues, averageInvoiceVolumes } from 'meteor/populous:constants';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'reactstrap';

import { renderCurrencySelector } from '../../../form-helpers/renderSelectFields';
import renderRangeInput from '../../../form-helpers/renderRangeInput';
import renderRangeSlider from '../../../form-helpers/renderRangeSlider';
import Button from '../../../components/styled-components/Button';
import { Small, P, H5 } from '../../../components/styled-components/Typography/headers';
import KYCValidation from './KYCValidation'

let KYCWizardFormTradingVolume = props => {
  const { handleSubmit, previousPage } = props;
  let n_averageInvoiceVolumes = {};
  for (var i in averageInvoiceVolumes) {
    n_averageInvoiceVolumes[i] = averageInvoiceVolumes[i] + ' invoices';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <H5 opacity={0.7} transform="uppercase" className="text-center m-b-30">
        Trading volume
      </H5>

      <div style={{ maxWidth: '200px', margin: 'auto' }}>
        <Field component={renderCurrencySelector} name="currencySelector" label={"Currency: "}/>
      </div>

      <Row className="m-t-20">
        <Col xs={12} md={6} className="m-t-10 text-center">
          <Small>Our expected monthly volume of invoices financed: </Small>
          <Field
            component={renderRangeSlider}
            name="averageInvoiceVolume"
            max={6}
            min={0}
            step={1}
            orientation={'vertical'}
            labels={n_averageInvoiceVolumes}
          />
        </Col>
        <Col xs={12} md={6} className="m-t-10 text-center">
          <Small>Our expected average value of invoices financed:</Small>
          <Field
            component={renderRangeSlider}
            name="averageInvoiceValue"
            max={5}
            min={0}
            step={1}
            orientation={'vertical'}
            labels={averageInvoiceValues}
          />
        </Col>
      </Row>

      <div className="text-center m-t-40">
        <Button type="button" className="previous" onClick={previousPage} width="160px">
          Previous
        </Button>
        {' '}
        <Button primary type="submit" className="next" width="160px">
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

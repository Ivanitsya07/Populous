import React from 'react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import Button from '../../../components/styled-components/Button';
import { H2 } from '../../../components/styled-components/Typography/headers';
import AddInvoiceDropzone from './AddInvoiceDropzone';
import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { renderCurrencySelector, renderSelectReactstrap } from '../../../form-helpers/renderSelectFields';
import { renderDateTimeField } from '../../../form-helpers/renderDateTimeField';
import { validateAddInvoice } from '../../../form-helpers/validation';

const formatDateTimeMomentObj = value => {
  if (!value) {
    return value;
  }
  return moment(value).toISOString();
};

const AddInvoiceForm = props => {
  const {
    createInvoice,
    uploadInvoiceFile,
    uploadedInvoiceId,
    rejectedFile,
    fileLoading,
    fileSaved,
    savedFile,
    updateCurrentAmount,
    currentAmount,
    pristine,
    submitting,
    handleSubmit
  } = props;

  const a = parseInt(currentAmount);
  const suggested = a > 0
    ? `We suggest between ${a * 0.95} and ${a * 0.98}`
    : '';
  const maximum_goal_price = a > 0
    ? `${a * 0.98}`
    : '';

  return (
    <Row>
      <Col xs={{ size: '12' }} lg={{ size: '12' }}>
        <form className="form multi" onSubmit={handleSubmit}>
          <Row>
            <Col className="text-center m-t-40 m-b-30">
              <H2 transform="uppercase" opacity={0.8}>Add Invoice</H2>
            </Col>
          </Row>
          <Row>
            <Col xs={'12'} md={'4'} className="p-l-30 p-r-30 m-t-10">
              {/* Wait for fileSaved to upload, when it does we can submit the form*/}
              <AddInvoiceDropzone
                uploadInvoiceFile={uploadInvoiceFile}
                rejectedFile={rejectedFile}
                fileLoading={fileLoading}
                fileSaved={fileSaved}
                savedFile={savedFile}
              />
              {/* TODO: Pass fileSaved to the form for submission, we just need some sort of reference to the savedFile (URL, mongo id, to be saved alongside the invoice form */}
            </Col>
            <Col xs={'12'} md={'8'} className="p-l-20 p-r-20 m-t-10">
              <Field
                name="DebtorName"
                type={'text'}
                component={renderInputReactstrap}
                label={'Debtor'}
                placeholder={''}
              />
              <Row>
                <Col md={4}>
                  <Field
                    name="currencies"
                    type="select"
                    component={renderCurrencySelector}
                    label="Currency"
                  />
                </Col>

                <Col md={8}>
                  {/*https://redux-form.com/7.1.1/docs/api/field.md/#-code-onchange-event-newvalue-previousvalue-gt-void-code-optional-*/}
                  {/* https://github.com/erikras/redux-form/issues/2406#issuecomment-279847557 */}
                  <Field
                    name="Amount"
                    type="text"
                    component={renderInputReactstrap}
                    label="Invoice Amount"
                    placeholder=""
                    onChange={updateCurrentAmount}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Field
                    name="DueDate"
                    label="Invoice Due Date"
                    component={renderDateTimeField}
                    normalize={formatDateTimeMomentObj}
                  />
                </Col>
                <Col md={8}>
                  <Field
                    name="Invoicenumber"
                    type="text"
                    component={renderInputReactstrap}
                    label="Invoice Number"
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row>
                <Col md={9}>
                  <Field
                    name="SaleGoal"
                    type="text"
                    component={renderInputReactstrap}
                    label="Sale Goal Price"
                    placeholder={suggested}
                    helperText={
                      'The goal price must be more than 0 and not exceed maximum price allowed.'
                    }
                  />
                </Col>
                <Col md={3}>
                  <FormGroup className="text-right">
                    <Label>Maximum goal price</Label>
                    <Input plaintext style={{'color': '#3F77BF'}}>{maximum_goal_price}</Input>
                  </FormGroup>
                </Col>
              </Row>

              <Button primary
                type={'submit'}
                disabled={pristine || submitting || !uploadedInvoiceId}
                width="160px"
                className="m-t-20"
              >
                Add Invoice
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default reduxForm({
  form: 'addInvoice',
  validate: validateAddInvoice,
  onSubmit: (values, dispatch, props) => {
    const { uploadedInvoiceId } = props;

    // Combine the id from file (once uploaded, with the Redux Form Data
    const combineFormWithIPFSId = {
      ...values,
      uploadedInvoiceId
    };
    props.createInvoice(combineFormWithIPFSId);
  }
})(AddInvoiceForm);

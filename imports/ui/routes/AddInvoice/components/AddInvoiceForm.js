import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
// import Button from '../../../components/styled-components/Button';
import { Block } from '../../../components/styled-components/Divs';
import { H1 } from '../../../components/styled-components/Typography/headers';
import AddInvoiceDropzone from './AddInvoiceDropzone';
import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import {
  renderCurrencySelector,
  renderSelectReactstrap
} from '../../../form-helpers/renderSelectFields';
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

  return (
    <Container>
      <Row>
        <Col xs={{ size: '12' }} lg={{ size: '10', offset: '1' }}>
          <Block invert headerForAnotherBlock>
            <H1 invert>Create Invoice</H1>
          </Block>
          <Block>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={'12'} md={'4'}>
                  {/* Wait for fileSaved to upload, when it does we can submit the form*/}
                  <AddInvoiceDropzone
                    uploadInvoiceFile={uploadInvoiceFile}
                    rejectedFile={rejectedFile}
                    fileLoading={fileLoading}
                    fileSaved={fileSaved}
                  />

                  {/* TODO: Pass fileSaved to the form for submission, we just need some sort of reference to the savedFile (URL, mongo id, to be saved alongside the invoice form */}

                </Col>
                <Col xs={'12'} md={'8'}>

                  <ListGroup>

                    <ListGroupItem>
                      <Field
                        name="currencies"
                        type="select"
                        component={renderCurrencySelector}
                        label="Currency"
                      />

                      {/*https://redux-form.com/7.1.1/docs/api/field.md/#-code-onchange-event-newvalue-previousvalue-gt-void-code-optional-*/}
                      {/* https://github.com/erikras/redux-form/issues/2406#issuecomment-279847557 */}

                      <Field
                        name="Amount"
                        type="text"
                        component={renderInputReactstrap}
                        label="Amount"
                        placeholder="1000"
                        onChange={updateCurrentAmount}
                      />

                      <Field
                        name="Invoicenumber"
                        type="text"
                        component={renderInputReactstrap}
                        label="Invoice Number"
                        placeholder="1"
                        helperText="The reference number on the invoice"
                      />

                      <Field
                        name="DueDate"
                        label="Event Start Date/Time"
                        component={renderDateTimeField}
                        normalize={formatDateTimeMomentObj}
                      />

                      <Field
                        name="DebtorName"
                        type={'text'}
                        component={renderInputReactstrap}
                        label={'Debtor Name'}
                        placeholder={'Satoshi Nakamoto'}
                        helperText={'The name of the client on the invoice'}
                      />

                      <Field
                        name="SaleGoal"
                        type="text"
                        component={renderInputReactstrap}
                        label="Sale Goal:"
                        placeholder={suggested}
                        helperText={
                          'The goal amount set should adhere to our goal amount policies'
                        }
                      />

                    </ListGroupItem>

                    <ListGroupItem>
                      <Button
                        type={'submit'}
                        color={'primary'}
                        disabled={pristine || submitting || !uploadedInvoiceId}
                      >
                        Create
                      </Button>
                    </ListGroupItem>
                  </ListGroup>

                </Col>
              </Row>
            </form>
          </Block>
        </Col>
      </Row>
    </Container>
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

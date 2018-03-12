export const validateRegistration = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};


/*
currencies"USD"
Amount"1000"
Invoicenumber"100"
DueDate"2017-11-01T00:00:00.000Z"
DebtorName"Satoshi Nakamoto"
SaleGoal"950"
 */
export const validateAddInvoice = values => {
  console.table(values);
  const errors = {};

  if (!values.currencies) {
    errors.currencies = 'Required, Please select a currency.';
  }

  if (!values.Amount) {
    errors.Amount = 'Required, Please enter an amount more than 0.';
  }

  if (values.Amount === 0) {
    errors.Amount = 'Please enter an amount more than 0.';
  }

  if (!values.Invoicenumber) {
    errors.Invoicenumber = 'Required.';
  }

  if (!values.DueDate) {
    errors.DueDate= 'Required, please select a date in the future.';
  }

  if (!values.DebtorName) {
    errors.DebtorName = 'Required, please add the name of the debtor.';
  }

  if (!values.SaleGoal) {
    errors.SaleGoal= 'Required, please enter a sale goal.';
  }

  if (values.SaleGoal < values.Amount) {
    errors.SaleGoal= 'Please select a sale goal less than the amount offered.';
  }

  console.log(errors);
  return errors;
};

export const validateLogin = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

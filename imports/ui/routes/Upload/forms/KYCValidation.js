/**
 * @param values, object that is seeded by the intitialValues
 * @param props, the same props that the entire form holds
 * @return object of errors
 */
const validate = (values, props) => {
  const errors = {};
  if (values.bankStatements.length < 1) {
    errors.bankStatements = 'Required';
  }
  if (values.personalIdentification.length < 1) {
    errors.personalIdentification = 'Required';
  }
  if (props.currentUser.isBorrower()) {
    if (!values.onlyAccountConfirmation) {
      errors.onlyAccountConfirmation = 'Required';
    }
  }
  if (!values.currencySelector) {
    errors.currencySelector = 'Required';
  }
  return errors;
};

export default validate;

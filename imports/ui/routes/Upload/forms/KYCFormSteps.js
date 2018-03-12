import React from 'react';
import PropTypes from 'prop-types';
import Steps, { Step } from 'rc-steps';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

const CustomStep = (props) => (
  <Step style={{ fontWeight: 'normal' }} {...props} />
);

const KYCFormSteps = ({ page }) => {
  return (
    <Steps current={page}>
      <Step title="Company" />
      <Step title="Trading" />
      <Step title="Personal" />
      <CustomStep title="Review" />
    </Steps>
  )
};

KYCFormSteps.propTypes = {
  page: PropTypes.number.isRequired
};

export default KYCFormSteps;

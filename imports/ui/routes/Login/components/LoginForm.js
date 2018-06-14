import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { checkCredentials } from '../modules/actions';
import { renderInputReactstrap } from '../../../form-helpers/renderInputTextFields';
import { validateLogin } from '../../../form-helpers/validation';
import Button from '../../../components/styled-components/Button';

const LoginForm = ({ handleSubmit, pristine, submitting, onClickResetPassword }) => (
	<form className="form" onSubmit={handleSubmit}>
		<div className="m-b-30">
			<Field name="email" type="email" component={renderInputReactstrap} label="Email" placeholder={''} />
		</div>
		<div>
			<Field
				name="password"
				type="password"
				component={renderInputReactstrap}
				label="Password"
				placeholder={''}
			/>
		</div>
		<div className="form-group m-b-10 text-right">
			<a href="#" onClick={onClickResetPassword}>Forgot your password?</a>
		</div>
		<div className="form-group m-b-30 text-right">
			<Link to={'/reset-2-fa'}>Can't access your 2-FA device?</Link>
		</div>
		<div className="form-group text-center">
			<Button primary type="submit" width="80%" disabled={pristine || submitting}>
				Log In
			</Button>
		</div>
	</form>
);

// Because the LoginForm is displayed in the same
// view for both Borrowers and Investors
// we use pass the `form` prop with a uid for each login form.
export default reduxForm({
  // https://redux-form.com/7.0.4/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-
  // onSubmit takes values and dispatch as parameters
  onSubmit: ({ email, password }, dispatch) => {
    dispatch(checkCredentials(email, password));
  },
  validate: validateLogin
})(LoginForm);

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';
import 'react-rangeslider/lib/index.css';
import '../../libs/redux-toastr/index.css';
import '../../libs/styles/index.css';
import PrivateRoute from '../../route-helpers/PrivateRoute';
import Login from '../../routes/Login';
import Registration from '../../routes/Registration';
import ResetPasswordConfirm from '../../routes/ResetPasswordConfirm';
import ResetTwoFAKey from '../../routes/ResetTwoFAKey';
import ResendVerification from '../../routes/ResendVerification';
import PrivateApp from '../PrivateApp';
import Check2FA from '../../components/Requires2FA';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<div>
			<Switch>
				{/* These are public routes */}
				<Route path="/login" component={Login} />
				<Route path="/registration" component={Registration} />
				<Route exact path="/reset-password/:token" component={ResetPasswordConfirm} />
				<Route exact path="/resend-verification" component={ResendVerification} />
				<Route exact path="/reset-2-fa" component={ResetTwoFAKey} />
				<Route exact path="/reset-2-fa/:token" component={Check2FA} />
				{/* These routes require the user to be authenticated */}
				<PrivateRoute path="/" component={PrivateApp} />
			</Switch>

			<ReduxToastr preventDuplicates position="top-center" progressBar />

			<Check2FA />
		</div>
	</ThemeProvider>
);

export default App;

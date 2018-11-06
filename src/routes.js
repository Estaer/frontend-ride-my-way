import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './containers/auth/signupContainer';
import LoginPage from './containers/auth/loginContainer';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/signup" component={SignupPage} exact />
			<Route path="/" component={LoginPage} exact />
		</Switch>
	</Router>
);

export default Routes;

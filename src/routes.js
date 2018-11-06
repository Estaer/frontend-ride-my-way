import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './containers/auth/signupContainer';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" component={SignupPage} />
		</Switch>
	</Router>
);

export default Routes;

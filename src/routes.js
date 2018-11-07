import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './containers/auth/signupContainer';
import LoginPage from './containers/auth/loginContainer';
import RideOffer from './containers/rides/createRidesContainer';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/signup" component={SignupPage} exact />
			<Route path="/" component={LoginPage} exact />
			<Route path="/newRide" component={RideOffer} exact />
		</Switch>
	</Router>
);

export default Routes;

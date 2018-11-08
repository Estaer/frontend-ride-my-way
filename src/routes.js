import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './containers/auth/signupContainer';
import LoginPage from './containers/auth/loginContainer';
import RideOffer from './containers/rides/createRidesContainer';
import ViewRideOffer from './containers/rides/viewRidesContainer';
import MyRideOffers from './containers/rides/myRidesContainer';
import MyRequests from './containers/rides/viewRequestsContainer';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/signup" component={SignupPage} exact />
			<Route path="/" component={LoginPage} exact />
			<Route path="/newRide" component={RideOffer} exact />
			<Route path="/rideOffers" component={ViewRideOffer} exact />
			<Route path="/myRides" component={MyRideOffers} exact />
			<Route path="/requests" component={MyRequests} exact />
		</Switch>
	</Router>
);

export default Routes;

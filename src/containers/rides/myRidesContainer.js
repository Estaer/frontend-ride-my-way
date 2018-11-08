import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../navigation/navContainer';
import viewMyRidesAction from '../../actions/rides/viewMyRidesAction';
import MyRides from '../../components/rides/myRides';
import viewRequestsAction from '../../actions/rides/viewRequestsAction';

class MyRideOffers extends React.Component {

	componentDidMount() {
		this.props.dispatch(viewMyRidesAction());
	}

	handleClick = (rideId) => {
		this.props.dispatch(viewRequestsAction(rideId, this.props.history));
	};

	render() {
		return (
			<div>
				<Navigation />
				<MyRides
					handleClick={this.handleClick}
					rideData={this.props.rides}
					error={this.state}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => ({ rides: state.myRidesReducer.rides });

MyRideOffers.propTypes = {
	dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(MyRideOffers);

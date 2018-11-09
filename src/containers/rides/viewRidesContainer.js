import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../navigation/navContainer';
import ViewRide from '../../components/rides/viewRides';
import viewRidesAction from '../../actions/rides/viewRidesAction';
import requestRidesAction from '../../actions/rides/requestRideAction';

class ViewRideOffer extends React.Component {

	componentDidMount() {
		this.props.dispatch(viewRidesAction());
	}

	handleClick = (ride_id) => {
		this.props.dispatch(requestRidesAction(ride_id, this.props.history));

	};

	render() {
		return (
			<div>
				<Navigation />
				<ViewRide
					handleClick={this.handleClick}
					rideData={this.props.rides}
					error={this.state}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => ({ rides: state.viewRidesReducer.rides });

ViewRideOffer.propTypes = {
	dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(ViewRideOffer);

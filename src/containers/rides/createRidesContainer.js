import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ride from '../../components/rides/createRides';
import Navigation from '../navigation/navContainer';
import createRidesAction from '../../actions/rides/createRidesAction';

class RideOffer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetingpoint: '',
			meetingpointError: '',
			departure: '',
			departureError: '',
			destination: '',
			destinationError: '',
			slots: '',
			slotsError: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateUserData = () => {
		const {
			meetingpoint, departure, destination, slots
		} = this.state;

		let isValid = true;

		if (meetingpoint.length === 0) {
			this.setState({ meetingpointError: 'Meeting point is required' });
			isValid = false;
		}
		if (departure.length === 0) {
			this.setState({ departureError: 'Departure time is required' });
			isValid = false;
		}
		if (destination.length === 0) {
			this.setState({ destinationError: 'Destination time is required' });
			isValid = false;
		}
		if (slots.length === 0) {
			this.setState({ slotsError: 'Number of available slots is required' });
			isValid = false;
		}
		return isValid;
	};

	handleChange = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
	    e.preventDefault();
	    if (this.validateUserData()) {
	    	const {
				meetingpoint, departure, destination, slots 
			} = this.state;
	    	this.props.dispatch(createRidesAction({
				meetingpoint, departure, destination, slots 
			}));
	    }
	};

	render() {
		return (
			<div>
				<Navigation />
				<Ride
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					error={this.state}
				/>
			</div>
		);
	}
}

RideOffer.propTypes = {
	dispatch: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(RideOffer);

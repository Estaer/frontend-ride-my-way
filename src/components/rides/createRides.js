import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/rides/rideForm.scss';

const Ride = ({ handleSubmit, handleChange, error }) => (
	<div className="rideForm">
		<div className="row">
			<div className="col s12 m6 offset-m3 l4 offset-l4">
				<div className="card darken-1">
					<div className="card-content white-text">
						<span className="card-title black-text center">Create New Ride Offer</span>
						<div className="row">
							<form className="col s12" id="reg-form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="input-field col s12">
										<input id="meetingpoint" name="meetingpoint" type="text" onChange={handleChange} />
										<label htmlFor="meetingpoint">Meet me at...</label>
										<div className="red-text">{error.meetingpointError}</div>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="departure" name="departure" type="text" placeholder="format - 12/07/18-9:00am" onChange={handleChange} />
										<label htmlFor="departure">We set off on...</label>
										<div className="red-text">{error.departureError}</div>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="destination" name="destination" type="text" onChange={handleChange} />
										<label htmlFor="destination">Our destination is..</label>
										<div className="red-text">{error.destinationError}</div>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="slots" name="slots" type="text" onChange={handleChange} />
										<label htmlFor="slots">Number of available slots...</label>
										<div className="red-text">{error.slotsError}</div>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s6 offset-s3">
										<button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Add Offer</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
Ride.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired
};
export default Ride;

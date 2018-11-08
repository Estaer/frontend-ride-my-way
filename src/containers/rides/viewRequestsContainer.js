import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../navigation/navContainer';
import ViewRideRequests from '../../components/rides/viewRequests';
import statusAction from '../../actions/rides/statusAction';

class MyRequests extends React.Component {

	handleClick = (rideId, requestId, status) => {
		this.props.dispatch(statusAction(rideId, requestId, { status }));
	};

	render() {
		return (
			<div>
				<Navigation />
				<ViewRideRequests
					requestData={this.props.requests}
					error={this.state}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => ({ requests: state.viewRequestsReducer.requests });

MyRequests.propTypes = {
	dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(MyRequests);

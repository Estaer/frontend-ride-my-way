import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../navigation/navContainer';
import ViewRideRequests from '../../components/rides/viewRequests';

class MyRequests extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<ViewRideRequests
					requestData={this.props.requests}
					error={this.state}
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

import React from 'react';
import '../../styles/rides/rideForm.scss';

const ViewRideRequests = ({ requestData }) => (
	<div className="card ol s12 m6 offset-m3 l4 offset-l4 darken-1">
		<div className="card-content">
			<span className="card-title black-text center">Requests to this ride offer</span>
			<table className="ridesTable striped centered">
				<thead>
					<tr>
						<th>Request_ID</th>
						<th>Name</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						requestData.map(requests => (
							<tr key={requests.ride_id}>
								<td>{requests.request_id}</td>
								<td>{requests.name}</td>
								<td>{requests.status}</td>
								<td>
									<button
										className="btn btn-small btn-register waves-effect green darken-3"
										type="submit"
										name="action"
									>Accept
									</button>
								</td>
								<td>
									<button
										className="btn btn-small btn-register waves-effect red darken-1"
										type="submit"
										name="action"
									>Decline
									</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>

		</div>
	</div>

);
export default ViewRideRequests;

import React from 'react';
import '../../styles/rides/rideForm.scss';

const ViewRideRequests = ({ requestData, handleClick }) => (
	<div className="container col s12 m6 offset-m3 l12">
		<div className=" rides card darken-1">
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
								<tr key={requests.request_id}>
									<td>{requests.request_id}</td>
									<td>{requests.name}</td>
									<td>{requests.status}</td>
									<td>
										<div className="status">
											<button
												className="btn btn-small btn-register waves-effect green darken-3"
												type="submit"
												name="action"
												onClick={() => handleClick(requests.ride_id, requests.request_id, 'accepted')}
											>
												<span>Accept</span>
											</button>
										</div>
										<div className="status">
											<button
												className="btn btn-small btn-register waves-effect red darken-1"
												type="submit"
												name="action"
												onClick={() => handleClick(requests.ride_id, requests.request_id, 'rejected')}
											>
												<span>Reject</span>
											</button>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	</div>

);
export default ViewRideRequests;

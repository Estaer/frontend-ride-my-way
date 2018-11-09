import React from 'react';
import { Link } from 'react-router-dom';

const MyRides = ({ rideData, handleClick }) => (
	<div className="container col s12 m6 offset-m3 l12">
		<div className="rides card darken-1">
			<div className="card-content">
				<span className="card-title black-text center">My ride offers</span>
				<table className="striped centered">
					<thead>
						<tr>
							<th>Meeting Point</th>
							<th>Departure</th>
							<th>Destination</th>
							<th>Slots</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{
							rideData.map(ride => (
								<tr key={ride.ride_id}>
									<td>{ride.meetingpoint}</td>
									<td>{ride.departure}</td>
									<td>{ride.destination}</td>
									<td>{ride.slots}</td>
									<td>
										<Link to="/requests">
											<button
												className="btn btn-small btn-register waves-effect green darken-3"
												type="submit"
												name="action"
												onClick={() => handleClick(ride.ride_id)}
											>
												<span>View Requests</span>
											</button>
										</Link>
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
export default MyRides;

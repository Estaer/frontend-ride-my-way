import React from 'react';

const ViewRide = ({ rideData, handleClick }) => (
	<div className="card darken-1">
		<div className="card-content">
			<span className="card-title black-text center">Available ride offers</span>
			<table className="striped">
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
									<button
										className="btn btn-small btn-register waves-effect green darken-3"
										type="submit"
										name="action"
										onClick={() => handleClick(ride.ride_id)}
									>Request
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
export default ViewRide;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.scss';

const NavBar = () => (
	<div className="navbar-fixed col s12 m6 ">
		<nav className="green darken-4">
			<div className="nav-wrapper">
				<a href="#!" className="brand-logo left hide-on-small-only">
					<i className="material-icons">directions_car</i>
					<Link to="/"><span>Ride My Way</span></Link>
				</a>
				<ul className="right">
					<li><Link to="/newRide">Offer Ride</Link></li>
					<li><Link to="/myRides">My Rides</Link></li>
					<li><Link to="/rideOffers">Request Ride</Link></li>
					<li><a href="sass.html">Logout</a></li>
				</ul>
			</div>
		</nav>
	</div>
);
export default NavBar;

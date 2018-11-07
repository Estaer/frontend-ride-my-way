import React from 'react';
import '../../styles/nav.scss';

const NavBar = () => (
	<div className="navbar-fixed col sm-12 md-6 ">
		<nav className="green darken-4">
			<div className="nav-wrapper">
				<a href="#!" className="brand-logo left hide-on-small-only">
					<i className="material-icons">directions_car</i>
					Ride My Way
				</a>
				<ul className="right">
					<li><a href="sass.html">Offer Ride</a></li>
					<li><a href="badges.html">Request Ride</a></li>
					<li><a href="sass.html">View Requests</a></li>
					<li><a href="sass.html">Logout</a></li>
				</ul>
			</div>
		</nav>
	</div>
);
export default NavBar;

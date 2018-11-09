import React from 'react';
import '../../styles/auth/authStyles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignupForm = ({ handleSubmit, handleChange, error }) => (
	<div className="row">
		<div className="signupForm col s12 m6 offset-m3 l4 offset-l4">
			<div className="title white-text center"><i className="material-icons">directions_car</i>RIDE MY WAY</div>
			<div className="card darken-1">
				<div className="card-content white-text">
					<span className="card-title black-text">Sign up</span>
					<div className="row">
						<form className="col s12" id="reg-form" onSubmit={handleSubmit}>
							<div className="row">
								<div className="input-field col s12">
									<input id="first_name" name="firstname" type="text" onChange={handleChange} />
									<label htmlFor="first_name">First Name</label>
									<div className="red-text">{error.firstnameError}</div>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="last_name" name="lastname" type="text" onChange={handleChange} />
									<label htmlFor="last_name">Last Name</label>
									<div className="red-text">{error.lastnameError}</div>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="user_name" name="username" type="text" onChange={handleChange} />
									<label htmlFor="user_name">Username</label>
									<div className="red-text">{error.usernameError}</div>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="password" name="password" type="password" onChange={handleChange} />
									<label htmlFor="password">Password</label>
									<div className="red-text">{error.passwordError}</div>
								</div>
							</div>
							<div className="row">
								<div className="input-field black-text col s6">
									<span>Already have an account?</span>
									<br />
									<Link to="/"><span className="a_login blue-grey-text ">Login</span></Link>
								</div>
								<div className="input-field col s6">
									<button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Signup</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
);

SignupForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired
};

export default SignupForm;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../../components/auth/signup';
import signupAction from '../../actions/auth/signupAction';

class SignupPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			firstnameError: '',
			lastname: '',
			lastnameError: '',
			username: '',
			usernameError: '',
			password: '',
			passwordError: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateUserData = () => {
		const {
			firstname, lastname, username, password
		} = this.state;

		let isValid = true;

		if (firstname.length === 0) {
			this.setState({ firstnameError: 'First name is required' });
			isValid = false;
		}
		if (lastname.length === 0) {
			this.setState({ lastnameError: 'Last name is required' });
			isValid = false;
		}
		if (username.length === 0) {
			this.setState({ usernameError: 'Username is required' });
			isValid = false;
		}
		if (password.length === 0) {
			this.setState({ passwordError: 'Password is required' });
			isValid = false;
		} else if (password.length < 5) {
			this.setState({ passwordError: 'Password must have atleast 5 characters' });
			isValid = false;
		}
		return isValid;
	};

	handleChange = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
	    e.preventDefault();
	    if (this.validateUserData()) {
	    	const userData = {
				username: this.state.username,
			    lastname: this.state.lastname,
			    firstname: this.state.firstname,
			    password: this.state.password
			};
	    	this.props.dispatch(signupAction(userData, this.props.history));
	    }
	};

	render() {
		return (
			<div>
				<SignupForm
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					error={this.state}
				/>
			</div>
		);
	}
}
SignupPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(SignupPage);


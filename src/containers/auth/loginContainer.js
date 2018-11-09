import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/auth/login';
import loginAction from '../../actions/auth/loginAction';

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			usernameError: '',
			password: '',
			passwordError: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateUserData = () => {
		const { username, password } = this.state;

		let isValid = true;

		if (username.length === 0) {
			this.setState({ usernameError: 'Username is required' });
			isValid = false;
		}
		if (password.length === 0) {
			this.setState({ passwordError: 'Password is required' });
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
			    password: this.state.password
			};
	    	this.props.dispatch(loginAction(userData, this.props.history));
	    }
	};

	render() {
		return (
			<div>
				<LoginForm
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					error={this.state}
				/>
			</div>
		);
	}
}
LoginPage.propTypes = { dispatch: PropTypes.func.isRequired };
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(LoginPage);


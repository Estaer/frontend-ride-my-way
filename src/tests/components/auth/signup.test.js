import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../../components/auth/signup';

describe('SignupForm', () => {

	const errors = {
		firstNameError: '',
		lastNameError: '',
		usernameError: '',
		passwordError: ''
	};

	let mountedSignupForm;
	const func = jest.fn;
	beforeEach(() => {
		mountedSignupForm = shallow(<SignupForm
			error={errors}
			handleChange={func}
			handleSubmit={func}
		/>);
	});

	it('renders without crashing', () => {
		shallow(<SignupForm
			error={errors}
			handleChange={func}
			handleSubmit={func}
		/>);
	});

});

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import SignupPage, { SignupPage as SignupPageTest } from '../../../containers/auth/signupContainer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore([thunk])({});

describe('Signup', () => {
	it('should render without crashing', () => {
		mount(
			<MemoryRouter>
				<Provider store={store}>
					<SignupPage data={{}} dispatch={store.dispatch}/>
				</Provider>
			</MemoryRouter>
		);

	});
});
describe('Sign up handlers', () => {

	let wrapper;
	let instance;

	beforeEach(() => {

		wrapper = shallow(
			<SignupPageTest data={{}} dispatch={store.dispatch} />
		);
		instance = wrapper.instance();
	});

	it('should call handleSubmit', () => {
		instance.handleSubmit({ preventDefault: jest.fn });
	});

	it('should call handleChange', () => {
		instance.handleChange({ target: { name: 'username', value: 'essa' } });
	});

	it('should validate password', () => {
		instance.setState({ password: 'gfh' });
		instance.handleSubmit({ preventDefault: jest.fn });
	});

	it('should submit valid data', () => {
		instance.setState({
			firstname: 'adfasrg', lastname: 'adfasrg', username: 'adfasrg', password: 'gfghfjamsn' 
		});
		instance.handleSubmit({ preventDefault: jest.fn });
	});

});

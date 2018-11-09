import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import LoginPage, { LoginPage as LoginPageTest } from '../../../containers/auth/loginContainer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore([thunk])({});

describe('Login', () => {
	it('should render without crashing', () => {
		mount(
			<MemoryRouter>
				<Provider store={store}>
					<LoginPage data={{}} dispatch={store.dispatch}/>
				</Provider>
			</MemoryRouter>
		);

	});
});
describe('login handlers', () => {

	let wrapper;
	let instance;

	beforeEach(() => {

		wrapper = shallow(
			<LoginPageTest data={{}} dispatch={store.dispatch} />
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
		instance.setState({ password: '' });
		instance.handleSubmit({ preventDefault: jest.fn });
	});

	it('should submit valid data', () => {
		instance.setState({
			 username: 'adfasrg', password: 'gfghfjamsn'
		});
		instance.handleSubmit({ preventDefault: jest.fn });
	});

});

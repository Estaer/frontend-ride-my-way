import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { SignupPage } from '../../containers/auth/signupContainer';

const store = configureStore([thunk])({});

describe('shallow render signup', () => {

	let wrapper;

	beforeEach(() => {

		wrapper = shallow(
			<Provider store={store}>
				<SignupPage data={{}} dispatch={store.dispatch} />
			</Provider>
		);
	});

	it('render signup components functions.', () => {
		wrapper = shallow(
			<Provider store={store}>
				<SignupPage
					data={{}}
					dispatch={store.dispatch}

				/>
			</Provider>
		);
		// wrapper.instance().handleChange({ target: { name: 'userName', value: 'huxy' } });

	});
});

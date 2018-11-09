import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import RideOffer, { RideOffer as RideOfferTest } from '../../../containers/rides/createRidesContainer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore([thunk])({});

describe('Create Ride offers', () => {
	it('should render without crashing', () => {
		mount(
			<MemoryRouter>
				<Provider store={store}>
					<RideOffer data={{}} dispatch={store.dispatch} />
				</Provider>
			</MemoryRouter>
		);

	});
});
describe('Create rides handlers', () => {

	let wrapper;
	let instance;

	beforeEach(() => {

		wrapper = shallow(
			<RideOfferTest data={{}} dispatch={store.dispatch} />
		);
		instance = wrapper.instance();
	});

	it('should call handleSubmit', () => {
		instance.handleSubmit({ preventDefault: jest.fn });
	});

	it('should call handleChange', () => {
		instance.handleChange({ target: { name: 'meetingpoint', value: 'kampala' } });
	});

	it('should validate fields', () => {
		instance.setState({ meetingpoint: '' });
		instance.handleSubmit({ preventDefault: jest.fn });
	});

	it('should submit valid data', () => {
		instance.setState({
			 meetingpoint: 'kampala', departure: '12-08-17:9:00am', destination: 'kyanja', slots: '5'
		});
		instance.handleSubmit({ preventDefault: jest.fn });
	});

});

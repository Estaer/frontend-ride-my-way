import React from 'react';
import { shallow } from 'enzyme';
import Ride from '../../../components/rides/createRides';

describe('Create ride form', () => {

	const errors = {
		meetingpointError: '',
		departureError: '',
		destinationError: '',
		slotsError: ''
	};

	let mountedRideForm;
	const func = jest.fn;
	beforeEach(() => {
		mountedRideForm = shallow(<Ride
			error={errors}
			handleChange={func}
			handleSubmit={func}
		/>);
	});

	it('renders without crashing', () => {
		shallow(<Ride
			error={errors}
			handleChange={func}
			handleSubmit={func}
		/>);
	});

});

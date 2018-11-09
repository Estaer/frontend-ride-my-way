import React from 'react';
import { mount, shallow } from 'enzyme';
import ViewRideRequests from '../../../components/rides/viewRequests';

describe('Create ride form', () => {

	let mountedRideRequests;

	const func = jest.fn;
	beforeEach(() => {
		mountedRideRequests = shallow(<ViewRideRequests
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			requestData={[{ ride_id: '' }]}
		/>);
	});

	it('renders without crashing', () => {
		mount(<ViewRideRequests
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			requestData={[]}
		/>);
	});


});

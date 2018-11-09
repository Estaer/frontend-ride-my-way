import React from 'react';
import { shallow } from 'enzyme';
import ViewRide from '../../../components/rides/viewRides';

describe('view rides', () => {

	let mountedRides;

	const func = jest.fn;
	beforeEach(() => {
		mountedRides = shallow(<ViewRide
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			rideData={[{ ride_id: '' }]}
			error={{}}
		/>);
	});

	it('renders without crashing', () => {
		shallow(<ViewRide
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			rideData={[]}
			error={{}}
		/>);
	});

	it('it clicks button', () => {
		const submitButton = mountedRides.find('button');
		submitButton.simulate('click');
	});

});

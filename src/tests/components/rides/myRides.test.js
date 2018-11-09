import React from 'react';
import { shallow } from 'enzyme';
import MyRides from '../../../components/rides/myRides';

describe('view my rides', () => {

	let mountedMyRides;

	const func = jest.fn;
	beforeEach(() => {
		mountedMyRides = shallow(<MyRides
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			rideData={[{ ride_id: '' }]}
		/>);
	});

	it('renders without crashing', () => {
		shallow(<MyRides
			handleChange={func}
			handleSubmit={func}
			handleClick={func}
			rideData={[]}
		/>);
	});

	it('it clicks button', () => {
		const submitButton = mountedMyRides.find('button');
		submitButton.simulate('click');
	});

});

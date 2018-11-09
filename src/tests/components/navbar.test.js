import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/navigation/navBar';

describe('Nav bar', () => {

	it('renders without crashing', () => {
		shallow(<NavBar />);
	});
});

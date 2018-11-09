import { shallow } from 'enzyme';
import React from 'react';

import Navigation from '../../containers/navigation/navContainer';

describe('shallow render navbar', () => {
	it('renders without crashing.', () => {
		shallow(<Navigation />);
	});
});

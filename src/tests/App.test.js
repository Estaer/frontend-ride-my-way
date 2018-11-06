import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';

const store = configureStore([thunk])({});

it('renders without crashing', () => {
	mount(<Provider store={store}>
		    <App />
	      </Provider>);
});

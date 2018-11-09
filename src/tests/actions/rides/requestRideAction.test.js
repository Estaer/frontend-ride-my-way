import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import ACTION_TYPE from '../../../actions/actionTypes';
import requestRidesAction, { requestRidesFail, requestRidesSuccess } from '../../../actions/rides/requestRideAction';
import { BASE_URL } from '../../../constants';

describe('Request ride action creators', () => {
	let ride;
	it('should call REQUEST_RIDE_FAIL', () => {
		const expectedAction = { payload: ride, type: 'REQUEST_RIDES_FAIL' };
		expect(requestRidesFail(ride)).toEqual(expectedAction);

	});

	it('should call REQUEST RIDE SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.REQUEST_RIDES_SUCCESS,
			payload: 'Ride offer created'
		};
		expect(requestRidesSuccess('Ride offer created')).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('request rides actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 201', () => {
		moxios.stubRequest(`${BASE_URL}rides/3}/requests`, {
			status: 201,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'Request successfully sent' },
				type: 'REQUEST_RIDES_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(requestRidesAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(`${BASE_URL}rides/3}/requests`, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { undefined },
				type: 'REQUEST_RIDES_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(requestRidesAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

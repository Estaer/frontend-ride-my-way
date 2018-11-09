import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import ACTION_TYPE from '../../../actions/actionTypes';
import { API_URLS } from '../../../constants';
import viewRidesAction, { viewRidesFail, viewRidesSuccess } from '../../../actions/rides/viewRidesAction';

describe('View rides action creators', () => {
	let ride_offers;
	it('should call VIEW_RIDES_FAIL', () => {
		const expectedAction = { payload: ride_offers, type: 'VIEW_RIDES_FAIL' };
		expect(viewRidesFail(ride_offers)).toEqual(expectedAction);

	});

	it('should call VIEW RIDES SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.VIEW_RIDES_SUCCESS,
			payload: undefined
		};
		expect(viewRidesSuccess()).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('view rides actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 200', () => {
		moxios.stubRequest(API_URLS.VIEW_RIDES_URL, {
			status: 200,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: {},
				type: 'VIEW_RIDES_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewRidesAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(API_URLS.VIEW_RIDES_URL, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { undefined },
				type: 'VIEW_RIDES_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewRidesAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

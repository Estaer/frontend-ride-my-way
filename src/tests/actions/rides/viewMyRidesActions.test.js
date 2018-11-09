import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import ACTION_TYPE from '../../../actions/actionTypes';
import viewMyRidesAction, { viewMyRidesFail, viewMyRidesSuccess } from '../../../actions/rides/viewMyRidesAction';
import { API_URLS} from '../../../constants';

describe('View my rides action creators', () => {
	let ride;
	it('should call MY_RIDES_SUCCESS_FAIL', () => {
		const expectedAction = { payload: ride, type: 'MY_RIDES_FAIL' };
		expect(viewMyRidesFail(ride)).toEqual(expectedAction);

	});

	it('should call MY RIDE SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.MY_RIDES_SUCCESS,
			payload: undefined
		};
		expect(viewMyRidesSuccess()).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('view my rides actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 200', () => {
		moxios.stubRequest(API_URLS.MY_RIDES_URL, {
			status: 200,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: {},
				type: 'MY_RIDES_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewMyRidesAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(API_URLS.MY_RIDES_URL, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { undefined },
				type: 'MY_RIDES_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewMyRidesAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

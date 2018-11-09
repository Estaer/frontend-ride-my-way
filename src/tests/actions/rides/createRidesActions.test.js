import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import { API_URLS } from '../../../constants';
import ACTION_TYPE from '../../../actions/actionTypes';
import createRidesAction, {
	createRideFail,
	createRideSuccess
} from '../../../actions/rides/createRidesAction';

describe('Create ride action creators', () => {
	let ride;
	it('should call CREATE_RIDE_FAIL', () => {
		const expectedAction = { payload: ride, type: 'CREATE_RIDE_FAIL' };
		expect(createRideFail(ride)).toEqual(expectedAction);

	});

	it('should call CREATE RIDE SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.CREATE_RIDE_SUCCESS,
			payload: 'Ride offer created'
		};
		expect(createRideSuccess('Ride offer created')).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('create rides actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 201', () => {
		moxios.stubRequest(API_URLS.CREATE_RIDE_URL, {
			status: 201,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'Ride offer created' },
				type: 'CREATE_RIDE_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(createRidesAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(API_URLS.CREATE_RIDE_URL, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { },
				type: 'CREATE_RIDE_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(createRidesAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

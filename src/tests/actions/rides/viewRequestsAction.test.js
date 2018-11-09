import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import ACTION_TYPE from '../../../actions/actionTypes';
import { BASE_URL } from '../../../constants';
import viewRequestsAction, {
	viewRequestsFail,
	viewRequestsSuccess
} from '../../../actions/rides/viewRequestsAction';

describe('View my requests action creators', () => {
	let ride;
	it('should call VIEW_REQUESTS_FAIL', () => {
		const expectedAction = { payload: ride, type: 'VIEW_REQUESTS_FAIL' };
		expect(viewRequestsFail(ride)).toEqual(expectedAction);

	});

	it('should call VIEW REQUESTS SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.VIEW_REQUESTS_SUCCESS,
			payload: undefined
		};
		expect(viewRequestsSuccess()).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('view requests actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 200', () => {
		moxios.stubRequest(`${BASE_URL}users/rides/5/requests`, {
			status: 200,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: {},
				type: 'VIEW_REQUESTS_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewRequestsAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(`${BASE_URL}users/rides/5/requests`, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { undefined },
				type: 'VIEW_REQUESTS_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(viewRequestsAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import ACTION_TYPE from '../../../actions/actionTypes';
import { changeStatusFail, changeStatusSuccess } from '../../../actions/rides/statusAction';
import { BASE_URL } from '../../../constants';
import statusAction from '../../../actions/rides/statusAction';

describe('change status action creators', () => {
	let status;
	it('should call CHANGE_STATUS_FAIL', () => {
		const expectedAction = { payload: status, type: 'CHANGE_STATUS_FAIL' };
		expect(changeStatusFail(status)).toEqual(expectedAction);

	});

	it('should call CHANGE_STATUS_SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.CHANGE_STATUS_SUCCESS,
			payload: undefined
		};
		expect(changeStatusSuccess()).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

const mockData = {
	message: ''
};

describe('change status', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 200', () => {
		moxios.stubRequest(`${BASE_URL}users/rides/12/requests/6`, {
			status: 200,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: {},
				type: 'CHANGE_STATUS_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(statusAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 404', () => {
		moxios.stubRequest(`${BASE_URL}users/rides/12/requests/6`, {
			status: 404,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { undefined },
				type: 'CHANGE_STATUS_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(statusAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

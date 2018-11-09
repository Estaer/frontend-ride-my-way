import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import { API_URLS } from '../../../constants';
import ACTION_TYPE from '../../../actions/actionTypes';
import signupAction, { signupFail, signupSuccess } from '../../../actions/auth/signupAction';

describe('Signup action creators', () => {

	it('should call SIGNUP_FAIL', () => {
		const expectedAction = { payload: 'An error occured', type: 'SIGNUP_FAIL' };
		expect(signupFail('An error occured')).toEqual(expectedAction);

	});

	it('should call SIGNUP_SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.SIGNUP_SUCCESS,
			payload: 'User Registered'
		};
		expect(signupSuccess('User Registered')).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

jest.mock('react-notify-toast');

const mockData = {
	message: ''
};

describe('Signup actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 201', () => {
		moxios.stubRequest(API_URLS.SIGNUP_URL, {
			status: 201,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'User Registered' },
				type: 'SIGNUP_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(signupAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 401', () => {
		moxios.stubRequest(API_URLS.SIGNUP_URL, {
			status: 401,
			response: mockData
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'An error occured' },
				type: 'SIGNUP_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(signupAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

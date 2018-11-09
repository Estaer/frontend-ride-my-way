import reduxThunk from 'redux-thunk';
import configurestore from 'redux-mock-store';
import moxios from 'moxios';
import loginAction, { loginFail, loginSuccess } from '../../../actions/auth/loginAction';
import { API_URLS } from '../../../constants';
import ACTION_TYPE from '../../../actions/actionTypes';

describe('Login action creators', () => {

	it('should call LOGIN_FAIL', () => {
		const expectedAction = { payload: 'Wrong username or password', type: 'LOGIN_FAIL' };
		expect(loginFail('Wrong username or password')).toEqual(expectedAction);

	});

	it('should call LOGIN_SUCCESS', () => {
		const expectedAction = {
			type: ACTION_TYPE.LOGIN_SUCCESS,
			payload: 'Successfully logged in'
		};
		expect(loginSuccess('Successfully logged in')).toEqual(expectedAction);
	});

});

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);

jest.mock('react-notify-toast');

const mockData = {
	message: ''
};

describe('login actions', () => {
	let store;

	beforeEach(() => {
		moxios.install();
		store = mockStore();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should return 200', () => {
		moxios.stubRequest(API_URLS.LOGIN_URL, {
			status: 200,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'Successfully logged in' },
				type: 'LOGIN_SUCCESS'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(loginAction(mockData, { history: { push: jest.fn } })).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return 401', () => {
		moxios.stubRequest(API_URLS.LOGIN_URL, {
			status: 401,
			response: { data: mockData }
		});

		store.clearActions();
		const expectedActions = [{ isLoading: true, type: 'LOADING' },
			{
				payload: { message: 'Wrong username or password' },
				type: 'LOGIN_FAIL'
			}, { isLoading: false, type: 'LOADING' }];
		store.dispatch(loginAction(mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});

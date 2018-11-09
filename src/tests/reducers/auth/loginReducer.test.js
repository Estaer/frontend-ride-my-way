import ACTION_TYPE from '../../../actions/actionTypes';
import loginReducer from '../../../reducers/auth/loginReducer';

describe('Login reducers', () => {

	it('should test login reducer on successful login', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			errorMessage: {},
			payload: {},
			responseData: {}
		};
		const action = { type: ACTION_TYPE.LOGIN_SUCCESS, payload: {} };
		expect(loginReducer(initialState, action)).toEqual(expected);
	});

	it('should test login reducer on failed login', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			errorMessage: {},
			responseData: {}
		};
		const action = { type: ACTION_TYPE.LOGIN_FAIL, payload: {} };
		expect(loginReducer(initialState, action)).toEqual(expected);
	});

});

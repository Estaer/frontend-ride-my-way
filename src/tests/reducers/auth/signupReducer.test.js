import ACTION_TYPE from '../../../actions/actionTypes';
import signupReducer from '../../../reducers/auth/signupReducer';

describe('Signup reducers', () => {

	it('should test signup reducer on successful signup', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			errorMessage: {},
			payload: {},
			responseData: {}
		};
		const action = { type: ACTION_TYPE.SIGNUP_SUCCESS, payload: {} };
		expect(signupReducer(initialState, action)).toEqual(expected);
	});

	it('should test signup reducer on failed signup', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			errorMessage: {},
			responseData: {}
		};
		const action = { type: ACTION_TYPE.SIGNUP_FAIL, payload: {} };
		expect(signupReducer(initialState, action)).toEqual(expected);
	});

});

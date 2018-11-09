import ACTION_TYPE from '../../../actions/actionTypes';
import requestRidesReducer from '../../../reducers/rides/requestRidesReducer';

describe('Request rides reducers', () => {

	it('should test request rides reducer on successful request', () => {
		const initialState = {
			rides: [],
			errorMessage: {}
		};
		const expected = {
			rides: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.REQUEST_RIDES_SUCCESS, payload: {} };
		expect(requestRidesReducer(initialState, action)).toEqual(expected);
	});

	it('should test create rides reducer on failed creation', () => {
		const initialState = {
			rides: [],
			errorMessage: {}
		};
		const expected = {
			rides: [],
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.REQUEST_RIDES_FAIL, payload: {} };
		expect(requestRidesReducer(initialState, action)).toEqual(expected);
	});

});

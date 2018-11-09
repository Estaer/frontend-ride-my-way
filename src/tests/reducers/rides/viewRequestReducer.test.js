import ACTION_TYPE from '../../../actions/actionTypes';
import viewRequestReducer from '../../../reducers/rides/viewRequestReducer';

describe('View request reducers', () => {

	it('should test view request reducer on successful retrieval', () => {
		const initialState = {
			requests: [],
			errorMessage: {}
		};
		const expected = {
			requests: [],
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.VIEW_RIDES_SUCCESS, payload: {} };
		expect(viewRequestReducer(initialState, action)).toEqual(expected);
	});

	it('should test View request reducer on failed retrieval', () => {
		const initialState = {
			requests: [],
			errorMessage: {}
		};
		const expected = {
			requests: [],
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.VIEW_REQUESTS_FAIL, payload: {} };
		expect(viewRequestReducer(initialState, action)).toEqual(expected);
	});

});

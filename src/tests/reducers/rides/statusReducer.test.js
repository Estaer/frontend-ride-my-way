import ACTION_TYPE from '../../../actions/actionTypes';
import statusReducer from '../../../reducers/rides/statusReducer';

describe('Change status reducers', () => {

	it('should test change status reducer on successful update', () => {
		const initialState = {
			requests: [],
			errorMessage: {}
		};
		const expected = {
			requests: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.CHANGE_STATUS_SUCCESS, payload: {} };
		expect(statusReducer(initialState, action)).toEqual(expected);
	});

	it('should test change status reducer on failed update', () => {
		const initialState = {
			requests: [],
			errorMessage: {}
		};
		const expected = {
			requests: [],
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.CHANGE_STATUS_FAIL, payload: {} };
		expect(statusReducer(initialState, action)).toEqual(expected);
	});

});

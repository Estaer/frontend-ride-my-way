import ACTION_TYPE from '../../../actions/actionTypes';
import viewRidesReducer from '../../../reducers/rides/viewRideReducer';

describe('View rides reducers', () => {

	it('should test view rides reducer on successful request', () => {
		const initialState = {
			rides: [],
			errorMessage: {}
		};
		const expected = {
			rides: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.VIEW_RIDES_SUCCESS, payload: {} };
		expect(viewRidesReducer(initialState, action)).toEqual(expected);
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
		const action = { type: ACTION_TYPE.VIEW_RIDES_FAIL, payload: {} };
		expect(viewRidesReducer(initialState, action)).toEqual(expected);
	});

});

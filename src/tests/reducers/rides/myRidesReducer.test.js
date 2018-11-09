import ACTION_TYPE from '../../../actions/actionTypes';
import myRidesReducer from '../../../reducers/rides/myRidesReducer';

describe('My rides reducers', () => {

	it('should test myRides reducer on successful retrival', () => {
		const initialState = {
			rides: [],
			errorMessage: {}
		};
		const expected = {
			rides: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.MY_RIDES_SUCCESS, payload: {} };
		expect(myRidesReducer(initialState, action)).toEqual(expected);
	});

	it('should test myRides reducer on failed retrieval', () => {
		const initialState = {
			rides: [],
			errorMessage: {}
		};
		const expected = {
			rides: [],
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.MY_RIDES_FAIL, payload: {} };
		expect(myRidesReducer(initialState, action)).toEqual(expected);
	});

});

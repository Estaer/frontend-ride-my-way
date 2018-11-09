import ACTION_TYPE from '../../../actions/actionTypes';
import createRidesReducer from '../../../reducers/rides/createRidesReducer';

describe('Create rides reducers', () => {

	it('should test create rides reducer on successful creation', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			responseData: {},
			payload: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.CREATE_RIDE_SUCCESS, payload: {} };
		expect(createRidesReducer(initialState, action)).toEqual(expected);
	});

	it('should test create rides reducer on failed creation', () => {
		const initialState = {
			responseData: {},
			errorMessage: {}
		};
		const expected = {
			responseData: {},
			errorMessage: {}
		};
		const action = { type: ACTION_TYPE.CREATE_RIDE_FAIL, payload: {} };
		expect(createRidesReducer(initialState, action)).toEqual(expected);
	});

});

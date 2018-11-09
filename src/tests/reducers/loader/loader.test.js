import ACTION_TYPE from '../../../actions/actionTypes';
import loadingReducer from '../../../reducers/loader/loaderReducer';

describe('loaders', () => {
	it('should test loaders', () => {
		const initialState = {
		};
		const expected = {};
		const action = { type: ACTION_TYPE.LOADING, payload: {} };
		expect(loadingReducer(initialState, action)).toEqual(expected);
	});
});

import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	rides: [],
	errorMessage: {}
};
const requestRidesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.REQUEST_RIDES_SUCCESS:
			return {
				...state,
				rides: action.payload
			};
		case ACTION_TYPE.REQUEST_RIDES_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default requestRidesReducer;

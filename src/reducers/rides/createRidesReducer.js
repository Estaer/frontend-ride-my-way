import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	responseData: {},
	errorMessage: {}
};
const createRideReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.CREATE_RIDE_SUCCESS:
			return {
				...state,
				payload: action.payload
			};
		case ACTION_TYPE.CREATE_RIDE_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default createRideReducer;

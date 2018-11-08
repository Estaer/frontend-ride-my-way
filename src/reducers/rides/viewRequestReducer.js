import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	requests: [],
	errorMessage: {}
};
const viewRequestsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.VIEW_REQUESTS_SUCCESS:
			return {
				...state,
				requests: action.payload
			};
		case ACTION_TYPE.VIEW_REQUESTS_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default viewRequestsReducer;

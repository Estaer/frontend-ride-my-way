import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	requests: [],
	errorMessage: {}
};
const statusReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.CHANGE_STATUS_SUCCESS:
			return {
				...state,
				requests: action.payload
			};
		case ACTION_TYPE.CHANGE_STATUS_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default statusReducer;

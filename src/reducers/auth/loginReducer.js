import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	responseData: {},
	errorMessage: {}
};
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGIN_SUCCESS:
			return {
				...state,
				payload: action.payload
			};
		case ACTION_TYPE.LOGIN_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default loginReducer;

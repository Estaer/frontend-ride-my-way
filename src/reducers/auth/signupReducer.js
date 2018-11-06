import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
	responseData: {},
	errorMessage: {}
};
const signupReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SIGNUP_SUCCESS:
			return {
				...state,
				payload: action.payload
			};
		case ACTION_TYPE.SIGNUP_FAIL:
			return { ...state };
		default:
			return state;
	}
};

export default signupReducer;

import ACTION_TYPE from '../../actions/actionTypes';

const loadingReducer = (state = { isLoading: false }, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOADING:
			return { ...state, isLoading: action.isLoading };
		default:
			return state;
	}
};

export default loadingReducer;

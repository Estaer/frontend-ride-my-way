import ACTION_TYPE from '../actionTypes';

const loadingAction = loading => ({
	type: ACTION_TYPE.LOADING,
	isLoading: loading
});

export default loadingAction;

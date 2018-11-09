import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';
import ACTION_TYPE from '../actionTypes';

export const signupSuccess = user => ({
	type: ACTION_TYPE.SIGNUP_SUCCESS,
	payload: user
});

export const signupFail = errors => ({
	type: ACTION_TYPE.SIGNUP_FAIL,
	payload: errors
});

const signupAction = (user, history) => (dispatch) => {
	dispatch(loadingAction(true));
	return axios.post(API_URLS.SIGNUP_URL,
		user).then((response) => {
		dispatch(loadingAction(false));
		dispatch(signupSuccess(response.data.message));
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		history.push('/');

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(signupFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
		
	});

};
export default signupAction;


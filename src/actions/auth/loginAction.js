import axios from 'axios';
import M from 'materialize-css';
import { API_URLS, AUTH_TOKEN } from '../../constants';
import loadingAction from '../loader/loaderAction';
import ACTION_TYPE from '../actionTypes';

export const loginSuccess = user => ({
	type: ACTION_TYPE.LOGIN_SUCCESS,
	payload: user
});

export const loginFail = errors => ({
	type: ACTION_TYPE.LOGIN_FAIL,
	payload: errors
});

const loginAction = (user, history) => (dispatch) => {
	dispatch(loadingAction(true));
	return axios.post(API_URLS.LOGIN_URL, user).then((response) => {
		if (response.status === 200) {
			const token = response.data.access_token ? response.data.access_token : null;
			localStorage.setItem(AUTH_TOKEN, token);
		}
		dispatch(loadingAction(false));
		dispatch(loginSuccess(response.data.message));
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		history.push('/rideOffers');

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(loginFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });

	});

};
export default loginAction;


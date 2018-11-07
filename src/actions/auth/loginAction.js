import axios from 'axios';
import M from 'materialize-css';
import { API_URLS, AUTH_TOKEN } from '../../constants';
import loadingAction from '../loader/loaderAction';

const loginAction = user => (dispatch) => {
	dispatch(loadingAction(true));
	axios.post(API_URLS.LOGIN_URL, user).then((response) => {
		if (response.status === 200) {
			const token = response.data.access_token ? response.data.access_token : null;
			localStorage.setItem(AUTH_TOKEN, token);
		}
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		dispatch(loadingAction(false));

	}).catch((error) => {
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
		dispatch(loadingAction(false));
	});

};
export default loginAction;


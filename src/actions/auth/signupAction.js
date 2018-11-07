import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';

const signupAction = user => (dispatch) => {
	dispatch(loadingAction(true));
	axios.post(API_URLS.SIGNUP_URL,
		user).then((response) => {
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		dispatch(loadingAction(false));

	}).catch((error) => {
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
		dispatch(loadingAction(false));
	});

};
export default signupAction;


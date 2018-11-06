import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';

const signupAction = user => dispatch => axios.post(API_URLS.SIGNUP_URL,
	user).then((response) => {
	M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });

}).catch((error) => {

	M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
});
export default signupAction;


import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';

const createRidesAction = rideData => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	axios.post(API_URLS.CREATE_RIDE_URL, rideData).then((response) => {
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		dispatch(loadingAction(false));

	}).catch((error) => {
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
		dispatch(loadingAction(false));
	});

};
export default createRidesAction;


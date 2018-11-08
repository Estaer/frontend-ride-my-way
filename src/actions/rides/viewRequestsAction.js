import axios from 'axios';
import M from 'materialize-css';
import { BASE_URL } from '../../constants';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';

export const viewRequestsSuccess = requests => ({
	type: ACTION_TYPE.VIEW_REQUESTS_SUCCESS,
	payload: requests
});

export const viewRequestsFail = errors => ({
	type: ACTION_TYPE.VIEW_REQUESTS_FAIL,
	payload: errors
});

const viewRequestsAction = rideId => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	axios.get(`${BASE_URL}users/rides/${rideId}/requests`).then((response) => {

		dispatch(loadingAction(false));
		dispatch(viewRequestsSuccess(response.data.requests));

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(viewRequestsFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
	});

};
export default viewRequestsAction;


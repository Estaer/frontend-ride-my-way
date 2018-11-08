import axios from 'axios';
import M from 'materialize-css';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';
import { BASE_URL } from '../../constants';

export const requestRidesSuccess = rides => ({
	type: ACTION_TYPE.REQUEST_RIDES_SUCCESS,
	payload: rides
});

export const requestRidesFail = errors => ({
	type: ACTION_TYPE.REQUEST_RIDES_FAIL,
	payload: errors
});

const requestRidesAction = (ride_id, history) => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	axios.post(`${BASE_URL}rides/${ride_id}/requests`).then((response) => {
		dispatch(loadingAction(false));
		dispatch(requestRidesSuccess(response.data.message));
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		history.push('/myRides');

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(requestRidesFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
	});

};
export default requestRidesAction;

import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';

export const viewRidesSuccess = rides => ({
	type: ACTION_TYPE.VIEW_RIDES_SUCCESS,
	payload: rides
});

export const viewRidesFail = errors => ({
	type: ACTION_TYPE.VIEW_RIDES_FAIL,
	payload: errors
});

const viewRidesAction = rides => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	return axios.get(API_URLS.VIEW_RIDES_URL, rides).then((response) => {

		dispatch(loadingAction(false));
		dispatch(viewRidesSuccess(response.data.ride_offers));

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(viewRidesFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
	});

};
export default viewRidesAction;


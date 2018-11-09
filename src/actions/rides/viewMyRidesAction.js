import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';

export const viewMyRidesSuccess = rides => ({
	type: ACTION_TYPE.MY_RIDES_SUCCESS,
	payload: rides
});

export const viewMyRidesFail = errors => ({
	type: ACTION_TYPE.MY_RIDES_FAIL,
	payload: errors
});

const viewMyRidesAction = rides => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	return axios.get(API_URLS.MY_RIDES_URL, rides).then((response) => {

		dispatch(loadingAction(false));
		dispatch(viewMyRidesSuccess(response.data.ride_offers));

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(viewMyRidesFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
	});

};
export default viewMyRidesAction;


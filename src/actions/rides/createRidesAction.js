import axios from 'axios';
import M from 'materialize-css';
import { API_URLS } from '../../constants';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';

export const createRideSuccess = ride => ({
	type: ACTION_TYPE.CREATE_RIDE_SUCCESS,
	payload: ride
});

export const createRideFail = errors => ({
	type: ACTION_TYPE.CREATE_RIDE_FAIL,
	payload: errors
});

const createRidesAction = (rideData, history) => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	return axios.post(API_URLS.CREATE_RIDE_URL, rideData).then((response) => {
		dispatch(loadingAction(false));
		dispatch(createRideSuccess(response.data.message));
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });
		history.push('/rideOffers');

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(createRideFail(error.response.data.message));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });

	});

};
export default createRidesAction;


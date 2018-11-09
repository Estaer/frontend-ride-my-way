import axios from 'axios';
import M from 'materialize-css';
import loadingAction from '../loader/loaderAction';
import { addToken } from '../../utils';
import ACTION_TYPE from '../actionTypes';
import { BASE_URL } from '../../constants';
import viewRequestsAction from './viewRequestsAction';

export const changeStatusSuccess = requests => ({
	type: ACTION_TYPE.CHANGE_STATUS_SUCCESS,
	payload: requests
});

export const changeStatusFail = errors => ({
	type: ACTION_TYPE.CHANGE_STATUS_FAIL,
	payload: errors
});

const statusAction = (rideId, requestId, status) => (dispatch) => {
	dispatch(loadingAction(true));
	addToken();
	return axios.put(`${BASE_URL}users/rides/${rideId}/requests/${requestId}`, status).then((response) => {
		dispatch(loadingAction(false));
		dispatch(changeStatusSuccess(response.data.message));
		dispatch(viewRequestsAction(rideId));
		M.toast({ html: `${response.data.message}`, classes: 'green darken-2' });

	}).catch((error) => {
		dispatch(loadingAction(false));
		dispatch(changeStatusFail(error));
		M.toast({ html: `${error.response.data.message}`, classes: 'red darken-2' });
	});

};
export default statusAction;

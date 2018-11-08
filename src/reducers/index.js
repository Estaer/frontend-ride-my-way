import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import loginReducer from './auth/loginReducer';
import loadingReducer from './loader/loaderReducer';
import createRideReducer from './rides/createRidesReducer';
import viewRidesReducer from './rides/viewRideReducer';
import requestRidesReducer from './rides/requestRidesReducer';
import myRidesReducer from './rides/myRidesReducer';
import viewRequestsReducer from './rides/viewRequestReducer';
import statusReducer from './rides/statusReducer';

const reducers = combineReducers({
	signupReducer,
	loginReducer,
	loadingReducer,
	createRideReducer,
	viewRidesReducer,
	requestRidesReducer,
	myRidesReducer,
	viewRequestsReducer,
	statusReducer
});

export default reducers;

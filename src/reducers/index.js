import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import loginReducer from './auth/loginReducer';
import loadingReducer from './loader/loaderReducer';
import createRideReducer from './rides/createRidesReducer';
import viewRidesReducer from './rides/viewRideReducer';
import requestRidesReducer from './rides/requestRidesReducer';

const reducers = combineReducers({
	signupReducer,
	loginReducer,
	loadingReducer,
	createRideReducer,
	viewRidesReducer,
	requestRidesReducer
});

export default reducers;

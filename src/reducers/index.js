import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import loginReducer from './auth/loginReducer';
import loadingReducer from './loader/loaderReducer';
import createRideReducer from './rides/createRidesReducer';

const reducers = combineReducers({
	signupReducer,
	loginReducer,
	loadingReducer,
	createRideReducer
});

export default reducers;

import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import loginReducer from './auth/loginReducer';
import loadingReducer from './loader/loaderReducer';

const reducers = combineReducers({
	signupReducer,
	loginReducer,
	loadingReducer
});

export default reducers;

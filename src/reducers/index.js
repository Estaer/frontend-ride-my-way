import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import loginReducer from './auth/loginReducer';

const reducers = combineReducers({
	signupReducer,
	loginReducer
});

export default reducers;

import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';

const reducers = combineReducers({
	signupReducer
});

export default reducers;

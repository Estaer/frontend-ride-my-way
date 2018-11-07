import axios from 'axios';
import { AUTH_TOKEN } from '../constants';

export const addToken = () => {
	const TOKEN = localStorage.getItem(AUTH_TOKEN);

	if (TOKEN !== null) {
		axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
	}
};

import Axios from 'axios';
import { AUTH_USER, ACCESS_TOKEN } from './types';
import { API_URL } from '../components/config';


export function auth(token) {
	
	const config = {
            headers: {
                Authorization: `${token}`,
            },
            withCredentials: true,
        };
	
	const request = Axios.get(`${API_URL}user/auth`, config).then((response) => response.data);
	
   
    return {
        type: AUTH_USER,
        payload: request,
    };
}

export function refreshAccessToken(dataToSubmit) {
    return {
        type: ACCESS_TOKEN,
        payload: dataToSubmit,
    };
}
import Axios from 'axios';
import { AUTH_USER, ACCESS_TOKEN } from './types';
import { API_URL } from '../components/config';

export function auth() {
    const request = Axios.get(`${API_URL}user/auth`, {
        withCredentials: true,
    }).then((response) => response.data);
    return {
        type: AUTH_USER,
        payload: request,
    };
}

export function refreshAccessToken(dataToSubmit) {
    // const request = Axios.get(`${API_URL}user/refresh`, {
    //     withCredentials: true,
    // }).then((response) => response.data);
    

    // 새로운 Access Token 저장
    return {
        type: ACCESS_TOKEN,
        payload: dataToSubmit,
    };
}
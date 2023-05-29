import Axios from 'axios';
import { AUTH_USER } from './types';

export function auth() {
    let body = {"id" : ''};
    if (document.cookie !== '') {
        var cookies = document.cookie; // 쿠키 문자열 가져오기
        var cookieArray = cookies.split(';'); // 쿠키 문자열을 세미콜론으로 분할하여 배열 생성
		var str = cookieArray.join('');
        // // 쿠키 이름과 값의 구분자 위치 찾기
        var cookieValue = str.split('=')[1];

        
        let params = { "id" : cookieValue };
        body = JSON.stringify(params);
		console.log("test",body);
        
        
    }
    const request = Axios.post('https://backbone-ufribf.run.goorm.site/user/', body, {
            withCredentials: true,
        }).then((response) => response.data);
    return {
        type: AUTH_USER,
        payload: request,
    };
}
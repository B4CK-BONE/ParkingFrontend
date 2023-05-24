import Axios from 'axios';
import { AUTH_USER } from './types';

export function auth() {
    let body = {};
    if (document.cookie !== '') {
        var cookies = document.cookie; // 쿠키 문자열 가져오기
        var cookieArray = cookies.split(';'); // 쿠키 문자열을 세미콜론으로 분할하여 배열 생성

        // // 쿠키 이름과 값의 구분자 위치 찾기
        var separatorIndex = cookieArray.indexOf('=');

        var cookieValue = cookieArray.substring(separatorIndex + 1); // 쿠키 값 추출
        var cookierealValue = cookieValue.trim(";");
        let params = { id: cookierealValue };
        body = JSON.stringify(params);

        
        
    }
    const request = Axios.post('https://backbone-ufribf.run.goorm.site/api/user/auth', body, {
            withCredentials: true,
        }).then((response) => response.data);
    return {
        type: AUTH_USER,
        payload: request,
    };
}
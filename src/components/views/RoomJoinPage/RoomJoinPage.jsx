import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import styled from 'styled-components';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function RoomJoinPage() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['id']);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let roomkey = params.get('roomkey');
        console.log(roomkey);
        // 방 입장하기 버튼 클릭 시 실행되는 로직
        Axios.get(`https://backbone-ufribf.run.goorm.site/main?roomkey=${roomkey}`, { withCredentials: true }) //
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                setCookie('id', response.data); // 쿠키에 토큰 저장
                navigate('/');
            })
            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);
    return <div>redirecting...</div>;
}

export default RoomJoinPage;
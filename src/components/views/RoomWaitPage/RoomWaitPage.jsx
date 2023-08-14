import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';

export default function RoomWaitPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userinfos = useSelector((state) => state.user);
	
    useEffect(() => {
        const intervalId = setInterval(() => {
            // 실행하고자 하는 작업을 여기에 작성
            var params = new URLSearchParams(location.search);
            var paramValue = params.get('roomId');
            const config = {
                headers: {
                    Authorization: `${userinfos?.accessToken}`,
                },
                withCredentials: true,
            };
			if(paramValue === null){
				paramValue = 0;
			}
            axios
                .get(`${API_URL}room?room_id=${paramValue}`, config) //
                .then((response) => {
                    // 요청이 성공한 경우의 처리
                    if (response.data.code === 1000) {
                        console.log(response.data);
                        // 현재 URL 가져오기
                        const currentUrl = new URL(window.location.href);

                        // URL의 쿼리 파라미터 변경
                        currentUrl.searchParams.set('roomId', '0');

                        // 변경된 URL을 주소 표시줄에 업데이트
                        window.history.pushState(null, null, currentUrl.href);
                    } else if (response.data.code === 5000) {
                        alert(response.data.message);
                    } else if (response.data.code === 5001) {
                        navigate('/', { replace: true });
                    } else if (response.data.code === 5002) {
                        alert(response.data.message);
                    } else if (response.data.code === 5003) {
                        alert(response.data.message);
                        navigate('/roomstart', { replace: true });
                    } else {
                        alert(response.data.message);
						navigate('/login', { replace: true });
                    }
                })
                .catch((error) => {
                    // 요청이 실패한 경우의 처리
                    console.error(error);
                });
        }, 5000); // 10초마다 실행

        return () => {
            // 컴포넌트가 언마운트될 때 clearInterval로 interval 정리
            clearInterval(intervalId);
        };
    }, []);
    return (
        <Container className="wrap loaded">
            <MainText id="maint">ParKING</MainText>
            <SubText>관리자 승인 대기 중입니다...</SubText>
            <LoadingContainer>
                <br />

                <img
                    src="https://blog.kakaocdn.net/dn/DulBu/btsqKEd1OL0/OksSKwtQszeyHwxurzDdY1/img.gif"
                    style={{ width: '150px', height: 'auto' }}
                />
                <br />
                <BottomText>LOADING</BottomText>
            </LoadingContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    flex-direction: column;
    position: relative;
    /*font-family: '';
   */
    @media (min-width: 800px) {
        width: 600px;
        height: 100vh;
    }
`;

const MainText = styled.h1`
    color: #452b75;
    font-size: 50px;
    font-weight: bolder;
    /*font-family: '';
   */
    @media (min-width: 800px) {
        font-size: 60px;
    }
`;
const SubText = styled.h3`
    color: #452b75;
    font-size: 25px;
    font-weight: bolder;
    @media (min-width: 800px) {
        font-size: 15px;
    }
`;
const LoadingContainer = styled.div`
    flex-direction: column;
    position: relative;
    top: 35px;
    justify-content: flex-end;
    align-items: center;
    display: flex;
`;

const BottomText = styled.h1`
    color: #452b75;
    font-size: 20px;
    font-weight: bolder;
    /*font-family: '';
   */
    @media (min-width: 800px) {
        font-size: 40px;
    }
`;
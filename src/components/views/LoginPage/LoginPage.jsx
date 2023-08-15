import React,{useEffect} from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import {REDIRECT_URL} from "../../config"
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // useCookies import
import { useDispatch} from 'react-redux';
import { refreshAccessToken } from '../../../_actions/user_action';

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['refreshToken']); // 쿠키 훅
  const location = useLocation();
  const navigate = useNavigate();
  const onGoogleLogin = () => {
    // 방 입장하기 버튼 클릭 시 실행되는 로직
    window.location.href = `${REDIRECT_URL}oauth2/authorization/google`;
    
      
  };
	
	useEffect(()=>{
		const params = new URLSearchParams(location.search);
  		const accessToken = params.get('accessToken');
		const refreshToken = params.get('refreshToken');
		
		if(accessToken !== null && refreshToken !== null){
			console.log(refreshToken);
			setCookie('refreshToken', refreshToken);
			dispatch(refreshAccessToken(accessToken));
			navigate("/inputname");
		}
		
	},[])

  
  return (
    <div className="wrap loaded">
      <ContainerDiv>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgL6Dj%2FbtsqZap4hv5%2FcAdU4LBGg6nNjz2bLGBcD1%2Fimg.png"
          alt="로고"
          style={{
            height: "30vh",
            width: "30vh",
            marginTop: "10vh",
          }}
        />
        <ContainerTitleDiv>우리들의 주차장</ContainerTitleDiv>
        <ContainersubTitleDiv>
          &nbsp; &nbsp; 내 주차장을 설정하고
          <br />
          ParKing을 시작해보세요.
        </ContainersubTitleDiv>
      </ContainerDiv>
      <ContainerDiv>
		  <Button onClick={onGoogleLogin}>
		  <Img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmmZPk%2Fbtsq7dkMNHN%2Fyn3KjSFhV9lF7gACrmeRrk%2Fimg.png"/>
			  </Button>
      </ContainerDiv>
    </div>
  );
};

export default LoginPage;

const animation = keyframes`
50% {
  transform: scale(0.92);
}
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width : 300px;
  height: auto;
`;

const Button = styled.button`
  all: unset;
`;

const ContainerTitleDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: 1000;
  margin-bottom: 2vh;
`;

const ContainersubTitleDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  margin-bottom: 9vh;
`;



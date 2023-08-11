import React from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./Sections/GoogleLoginButton"


const RoomStart = (props) => {
  
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    // 방 입장하기 버튼 클릭 시 실행되는 로직
   
    navigate("/inputname");
      
  };

  
  return (
    <div ref={props.ref} className="wrap loaded">
      <ContainerDiv>
        <img
          src="logo2.png"
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
		  <GoogleLoginButton/>
      </ContainerDiv>
    </div>
  );
};

export default RoomStart;

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
  margin-bottom: 13vh;
`;



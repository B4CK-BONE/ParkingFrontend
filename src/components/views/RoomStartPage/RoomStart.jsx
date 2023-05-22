import React from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import "./RoomStart.css";
import { useCookies } from "react-cookie"; // useCookies import
import { useNavigate } from "react-router-dom";

const RoomStart = (props) => {
  const [cookies, setCookie] = useCookies(["id"]); // 쿠키 훅
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    // 방 입장하기 버튼 클릭 시 실행되는 로직
    axios
      .get("https://backbone-ufribf.run.goorm.site/main/", {
        withCredentials: true,
      }) // 아 그 순차통역이   그리고 그거  ㅇㅇㅇ 그 합쳐서 하도록 설계하는거였음 음ㅇㅇ
      .then((response) => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
        setCookie("id", response.data); // 쿠키에 토큰 저장
        navigate("/");
      })
      .catch((error) => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
  };

  const handleCreateRoom = () => {
    // 방 생성하기 버튼 클릭 시 실행되는 로직
    axios
      .get("http://www.catsecurity.net/?page_id=182")
      .then((response) => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
      })
      .catch((error) => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
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
        <StartBtn onClick={handleCreateRoom}>주차장 생성</StartBtn>
        <StartBtn onClick={handleJoinRoom}>주차장 참여</StartBtn>
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

const StartBtn = styled.button`
  display: flex;
  justify-content: center;

  width: calc(100% - 32px);
  height: 54px;
  line-height: 54px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background: #5849ff;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 17px;
  font-weight: 400;

  margin: 10px;
  &:active {
    animation: ${animation} 0.2s;
  }
`;

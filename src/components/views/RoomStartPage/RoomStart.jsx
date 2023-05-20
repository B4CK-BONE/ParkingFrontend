import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import './RoomStart.css';
import { useCookies } from 'react-cookie'; // useCookies import
import { useNavigate  } from "react-router-dom";

const RoomStart = () => {

    const [cookies, setCookie] = useCookies(['id']); // 쿠키 훅 
    const navigate = useNavigate();
  const handleJoinRoom = () => {
    // 방 입장하기 버튼 클릭 시 실행되는 로직
    axios.get('https://backbone-ufribf.run.goorm.site/main/',{withCredentials: true}) // 아 그 순차통역이   그리고 그거  ㅇㅇㅇ 그 합쳐서 하도록 설계하는거였음 음ㅇㅇ
      .then(response => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
        setCookie('id', response.data);// 쿠키에 토큰 저장
        navigate("/");
        
      })
      .catch(error => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
  };

  const handleCreateRoom = () => {
    // 방 생성하기 버튼 클릭 시 실행되는 로직
    axios.get('http://www.catsecurity.net/?page_id=182')
      .then(response => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
      })
      .catch(error => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
  };
  return (
    <div class="parent-container">
  <div class="button-container">
    <button class="my-button">방 생성</button>
  </div>
  <div class="button-container">
    <button class="my-button">방 참여</button>
  </div>
</div>
  );
};

export default RoomStart;

const StartBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
  background-color: #0056b3;
}
`;
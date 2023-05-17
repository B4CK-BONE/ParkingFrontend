import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import './RoomStart.css';

const RoomStart = () => {
 //그리고 피드백 저장 구조 바꿀생각해야됨 지금은 stt된거+유저가 설정한 피드백 매번 db에서 불러오는데, 
	//stt된것중에 오류있는것도있어서 그런것들 삭제할수잇게 유저가 설정한 피드백이 없을시 stt된거 불러오고, 이후에는 유저가 설정한 피드백만 불러오기, 그럼 피드백 값중에 이제 유저가 설정한건지 stt된건지 구분하는 인자가 필요할듯, 처음에 저장할시에는 stt결과값 저장해서 유저가 설정한 피드백으로 전환 해야함 이거 이따가 다시 설명좀 그 랩실가면
  const handleJoinRoom = () => {
    // 방 입장하기 버튼 클릭 시 실행되는 로직
    axios.get('http://183.109.27.42:8000/test/') // 아 그 순차통역이   그리고 그거  ㅇㅇㅇ 그 합쳐서 하도록 설계하는거였음 음ㅇㅇ
      .then(response => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
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
    <div>
      <StartBtn onClick={handleJoinRoom}>방 입장하기</StartBtn>
      <StartBtn onClick={handleCreateRoom}>방 생성하기</StartBtn>
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
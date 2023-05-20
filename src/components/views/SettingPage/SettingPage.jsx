import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import SliderSection from "./Sections/SliderSection";
import Axios from "axios";

function SettingPage() {
  const [Src, setSrc] = useState("");

  let qrUrl = [
    {
      QRcodeUrl: "https://www.youtube.com/watch?v=bVGGsVt2t6o",
    },
  ];

  let positions = [
    {
      number: 0,
      text: "06:20",
      userName: "201호",
      userCar: "17다 5864",
      inTime: "18:50",
      outTime: "06:15",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0Tvq5VSi_Njmqxzi4ypD2qmrErUPorLQXA&usqp=CAU",
      use: true,
    },
  ];

  useEffect(() => {
    Axios.get("https://backbone-ufribf.run.goorm.site/", {
      withCredentials: true,
    }) //
      .then((response) => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
      })
      .catch((error) => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
  }, []);

  return (
    <div>
      <UserinfoDiv>
        <UserDiv>
          <UserNameDiv>조현식</UserNameDiv>
          <UserCarDiv>17다 5864</UserCarDiv>
        </UserDiv>

        <UserinfochildDiv>
          <UserinfosDiv>
            <ParkingImg
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrZ3H2%2FbtsgB4fVd8i%2FYt9kFiyMUJQKlEQpVmekK1%2Fimg.png"
              alt="1"
            />
            <UserParkingTimeDiv>
              <ParkingTitleDiv>주차 시간</ParkingTitleDiv>
              <ParkingTimeDiv>06:15~18:50</ParkingTimeDiv>
            </UserParkingTimeDiv>
            <IoIosArrowForward
              size="23"
              style={{ marginTop: "11%", color: "#d3d3d3" }}
            />
          </UserinfosDiv>
          <ParkingSet>
            <a>주차장 바꾸기 |</a> <a> 주차장 변경 |</a> <a> QR 변경하기</a>
          </ParkingSet>
        </UserinfochildDiv>

        <UserBannerchildDiv>
          <SliderSection />
        </UserBannerchildDiv>
        <div
          style={{
            color: "gray",
            margin: "10vw 10vw 1vw 7vw",
            fontSize: "0.8rem",
          }}
        >
          도움말
        </div>
        <hr
          style={{
            color: "#d3d3d3",

            width: "85%",
          }}
        />
        <ListUl>
          <li>목록 아이템 1</li>
          <li>목록 아이템 2</li>
          <li>목록 아이템 3</li>
          <li>목록 아이템 4</li>
          <li>목록 아이템 5</li>
        </ListUl>
      </UserinfoDiv>
    </div>
  );
}

export default SettingPage;

const UserDiv = styled.div`
  margin: 20px 20px;
  display: flex;
`;

const UserNameDiv = styled.div`
  text-align: center;
  font-size: 6vw;
  font-weight: 1000;
`;

const UserParkingTimeDiv = styled.div`
  margin-right: 10%;
`;

const ParkingTitleDiv = styled.div`
  font-size: 3vw;
  margin-top: 20px;
  color: gray;
`;

const ParkingTimeDiv = styled.div`
  text-align: center;
  font-size: 6vw;
  font-weight: bold;
  margin-top: 2%;
`;

const UserCarDiv = styled.div`
  padding: 2vw 2vw;
  font-size: 1vw;
  font-weight: 1000;
  border-radius: 11px;
  display: flex;
  margin-top: 0.8vw;
  margin-left: 2.5vw;
  color: rgb(69, 43, 117);
  background-color: rgb(182, 156, 230);
`;

const ParkingImg = styled.img`
  height: 40px;
  width: 40px;
  margin: 7% 5% 0% 3%;
  padding: 0px 0.75rem;
`;

const ParkingSet = styled.div`
  display: block;
  margin: 10vw 2.5vw 2vw 7vw;
  font-size: 3vw;

  color: gray;
`;

const UserinfosDiv = styled.div`
  flex-direction: row;
  position: relative;
  display: flex;
`;

const UserinfochildDiv = styled.div`
  margin: 10px auto 0px;
  width: 90vw;
  height: 19vh;

  border-radius: 20px;
  background-color: rgb(255, 255, 255);

  @media (min-width: 800px) {
    width: 600px;
  }
`;

const ListUl = styled.ul`
  list-style: none;
  font-weight: bold;
  & > li {
    margin: 8px;
  }
`;

const UserBannerchildDiv = styled.div`
  margin: 10px auto 0px;
  width: 90vw;

  @media (min-width: 800px) {
    width: 600px;
  }
`;

const UserinfoDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 40vh;
  display: flex;

  margin-top: 10px;
  background-color: #f5f6f8;
  flex-direction: column;
  position: relative;
  @media (min-width: 800px) {
    width: 600px;
    height: 94vh;
  }
`;

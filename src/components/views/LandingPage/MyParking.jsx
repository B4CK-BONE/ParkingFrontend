import React, { useState, useEffect } from "react";

import Axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Bottom from "./Sections/Bottom";

const MyParking = () => {
  let outimg = [
    { bottom: "450px", right: "40%", height: "3rem", width: "5rem" },
  ];

  let positions = [
    {
      number: 0,
      bottom: "400px",
      right: "70%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 1,
      bottom: "350px",
      right: "70%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 2,
      bottom: "300px",
      right: "70%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 3,
      bottom: "400px",
      right: "15%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 4,
      bottom: "350px",
      right: "15%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 5,
      bottom: "300px",
      right: "15%",
      height: "2.5rem",
      width: "5rem",
      backgroundColor: "#9b111e",
      text: "06:20",
      userCar: "17다 5864",
      inTime: "18:50",
      outTime: "06:20",
      use: true,
    },
    {
      number: 6,
      bottom: "220px",
      right: "40%",
      height: "5rem",
      width: "3rem",
      backgroundColor: "#9b111e",
      text: "06:50",
      userCar: "17다 5864",
      inTime: "18:50",
      outTime: "06:50",
      use: true,
    },
    {
      number: 7,
      bottom: "310px",
      right: "55%",
      height: "5rem",
      width: "3rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 8,
      bottom: "310px",
      right: "40%",
      height: "5rem",
      width: "3rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
    {
      number: 9,
      bottom: "220px",
      right: "55%",
      height: "5rem",
      width: "3rem",
      backgroundColor: "#237af2",
      text: "주차가능",
      userCar: "",
      inTime: "",
      outTime: "",
      use: false,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [User, setUser] = useState([]);
  useEffect(() => {}, []);

  const onClickButton = (event) => {
    const button_number = event.target.getAttribute("data");

    setIsModalOpen(true);
    if (positions[button_number]) {
      setUser(positions[button_number]);
    } else {
      setUser("");
    }
  };
  return (
    <div>
      <Container>
        <Parkingcontainer>
          <Parkingmaintextcontainer>주차장 현황</Parkingmaintextcontainer>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL7lEw%2Fbtsd01rpkbO%2FUwIxKrC1LVq6rVqZXxAPE0%2Fimg.png"
            style={{
              position: "absolute",

              bottom: `${outimg[0].bottom}`,
              right: `${outimg[0].right}`,
              height: `${outimg[0].height}`,
              width: `${outimg[0].width}`,

              border: "0px",
              padding: "0px 0.75rem",
            }}
            alt="1"
          />

          {positions.map((point, index) => (
            <React.Fragment key={index}>
              <button
                onClick={onClickButton}
                data={point.number}
                style={{
                  position: "absolute",

                  bottom: `${point.bottom}`,
                  right: `${point.right}`,
                  height: `${point.height}`,
                  width: `${point.width}`,

                  border: "0px",

                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "0.5rem",
                  backgroundColor: `${point.backgroundColor}`,
                  color: "#ffffff",
                }}
              >
                {point.text}
              </button>
            </React.Fragment>
          ))}
        </Parkingcontainer>
      </Container>
      {isModalOpen && (
        <Bottom
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          User={User}
        />
      )}
    </div>
  );
};

export default MyParking;

const Parkingmaintextcontainer = styled.div`
  text-align: left;
  margin: 20px;
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Parkingcontainer = styled.div`
  margin: 10px;
  width: 90vw;
  height: 80vh;
  border-radius: 30px;

  align-items: center;
  margin-top: 10px;
  background-color: #ffffff;
  flex-direction: column;
  position: relative;
  @media (min-width: 800px) {
    width: 600px;
    height: 84vh;
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: #f5f6f8;
  flex-direction: column;
  position: relative;
  @media (min-width: 800px) {
    width: 600px;
    height: 94vh;
    /* border:1px solid #95afc0; */
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;

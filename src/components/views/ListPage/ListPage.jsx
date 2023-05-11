import React from "react";
import styled from "styled-components";

function ListPage() {
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
    {
      number: 1,
      text: "06:20",
      userName: "201호",
      userCar: "18다 1564",
      inTime: "18:50",
      outTime: "06:20",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0Tvq5VSi_Njmqxzi4ypD2qmrErUPorLQXA&usqp=CAU",
      use: true,
    },
    {
      number: 2,
      text: "06:20",
      userName: "402호",
      userCar: "37다 7869",
      inTime: "18:50",
      outTime: "07:20",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0Tvq5VSi_Njmqxzi4ypD2qmrErUPorLQXA&usqp=CAU",
      use: true,
    },
    {
      number: 3,
      text: "06:20",
      userName: "301호",
      userCar: "27다 3664",
      inTime: "18:50",
      outTime: "08:20",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0Tvq5VSi_Njmqxzi4ypD2qmrErUPorLQXA&usqp=CAU",
      use: true,
    },
  ];
  return (
    <div>
      {positions.map((list, index) => (
        <Ulclass>
          <Liclass>
            <Divclass>
              <Divchildclass>
                <Imgclass src={list.userImg} alt="Neil image" />
              </Divchildclass>
              <Divchild2class>
                <Pclass>{list.userName}</Pclass>
                <Pclass2>{list.userCar}</Pclass2>
              </Divchild2class>
              <Divchild3class>
                {list.inTime} ~ {list.outTime}
              </Divchild3class>
            </Divclass>
          </Liclass>
        </Ulclass>
      ))}
    </div>
  );
}

export default ListPage;

const Ulclass = styled.ul`
  padding-left: 0px;
  margin: auto;
  list-style: none;
  max-width: 28rem; /* max-w-md in Tailwind CSS */
  border-color: #e5e7eb; /* divide-gray-200 in Tailwind CSS */
  &.divide-y > li:not(:last-child) {
    border-bottom-width: 1px;
    border-bottom-color: #e5e7eb; /* divide-gray-200 in Tailwind CSS */
  }
`;

const Liclass = styled.li`
  /* 스크린 크기가 작을 때 */
`;

const Divclass = styled.div`
  border-bottom: 1px solid #d3d3d3;
  display: flex; /* flex in Tailwind CSS */
  align-items: center; /* items-center in Tailwind CSS */
  justify-content: space-between; /* space-x-4 in Tailwind CSS */

  & > div {
    flex: auto; /* flex-1 in Tailwind CSS */
    min-width: 0; /* min-w-0 in Tailwind CSS */
  }

  & > div:last-child {
    display: inline-flex; /* inline-flex in Tailwind CSS */
    align-items: center; /* items-center in Tailwind CSS */
    font-size: 1rem; /* text-base in Tailwind CSS */
    font-weight: 600; /* font-semibold in Tailwind CSS */
    color: #1f2937; /* text-gray-900 in Tailwind CSS */
  }
`;

const Divchildclass = styled.div`
  flex-shrink: 0;
  text-align: center;
`;

const Imgclass = styled.img`
  width: 2rem; /* w-8 in Tailwind CSS */
  height: 2rem; /* h-8 in Tailwind CSS */
  border-radius: 50%; /* rounded-full in Tailwind CSS */
`;

const Divchild2class = styled.div`
  flex: auto; /* flex-1 in Tailwind CSS */
  min-width: 0; /* min-w-0 in Tailwind CSS */
`;

const Pclass = styled.p`
  font-size: 0.875rem; /* text-sm in Tailwind CSS */
  font-weight: 500; /* font-medium in Tailwind CSS */
  color: #1f2937; /* text-gray-900 in Tailwind CSS */
  overflow: hidden; /* truncate in Tailwind CSS */
  text-overflow: ellipsis; /* truncate in Tailwind CSS */
  white-space: nowrap; /* truncate in Tailwind CSS */
  margin: 10px;
`;

const Pclass2 = styled.p`
  font-size: 0.875rem; /* text-sm in Tailwind CSS */
  color: #6b7280; /* text-gray-500 in Tailwind CSS */
  overflow: hidden; /* truncate in Tailwind CSS */
  text-overflow: ellipsis; /* truncate in Tailwind CSS */
  white-space: nowrap; /* truncate in Tailwind CSS */
  margin: 10px;
`;

const Divchild3class = styled.div`
  display: inline-flex; /* inline-flex in Tailwind CSS */
  align-items: center; /* items-center in Tailwind CSS */
  font-size: 1.125rem; /* text-base in Tailwind CSS */
  font-weight: 600; /* font-semibold in Tailwind CSS */
  color: #1f2937; /* text-gray-900 in Tailwind CSS */
`;

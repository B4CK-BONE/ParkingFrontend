import React from "react";
import styled from "styled-components";

function ListPage() {
  return (
    <Ulclass>
      <Liclass>
        <Divclass>
          <Divchildclass>
            <Imgclass
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCAVka%2FbtrY2o9XY6e%2Fld0UENc2vedDW60ngkDyI1%2Fimg.jpg"
              alt="Neil image"
            />
          </Divchildclass>
          <Divchild2class>
            <Pclass>Neil Sims</Pclass>
            <Pclass2>email@flowbite.com</Pclass2>
          </Divchild2class>
          <Divchild3class>10:24</Divchild3class>
        </Divclass>
      </Liclass>
    </Ulclass>
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
  margin : 10px;
`;

const Pclass2 = styled.p`
  font-size: 0.875rem; /* text-sm in Tailwind CSS */
  color: #6b7280; /* text-gray-500 in Tailwind CSS */
  overflow: hidden; /* truncate in Tailwind CSS */
  text-overflow: ellipsis; /* truncate in Tailwind CSS */
  white-space: nowrap; /* truncate in Tailwind CSS */
  margin : 10px;
`;

const Divchild3class = styled.div`
  display: inline-flex; /* inline-flex in Tailwind CSS */
  align-items: center; /* items-center in Tailwind CSS */
  font-size: 1.125rem; /* text-base in Tailwind CSS */
  font-weight: 600; /* font-semibold in Tailwind CSS */
  color: #1f2937; /* text-gray-900 in Tailwind CSS */
`;

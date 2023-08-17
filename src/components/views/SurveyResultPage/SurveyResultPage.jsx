import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import SurveyResultSheet from './Sections/SurveyResultSheet';

function SurveyResultPage(props) {
    const [SurveyList, setSurveyList] = useState([]);
    const userinfos = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [Survey, setSurvey] = useState(false);
    const [User, setUser] = useState([]);

    const onSurveyBtn = (event) => {
        const button_number = event.target.getAttribute('data');
        if (SurveyList[button_number]) {
            setUser(SurveyList[button_number]);
        } else {
            setUser([]);
        }
        setSurvey(true);
    };

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.post(`${API_URL}user/survey/${userinfos?.userData?.result.roomIdx}`, null, config)
            .then((response) => {
                if (response.data.isSuccess) {
                    console.log(response.data.result);
                    setSurveyList(response.data.result);
                }
            })
            .catch((error) => {
                navigate('/login');
            });
    }, []);
    return (
        <div className="wrap loaded">
            {SurveyList.map((list, index) => (
                <React.Fragment key={index}>
                    <Ulclass>
                        <Liclass>
                            <Divclass>
                                <Divchildclass>
                                    <Imgclass
                                        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsTaJl%2FbtsrrSgwmfB%2FSXe0UCIJ8qg6lEIDKqdGL0%2Fimg.png"
                                        alt="Neil image"
                                    />
                                </Divchildclass>
                                <Divchild2class>
                                    <Pclass>익명</Pclass>
                                </Divchild2class>
                                <Divchild3class>
                                    {list.date.split('-')[0]}년 {list.date.split('-')[1]}월{' '}
                                    {list.date.split('-')[2]}일 설문
                                </Divchild3class>
                                <Divchild3class>
                                    <Button onClick={onSurveyBtn} data={list.rownum}>
                                        확인
                                    </Button>
                                </Divchild3class>
                            </Divclass>
                        </Liclass>
                    </Ulclass>
                </React.Fragment>
            ))}

            {SurveyList.length === 0 && (
                <React.Fragment>
                    <NotSurveyDiv>설문이 존재하지 않습니다.</NotSurveyDiv>
                </React.Fragment>
            )}

            <SurveyResultSheet open={Survey} setSurvey={setSurvey} Survey={Survey} User={User} />
        </div>
    );
}

export default SurveyResultPage;

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
const NotSurveyDiv = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    color: rgb(31, 41, 55);
    text-align: center;
	margin-top:30vh%
`;

const Liclass = styled.li``;

const Button = styled.button`
    font-size: 14px;
    border: none;
    color: #3b82f6;
    cursor: pointer;
    background-color: transparent;
`;

const Divclass = styled.div`
    border-bottom: 1px solid #d3d3d3;
    display: flex; /* flex in Tailwind CSS */
    align-items: center; /* items-center in Tailwind CSS */
    justify-content: space-between; /* space-x-4 in Tailwind CSS */
	height: 7vh;
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

const Divchild4class = styled.div`
    display: inline-flex; /* inline-flex in Tailwind CSS */
    align-items: center; /* items-center in Tailwind CSS */
    font-size: 1.125rem; /* text-base in Tailwind CSS */

    color: #617df8;
`;
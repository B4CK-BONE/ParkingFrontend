import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import SliderSection from './Sections/SliderSection';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';

function SettingPage(props) {
    const [Src, setSrc] = useState('');
    const [Userinfo, setUserinfo] = useState([]);
	const userinfos = useSelector((state) => state.user);

    useEffect(() => {
        const config = {
                headers: {
                    Authorization: `${userinfos?.accessToken}`,
                },
                withCredentials: true,
            };
        Axios.get(`${API_URL}user/${userinfos?.userData?.result?.idx}`,config) //
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                setUserinfo(response.data.result);
            })
            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);

    return (
        <div className="wrap loaded">
            <UserinfoDiv>
                <UserDiv>
                    <UserNameDiv>{Userinfo?.address}호</UserNameDiv>
                    <UserCarDiv>{Userinfo?.car}</UserCarDiv>
                </UserDiv>

                <UserinfochildDiv>
                    <UserinfosDiv>
                        <ParkingImg
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrZ3H2%2FbtsgB4fVd8i%2FYt9kFiyMUJQKlEQpVmekK1%2Fimg.png"
                            alt="1"
                        />
                        <UserParkingTimeDiv>
                            <ParkingTitleDiv>출차 시간</ParkingTitleDiv>
                            <ParkingTimeDiv>{Userinfo?.endTime !== null ? Userinfo?.endTime : "시간 정보 없음"}</ParkingTimeDiv>
                        </UserParkingTimeDiv>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <IoIosArrowForward
                                size="23"
                                style={{ marginTop: '11%', color: '#d3d3d3', marginTop: "50px" }}
                            />
                        </Link>
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
                        color: 'gray',
                        margin: '10vw 10vw 1vw 7vw',
                        fontSize: '0.8rem',
                    }}
                >
                    도움말
                </div>
                <hr
                    style={{
                        color: '#d3d3d3',

                        width: '85%',
                    }}
                />
                <ListUl>
                    <li>
                        공지사항{' '}
                        <IoIosArrowForward
                            size="23"
                            style={{ marginRight: '11%', color: 'gray', float: 'right' }}
                        />
                    </li>
                    <li>
                        고객지원{' '}
                        <IoIosArrowForward
                            size="23"
                            style={{ marginRight: '11%', color: 'gray', float: 'right' }}
                        />
                    </li>
                    <li>
                        이벤트{' '}
                        <IoIosArrowForward
                            size="23"
                            style={{ marginRight: '11%', color: 'gray', float: 'right' }}
                        />
                    </li>
                    <li>
                        <Link to="/management" style={{ color: 'inherit', textDecoration: 'none' }}>
                            유저 관리 페이지{' '}
                            <IoIosArrowForward
                                size="23"
                                style={{ marginRight: '11%', color: 'gray', float: 'right' }}
                            />
                        </Link>
                    </li>
					<li>
                        <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
                            회원 정보 수정{' '}
                            <IoIosArrowForward
                                size="23"
                                style={{ marginRight: '11%', color: 'gray', float: 'right' }}
                            />
                        </Link>
                    </li>
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
    @media (min-width: 800px) {
        font-size: 35px;
    }
`;

const UserParkingTimeDiv = styled.div`
    margin-right: 10%;
`;

const ParkingTitleDiv = styled.div`
    font-size: 13px;
    margin-top: 20px;
    color: gray;
    @media (min-width: 800px) {
        font-size: 15px;
    }
`;

const ParkingTimeDiv = styled.div`
    text-align: center;
    font-size: 5vw;
    font-weight: bold;
    margin-top: 2%;
    @media (min-width: 800px) {
        font-size: 35px;
    }
`;

const UserCarDiv = styled.div`
    padding: 8px;
    font-size: 1vw;
    font-weight: 1000;
    border-radius: 11px;
    display: flex;
    margin-top: auto;
    margin-left: 2.5vw;
    margin-bottom: auto;
    color: rgb(69, 43, 117);
    background-color: rgb(182, 156, 230);
    @media (min-width: 550px) {
        padding: 13px;
        font-size: 10px;
    }
`;

const ParkingImg = styled.img`
    height: 40px;
    width: 40px;
    margin: 7% 5% 0% 3%;
    padding: 0px 0.75rem;
`;

const ParkingSet = styled.div`
    display: block;
    margin: 25px 20px 30px 32px;
    font-size: 13px;
    color: gray;
    @media (min-width: 550px) {
        margin: 20px 5px 30px 50px;
        font-size: 11px;
    }
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
    margin-right: 1vw;
    & > li {
        margin: 13px 8px 8px 8px;
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
    width: 90vw;
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
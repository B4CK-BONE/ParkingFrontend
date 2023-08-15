import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BottomSheetSection from './Sections/BottomSheetSection';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyParking = (props) => {
    const [ParkingList, setParkingList] = useState([]);
    const userinfos = useSelector((state) => state.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [User, setUser] = useState([]);
    const [Parking, setParking] = useState(false);
    const [Verify, setVerify] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}parking`, config)
            .then((response) => {
                setVerify(false);
                setParkingList(response.data.result);
                for (var i = 0; i < response.data.result.length; i++) {
                    if (response.data.result[i].userIdx === userinfos.userData?.result?.idx) {
                        setVerify(true);
                    }
                }
            })

            .catch((error) => {
                navigate('/login');
            });
        const intervalId = setInterval(() => {
            let config2 = {
                headers: {
                    Authorization: `${userinfos?.accessToken}`,
                },
                withCredentials: true,
            };
            Axios.get(`${API_URL}parking`, config2)
                .then((response) => {
                    setVerify(false);
                    setParkingList(response.data.result);
                    for (var i = 0; i < response.data.result.length; i++) {
                        if (response.data.result[i].userIdx === userinfos.userData?.result?.idx) {
                            setVerify(true);
                        }
                    }
                })

                .catch((error) => {
                    navigate('/login');
                });
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}parking`, config)
            .then((response) => {
                setVerify(false);
                setParkingList(response.data.result);
                for (var i = 0; i < response.data.result.length; i++) {
                    if (response.data.result[i].userIdx === userinfos.userData?.result?.idx) {
                        setVerify(true);
                    }
                }
            })

            .catch((error) => {
                navigate('/login');
            });
    }, [Parking]);

    const onClickButton = (event) => {
        const button_number = event.target.getAttribute('data');

        setOpen(true);
        setIsModalOpen(true);
        if (ParkingList[button_number - 1] && button_number > -1) {
            setUser(ParkingList[button_number - 1]);
        } else {
            setUser('');
        }
    };
    return (
        <div className="wrap loaded">
            <Container>
                <Parkingcontainer>
                    <Parkingmaintextcontainer>주차장 현황</Parkingmaintextcontainer>
                    <Parkingimgcontainer>
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FP0hyc%2Fbtsrh3vFd25%2FQe7O6z3MTnFmyq9SKuPYB1%2Fimg.png"
                            style={{
                                border: '0px',
                                padding: '0px 0.75rem',
                                width: '70px',
                                height: '50px',
                            }}
                            alt="1"
                        />
                    </Parkingimgcontainer>

                    {ParkingList?.map((point, index) => (
                        <React.Fragment key={index}>
                            <ParkingBtn
                                onClick={onClickButton}
                                data={point.slot}
                                style={{
                                    backgroundColor: point?.use ? '#9b111e' : '#237af2',
                                    bottom: `${point?.bottom}`,
                                    right: `${point?.right}`,
                                    height: `${point?.height}`,
                                    width: `${point?.width}`,
                                }}
                            >
                                {point?.endTime ? point?.endTime : '주차 가능'}
                            </ParkingBtn>
                        </React.Fragment>
                    ))}
                </Parkingcontainer>
                <BottomSheetSection
                    open={open}
                    setOpen={setOpen}
                    User={User}
                    ParkingList={ParkingList}
                    setParking={setParking}
                    Parking={Parking}
                    Verify={Verify}
                    setVerify={setVerify}
                />
            </Container>
        </div>
    );
};

export default MyParking;

const Parkingmaintextcontainer = styled.div`
    text-align: center;
    margin: 25px;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
`;

const Parkingimgcontainer = styled.div`
    text-align: center;
    margin-top: 20px;
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
    box-shadow: rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px,
        rgba(0, 0, 0, 0.2) 0px 3px 5px -1px;
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

const ParkingBtn = styled.button`
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12),
        0px 3px 5px -1px rgba(0, 0, 0, 0.2);
    border: 0px;
    outline: none;
    cursor: pointer;
    border-radius: 0.5rem;
    position: absolute;
    color: #ffffff;
    max-width: 120px;
    max-height: 150px;
`;
import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BottomSheetSection from './Sections/BottomSheetSection';
import { useSelector } from 'react-redux';

const MyParking = (props) => {
    
    const [ParkingList, setParkingList] = useState([]);
    const userinfos = useSelector((state) => state.user);
	let position2 = [
		 
        {
        	bottom: '56vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: "08-10",
            endTime: "21:52",
            car: "12가1234",
            slot: 1,
            use: true
        },
        {
            bottom: '50vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 2,
            use: false
        },
        {
            bottom: '44vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 3,
            use: false
        },
		{
            bottom: '56vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 4,
            use: false
        },
		{
            bottom: '50vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 5,
            use: false
        },
		{
            bottom: '44vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 6,
            use: false
        },
		{
           bottom: '40vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 7,
            use: false
        },
		{
             bottom: '51vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 8,
            use: false
        },
		{
            bottom: '51vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 9,
            use: false
        },
		{
             bottom: '40vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 10,
            use: false
        },
		{
             bottom: '28vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 11,
            use: false
        },
		{
             bottom: '28vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: "a",
            endDate: null,
            endTime: null,
            car: null,
            slot: 12,
            use: false
        },
		
    
	]

   

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [User, setUser] = useState([]);
	const [Parking, setParking] = useState(false);
    useEffect(() => {
        
		let body = {
			userIdx: 1
		};
		const config = {
            headers: {
                // Authorization: `Bearer ${userinfos?.isSuccess?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}parking`, body, config)
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                setParkingList(response.data);
            })

            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, [Parking]);

    const onClickButton = (event) => {
        const button_number = event.target.getAttribute('data');

        setOpen(true);
        setIsModalOpen(true);
        if (position2[button_number - 1] && button_number > -1) {
            setUser(position2[button_number - 1]);
        } else {
            setUser('');
        }
    };
    return (
        <div ref={props.ref} className="wrap loaded">
            <Container>
                <Parkingcontainer>
                    <Parkingmaintextcontainer>주차장 현황</Parkingmaintextcontainer>
                    <Parkingimgcontainer>
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL7lEw%2Fbtsd01rpkbO%2FUwIxKrC1LVq6rVqZXxAPE0%2Fimg.png"
                            style={{
                                border: '0px',
                                padding: '0px 0.75rem',
								width: '70px',
								height : '50px'
                            }}
                            alt="1"
                        />
                    </Parkingimgcontainer>

                    {position2.map((point, index) => (
                        <React.Fragment key={index}>
                            <ParkingBtn
                                onClick={onClickButton}
                                data={point.slot}
                                style={{
                                    backgroundColor: point.use ? '#9b111e' : '#237af2',
                                    bottom: `${point.bottom}`,
                                    right: `${point.right}`,
                                    height: `${point.height}`,
                                    width: `${point.width}`,
                                }}
                            >
                                {point.endTime ? point.endTime : "주차 가능" }
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
                />
            </Container>
        </div>
    );
};

export default MyParking;

const Parkingmaintextcontainer = styled.div`
    text-align: left;
    margin: 20px;
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
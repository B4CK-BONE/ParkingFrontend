import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BottomSheetSection from './Sections/BottomSheetSection';

const MyParking = (props) => {
    
    const [ParkingList, setParkingList] = useState([]);
    

    let positions = [
        {
            number: 0,
            bottom: '56vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 1,
            bottom: '50vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 2,
            bottom: '44vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 3,
            bottom: '56vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 4,
            bottom: '50vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 5,
            bottom: '44vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            backgroundColor: '#9b111e',
            text: '06:20',
            userCar: '17다 5864',
            inTime: '18:50',
            outTime: '06:20',
            use: true,
        },
        {
            number: 6,
            bottom: '40vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#9b111e',
            text: '06:50',
            userCar: '17다 5864',
            inTime: '18:50',
            outTime: '06:50',
            use: true,
        },
        {
            number: 7,
            bottom: '51vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 8,
            bottom: '51vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
        {
            number: 9,
            bottom: '40vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
		{
            number: 10,
            bottom: '28vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
		{
            number: 11,
            bottom: '28vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            backgroundColor: '#237af2',
            text: '주차가능',
            userCar: '',
            inTime: '',
            outTime: '',
            use: false,
        },
		
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [User, setUser] = useState([]);
    useEffect(() => {
        
        // const jsonString = JSON.stringify(positions);
        // const params = { id: token, positions: jsonString };
        // const body = JSON.stringify(params);

        Axios.get(`https://backbone-ufribf.run.goorm.site/room?id=${1}`, {
            withCredentials: true,
        })
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                setParkingList(response.data);
            })

            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);

    const onClickButton = (event) => {
        const button_number = event.target.getAttribute('data');

        setOpen(true);
        setIsModalOpen(true);
        if (positions[button_number]) {
            setUser(positions[button_number]);
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

                    {positions.map((point, index) => (
                        <React.Fragment key={index}>
                            <ParkingBtn
                                onClick={onClickButton}
                                data={point.number}
                                style={{
                                    backgroundColor: `${point.backgroundColor}`,
                                    bottom: `${point.bottom}`,
                                    right: `${point.right}`,
                                    height: `${point.height}`,
                                    width: `${point.width}`,
                                }}
                            >
                                {point.text}
                            </ParkingBtn>
                        </React.Fragment>
                    ))}
                </Parkingcontainer>
                <BottomSheetSection
                    open={open}
                    setOpen={setOpen}
                    User={User}
                    ParkingList={ParkingList}
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
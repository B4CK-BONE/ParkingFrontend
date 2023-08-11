import React, { useState, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { GoReport } from 'react-icons/go';
import { RiKakaoTalkFill } from 'react-icons/ri';

function BottomSheetSection(props) {
    const [isDisabled, setDisabled] = useState(true);
    const [wishListName, setWishListName] = useState('');
    const [ParkingTime, setParkingTime] = useState('');
    const userinfos = useSelector((state) => state.user);
    const navigate = useNavigate();

    const onClose = () => {
        props.setOpen(false);
    };

    const onParkingTimeChange = (e) => {
        setParkingTime(e.target.value);
        setDisabled(e.target.value.length === 0 ? true : false);
    };

    const createNewWishList = () => {
        let body = {
            userIdx: 1,
            time: ParkingTime,
            slot: props.User.slot,
        };

        const config = {
            headers: {
                // Authorization: `Bearer ${userinfos?.isSuccess?.accessToken}`,
            },
            withCredentials: true,
        };

        Axios.post(`${API_URL}parking/time`, body, config)
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                props.setParking(!props.Parking);
                props.setOpen(false);
            })

            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    };
    return (
        <div ref={props.ref} className="wrap loaded">
            {props.User?.use === true ? (
                <BottomSheet
                    open={props.open}
                    onDismiss={onClose}
                    header={
                        <StyledBottomSheetHeader>
                            <div className="sheetHeader">{props.User.car}</div>{' '}
							<RiKakaoTalkFill size="33" onClick={onClose} style={{background: "yellow", borderRadius: "15px"}}/>
                            <GoReport size="23" onClick={onClose} />
                            <GrClose size="23" onClick={onClose} />
                        </StyledBottomSheetHeader>
                    }
                    snapPoints={({ maxHeight }) => 0.45 * maxHeight}
                >
                    <div
                        style={{
                            height: '50vh',
                        }}
                    >
                        <StyledNewWishList>
                            <StyledButtonWrapper>
                                <ParkingInDiv>
                                    <ParkingInChildDiv>
                                        출차 예정 : {props.User.endDate}
                                        {props.User.endTime}
                                    </ParkingInChildDiv>
                                </ParkingInDiv>
                            </StyledButtonWrapper>
                        </StyledNewWishList>
                    </div>
                </BottomSheet>
            ) : (
                <BottomSheet
                    open={props.open}
                    onDismiss={onClose}
                    header={
                        <StyledBottomSheetHeader>
                            <div className="sheetHeader">주차가능</div>{' '}
                            <GrClose size="23" onClick={onClose} />
                        </StyledBottomSheetHeader>
                    }
                    snapPoints={({ maxHeight }) => 0.45 * maxHeight}
                >
                    <div
                        style={{
                            height: '50vh',
                        }}
                    >
                        {props.User?.car ? (
                            <StyledNewWishList>
                                <input
                                    type="datetime-local"
                                    name="inTime"
                                    value={ParkingTime}
                                    onChange={onParkingTimeChange}
                                />
                                <div style={{ display: 'flex' }}>
                                    <button disabled={isDisabled} onClick={createNewWishList}>
                                        예약 시간 바꾸기
                                    </button>
                                    <button disabled={isDisabled} onClick={createNewWishList}>
                                        취소하기
                                    </button>
                                </div>
                            </StyledNewWishList>
                        ) : (
                            <StyledNewWishList>
                                <input
                                    type="datetime-local"
                                    name="inTime"
                                    value={ParkingTime}
                                    onChange={onParkingTimeChange}
                                />
                                <button disabled={isDisabled} onClick={createNewWishList}>
                                    새로 만들기
                                </button>
                            </StyledNewWishList>
                        )}
                    </div>
                </BottomSheet>
            )}
        </div>
    );
}

export default BottomSheetSection;

const ParkingInDiv = styled.div`
    border-bottom: 3px solid #00aaff;
    border-top: 3px solid #00aaff;
    color: black;
    text-align: center;
    margin-left: 10px;
`;

const ParkingInChildDiv = styled.div`
    margin: 10px;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    justify-content: center;
    & > button {
        width: 5.8rem;
        height: 5.8rem;
        border: 0.1rem solid gray;
        border-radius: 0.8rem;
        background-color: white;
    }

    & > button > img {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

const StyledBottomSheetHeader = styled.div`
    height: 1.4rem;
    padding: 1.1rem 2.2rem 0.9rem 2.2rem;
    display: flex;
    align-items: center;
    text-align: initial;
    position: sticky;
    top: 0;
    background: white;

    & > img {
        cursor: pointer;
    }

    & > div {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.7rem;
        width: 100%;
    }
`;

const StyledNewWishList = styled.div`
    padding: 3.3rem 2.2rem 3.6rem 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > input {
        width: 85%;
        padding: 0.5rem 1rem;
        border: 0.1rem solid gray;
        border-radius: 0.8rem;
        margin-bottom: 1.8rem;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.7rem;
    }

    & > input:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem black;
    }

    & > div {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: gray;
        margin-bottom: 6.8rem;
    }

    & > button {
        width: 98%;
        font-weight: 600;
        font-size: 1rem;
        line-height: 2.3rem;
        margin-bottom: 30px;
        border-radius: 0.6rem;
        color: white;
        background-color: #452b75;
    }

    & > button:disabled {
        background-color: gray;
    }
`;
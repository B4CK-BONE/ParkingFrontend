import React, { useState, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { GrClose } from 'react-icons/gr';
import styled, { keyframes } from 'styled-components';
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
    const onKakaoChange = () => {
        window.open(`https://open.kakao.com/o/${props.User?.kakao}`, '_blank');
    };
	
	const onReportSubmit = () => {
		
		let body={
			suspect: props.User?.userIdx,
		};
		const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };

        Axios.post(`${API_URL}parking/report`, body, config)
            .then((response) => {
                
                if (response.data.isSuccess) {
					alert("신고했습니다");
                    props.setParking(!props.Parking);
                    props.setOpen(false);
                } else {
					if (response.data.message === '사이트 관리자에게 문의하세요.') {
                        alert(response.data.code + ' : ' + response.data.message);
                    }else{
						alert(response.data.message);
					}
                    
                    props.setOpen(false);
                }
            })

            .catch((error) => {
                
                navigate('/login');
            });
	};

    const onDeleteBtn = () => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };

        Axios.delete(`${API_URL}parking/time`, config)
            .then((response) => {
                
                if (response.data.isSuccess) {
                    props.setParking(!props.Parking);
                    props.setOpen(false);
                } else {
					if (response.data.message === '사이트 관리자에게 문의하세요.') {
                        alert(response.data.code + ' : ' + response.data.message);
                    }else{
						alert(response.data.message);
					}
                    
                    props.setOpen(false);
                }
            })

            .catch((error) => {
                
                navigate('/login');
            });
    };

    const createNewWishList = () => {
        const parsedDate = new Date(ParkingTime);
        if (isNaN(parsedDate)) {
            alert("시간을 설정해주세요.");
        }
        const isoString = parsedDate.toISOString();
        let body = {
            time: isoString,
            slot: props.User.slot,
        };

        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };

        Axios.post(`${API_URL}parking/time`, body, config)
            .then((response) => {
                
                if (response.data.isSuccess) {
                    props.setParking(!props.Parking);
                    props.setOpen(false);
                } else {
                    alert(response.data.message);
                    props.setOpen(false);
                }
            })

            .catch((error) => {
                
                navigate('/login');
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
                            <BottomSheetCarNum>{props.User.car}</BottomSheetCarNum>{' '}
							<BottomButtonList>
                            {props.User?.userIdx !== userinfos.userData?.result?.idx &&
                                props.User?.kakao && (
                                    <BottomKakao>
                                        <RiKakaoTalkFill
                                            size="25"
                                            onClick={onKakaoChange}
                                        />
                                    </BottomKakao>
                                )}
                            {props.User?.userIdx !== userinfos.userData?.result?.idx && (
                                <BottomGoReport>
                                    <GoReport size="25" onClick={onReportSubmit} />
                                </BottomGoReport>
                            )}
							<BottomGrClose>
								<GrClose size="25" onClick={onClose} />
							</BottomGrClose>
							</BottomButtonList>
                            
                        </StyledBottomSheetHeader>
                    }
                    snapPoints={({ maxHeight }) => 0.45 * maxHeight}
                >
                    <div
                        style={{
                            height: '50vh',
                        }}
                    >
                        {props.User?.userIdx === userinfos.userData?.result?.idx ? (
                            <StyledNewWishList>
                                <input
                                    type="datetime-local"
                                    name="inTime"
                                    value={ParkingTime}
                                    onChange={onParkingTimeChange}
                                />
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <StartBtn onClick={createNewWishList}>
                                        예약 시간 바꾸기
                                    </StartBtn>
                                    <StartBtn onClick={onDeleteBtn}>예약 삭제하기</StartBtn>
                                </div>
                            </StyledNewWishList>
                        ) : (
                            <StyledNewWishList>
                                <StyledButtonWrapper>
                                    <ParkingInDiv>
                                        <ParkingInChildDiv>
                                            출차 예정 : {props.User.endDate}
                                            <div style={{ marginLeft: '10px' }}>
                                                {props.User.endTime}
                                            </div>
                                        </ParkingInChildDiv>
                                    </ParkingInDiv>
                                </StyledButtonWrapper>
                            </StyledNewWishList>
                        )}
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
                        {props.Verify ? (
                            <StyledNewWishList>이미 시간을 설정했습니다.</StyledNewWishList>
                        ) : (
                            <StyledNewWishList>
                                <input
                                    type="datetime-local"
                                    name="inTime"
                                    value={ParkingTime}
                                    onChange={onParkingTimeChange}
                                />
                                <StartBtn disabled={isDisabled} onClick={createNewWishList}>
                                    새로 만들기
                                </StartBtn>
                            </StyledNewWishList>
                        )}
                    </div>
                </BottomSheet>
            )}
        </div>
    );
}

export default BottomSheetSection;

const animation = keyframes`
50% {
  transform: scale(0.92);
}
`;
const ParkingInDiv = styled.div`
    text-align: center;
`;

const ParkingInChildDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-top:10px;
	margin-bottom:10px;
	font-size: 1.6rem;
	font-weight: bold;
	color: black;
`;

const BottomSheetCarNum = styled.div``;

const StyledButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    justify-content: center;
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
        width: 80%;
        padding: 0.5rem 1rem;
        border: 0.1rem solid gray;
        border-radius: 0.5rem;
        margin-bottom: 1.8rem;
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1.7rem;
        max-width: 660px;
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

    & > button:disabled {
        background-color: gray;
    }
`;

const StartBtn = styled.button`
    display: flex;
    justify-content: center;

    width: calc(100% - 32px);
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    background: #5849ff;
    color: #fff;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 17px;
    font-weight: 400;
    max-width: 700px;
    margin: 10px;
    &:active {
        animation: ${animation} 0.2s;
    }
`;

const BottomButtonList = styled.div`
	display: flex;
	justify-content: flex-end;
	
	flex-direction: row;
	
	align-items: center;
`;

const BottomGoReport = styled.div`
	display: flex;
	align-items: center;
	margin-left: 8px;
`;
const BottomGrClose = styled.div`
	display: flex;
	align-items: center;
	margin-left: 8px;
`;
const BottomKakao = styled.div`
	display: flex;
	align-items: center;
`;

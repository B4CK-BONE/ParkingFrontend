import React, { useState, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { GrClose } from 'react-icons/gr';
import styled, { keyframes } from 'styled-components';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { AiFillCamera, AiFillCloseCircle } from 'react-icons/ai';

function SurveyResultSheet(props) {
    const userinfos = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [sendImgs, setSendImgs] = useState([]);

    const onClose = () => {
        props.setSurvey(false);
    };

    return (
        <div ref={props.ref} className="wrap loaded">
            <BottomSheet
                open={props.Survey}
                onDismiss={onClose}
                header={
                    <StyledBottomSheetHeader>
                        <BottomSheetCarNum>설문</BottomSheetCarNum>{' '}
                        <BottomButtonList>
                            <BottomGrClose>
                                <GrClose size="25" onClick={onClose} />
                            </BottomGrClose>
                        </BottomButtonList>
                    </StyledBottomSheetHeader>
                }
                snapPoints={({ maxHeight }) => 0.95 * maxHeight}
            >
                <div
                    style={{
                        height: '100vh',
                    }}
                >
                    <StyledNewWishList>
                        <StyledButtonWrapper>
                            <SurveyContents
                                cols="130"
                                rows="10"
                                value={props.User.contents}
                                readOnly
                            ></SurveyContents>
                        </StyledButtonWrapper>
                        {props.User.img !== 'null' && (
                            <div>
                                <SurveyImg src={props.User.img} alt={`Image ${1}`} />
                            </div>
                        )}
                    </StyledNewWishList>
                </div>
            </BottomSheet>
        </div>
    );
}

export default SurveyResultSheet;

const animation = keyframes`
50% {
  transform: scale(0.92);
}
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SurveyContents = styled.textarea`
    width: calc(100% - 32px);
    margin-top: 30px;
    border-radius: 5px;
    outline-color: rgb(61, 13, 83);
    border: 2px solid #a0a0a0;
    resize: none;
`;

const BottomSheetCarNum = styled.div``;

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

const SurveyDeleteIcon = styled.div`
    display: flex;
    align-items: end;
    margin-right: 8px;
`;

const BottomGrClose = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
`;
const SurveyImg = styled.img`
    width: 80px;
    height: 70px;
`;
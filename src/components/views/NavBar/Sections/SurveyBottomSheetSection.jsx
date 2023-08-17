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

function SurveyBottomSheetSection(props) {
    const userinfos = useSelector((state) => state.user);
    const navigate = useNavigate();
    const fileInput = useRef(null);
    const [sendImgs, setSendImgs] = useState([]);
    const [Text, setText] = useState('');

    const handleImageUpload = (e) => {
        if (e.target.files) {
            const fileArr = e.target.files;
            let fileURLs = [];
            let file = fileArr[0];

            if (!file.type.includes('image')) {
                setSendImgs([]);
                alert(`사진 파일만 가능합니다.`);
            } else {
                let reader = new FileReader();

                reader.onload = () => {
                    fileURLs[0] = reader.result;
					
                    setSendImgs([...fileURLs]);
                };
                reader.readAsDataURL(file);
            }
        } else {
            console.log('파일을 넣어주세요.');
        }
    };

    const onClose = () => {
        props.setSurvey(false);
		setSendImgs([]);
		setText('');
    };

    const onImageDelete = () => {
        setSendImgs([]);
        fileInput.current.value = '';
    };

    const onFileButton = (e) => {
        fileInput.current.click();
    };

    const onTextChange = (e) => {
        setText(e.currentTarget.value);
    };

    const SurveyComplete = () => {
        if (Text !== '' || sendImgs[0].length < 900000 || sendImgs[0] === "") {
            let body = {
                contents: Text,
            };
            if (sendImgs[0] !== '') {
                body.img = sendImgs[0];
            }
            console.log(body);

            const config = {
                headers: {
                    Authorization: `${userinfos?.accessToken}`,
                },
                withCredentials: true,
            };

            Axios.post(`${API_URL}user/survey`, body, config)
                .then((response) => {
                    if (response.data.isSuccess) {
						alert(response.data.message);
                        props.setSurvey(false);
                        setSendImgs([]);
                        setText('');
                    } else {
                        alert(response.data.message);
                        props.setSurvey(false);
                        setSendImgs([]);
                        setText('');
                    }
                })

                .catch((error) => {
				
				
                    navigate('/login');
                });
        }else{
			alert("파일 크거나 혹은 텍스트를 입력하지 않았습니다.");
		}
    };
    return (
        <div ref={props.ref} className="wrap loaded">
            <BottomSheet
                open={props.Survey}
                onDismiss={onClose}
                header={
                    <StyledBottomSheetHeader>
                        <BottomSheetCarNum>설문 조사</BottomSheetCarNum>
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
                        height: '150vh',
                    }}
                >
                    <StyledNewWishList>
                        <React.Fragment>
                            <ImgBtn onClick={onFileButton}>
                                <AiFillCamera size="30" /> 사진첨부
                            </ImgBtn>
                            <input
                                type="file"
                                ref={fileInput}
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                        </React.Fragment>

                        {sendImgs.map((item, index) => (
                            <React.Fragment key={index}>
                                <div>
                                    <SurveyDeleteIcon>
                                        <AiFillCloseCircle size="16" onClick={onImageDelete} />
                                    </SurveyDeleteIcon>
                                    {item !== 'null' && (
                                        <React.Fragment>
                                            <SurveyImg src={item} alt={`Image ${index}`} />
                                        </React.Fragment>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}

                        <StyledButtonWrapper>
                            <SurveyContents
                                cols="130"
                                rows="10"
                                value={Text}
                                onChange={onTextChange}
                                placeholder="주차장 및 빌라의 불편사항을 적어주세요."
                            ></SurveyContents>
                        </StyledButtonWrapper>
                        <StartBtn onClick={SurveyComplete}>완료</StartBtn>
                    </StyledNewWishList>
                </div>
            </BottomSheet>
        </div>
    );
}

export default SurveyBottomSheetSection;

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
	position:absolute;
    align-items: end;
    margin-right: 8px;
`;

const BottomGrClose = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
`;
const SurveyImg = styled.img`
    height: 15rem;
`;
const ImgBtn = styled.button`
    color: rgb(61, 13, 83);
    background-color: rgb(255, 255, 255);
    border-color: rgb(61, 13, 83);
    width: calc(100% - 32px);
    height: 54px;
    border-width: 3px;
    font-size: 20px;
    border-radius: 10px;
`;
const SurveyContents = styled.textarea`
    width: calc(100% - 32px);
    margin-top: 30px;
    border-radius: 5px;
    outline-color: rgb(61, 13, 83);
    border: 2px solid #a0a0a0;
    resize: none;
    font-size:25px;
`;
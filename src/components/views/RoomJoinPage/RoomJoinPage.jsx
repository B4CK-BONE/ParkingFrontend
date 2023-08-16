import { useState } from 'react';
import QrReader from 'react-qr-reader';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const RoomJoinPage = () => {
    const [showDialog, setDiaglog] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [selected, setSelected] = useState('environment');
    const [Codenum, setCodenum] = useState('');
    const navigate = useNavigate();

    const handleScan = async (scanData) => {
        if (scanData && scanData !== '' && !showDialog && !processing) {
            
            const url = new URL(scanData);
            const pathAndQuery = url.pathname + url.search;
            navigate(pathAndQuery);
        }
    };

    const onRoomcodeHandler = (event) => {
        const newValue = event.target.value
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*?)\..*/g, '$1'); 

        setCodenum(newValue);
    };

    const handleJoinRoom = (event) => {
        navigate(`/roomwait?roomId=${Codenum}`);
    };
    const handleError = (err) => {
        console.error(err);
    };
    return (
        <div className="wrap loaded">
            <ContainerTitleDiv>ParKING</ContainerTitleDiv>
            <ContainersubTitleDiv>QR 인증 혹은 룸 코드 넘버를 넣어주세요.</ContainersubTitleDiv>

            {!showDialog && !processing && (
                <QrReader
                    facingMode={selected}
                    delay={500}
                    onError={handleError}
                    onScan={handleScan}
                    // chooseDeviceId={()=>selected}
                    style={{ maxWidth: '400px', margin: 'auto' }}
                />
            )}
            <ContainerDiv>
                <NameInput
                    type="text"
                    minLength="7"
                    maxLength="10"
                    value={Codenum}
                    onChange={onRoomcodeHandler}
                    placeholder="코드 번호 예). 185"
                />
                <StartBtn onClick={handleJoinRoom}>가입하기</StartBtn>
            </ContainerDiv>
        </div>
    );
};

export default RoomJoinPage;

const ContainerTitleDiv = styled.h1`
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
`;

const ContainersubTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    margin-bottom: 7vh;
    text-align: center;
`;

const NameInput = styled.input`
    width: 85%;
    height: 32px;
    font-size: 15px;
    border: 0px;
    border-radius: 15px;
    outline: none;
    padding: 10px;
    margin: 10px auto;
    background-color: rgb(233, 233, 233);
	max-width : 700px;
`;

const animation = keyframes`
50% {
  transform: scale(0.92);
}
`;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
	max-width : 700px;

    margin: 10px;
    &:active {
        animation: ${animation} 0.2s;
    }
`;
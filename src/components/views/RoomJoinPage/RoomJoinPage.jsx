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
            console.log(`loaded >>>`, scanData);
            //navigate("/");
        }
    };

    const onRoomcodeHandler = (event) => {
        const newValue = event.target.value
            .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외의 문자를 제거
            .replace(/(\..*?)\..*/g, '$1'); // 여러 소수점을 하나로 축소

        setCodenum(newValue);
    };

    const handleJoinRoom = (event) => {
		
        navigate(`/waitingroom/${Codenum}`);
    };
    const handleError = (err) => {
        console.error(err);
    };
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>
                
                {selected}
            </h2>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value={'environment'}>Back Camera</option>
                <option value={'user'}>Front Camera</option>
            </select>

            {!showDialog && !processing && (
                <QrReader
                    facingMode={selected}
                    delay={500}
                    onError={handleError}
                    onScan={handleScan}
                    // chooseDeviceId={()=>selected}
                    style={{ width: '200px', heigth: '100px' }}
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

    margin: 10px;
    &:active {
        animation: ${animation} 0.2s;
    }
`;
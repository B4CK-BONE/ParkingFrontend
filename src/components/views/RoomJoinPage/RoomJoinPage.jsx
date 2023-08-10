import React, { useEffect, useState } from 'react';
import QrReader from 'react-qr-scanner';
import styled, { keyframes } from 'styled-components';
import Axios from 'axios';

import { useNavigate } from 'react-router-dom';

function RoomJoinPage(props) {
    const [delay, setDelay] = useState(100);
    const [result, setResult] = useState('No result');
    const navigate = useNavigate();

    const handleScan = (data) => {
        if (data !== null) {
            setResult(data);
            console.log('응원', data);
            navigate('/');
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const previewStyle = {
        height: 240,
        width: 320,
    };

    return (
        <div>
            <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
				facingMode="rear"
            />
            <p>{result}</p>
        </div>
    );
}

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

const ContainerTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: 1000;
    margin-bottom: 2vh;
`;

const ContainersubTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5vh;
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
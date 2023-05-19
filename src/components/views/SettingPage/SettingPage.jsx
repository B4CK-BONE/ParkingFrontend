import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function SettingPage() {
    const [Src, setSrc] = useState('');

    let qrUrl = [
        {
            QRcodeUrl: 'https://www.youtube.com/watch?v=bVGGsVt2t6o',
        },
    ];

    return (
        <div>
            <UserDiv>test</UserDiv>
            <UserinfoDiv></UserinfoDiv>
        </div>
    );
}

export default SettingPage;

const UserDiv = styled.div`
    margin: 20px 20px auto;
    
    font-size: 25px;
    
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
`;

const UserinfoDiv = styled.div`
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
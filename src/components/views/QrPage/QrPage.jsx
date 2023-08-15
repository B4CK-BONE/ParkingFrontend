import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import styled from 'styled-components';
import Axios from 'axios';
import { API_URL, Client_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function QrPage(props) {
    const [Src, setSrc] = useState('');
	const [Code, setCode] = useState('');
    const navigate = useNavigate();
	const userinfos = useSelector((state) => state.user);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}room/qr`, config) //
            .then((response) => {
                // 요청이 성공한 경우의 처리
                if (response.data.isSuccess) {
                    console.log(response.data);
					setCode(response.data.result.roomIdx)
                    QRCode.toDataURL(`${Client_URL}roomwait?roomId=${response.data.result.roomIdx}`).then(
                        (data) => {
                            setSrc(data);
                        }
                    );
                } else {
                    alert(response.data.message);
                    navigate('/');
                }
            })
            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);
    return (
        <div className="wrap loaded">
            <div>
                <img
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcYaxSE%2FbtsfdaHthmR%2F1f2rjzIEmZbuy8EfSEHyok%2Fimg.png"
                    alt="QrcodeImg"
                    style={{
                        width: '80px',
                        height: '80px',
                        margin: '30px 0px 10px 10px',
                    }}
                />
                <QrcodeH3>QR코드로 방을 입장할 수 있습니다.</QrcodeH3>
                <QrcodeChildDiv>앱 상단바 &gt; QR코드 스캔 </QrcodeChildDiv>
            </div>
            <QrcodeDiv>
                <img
                    src={Src}
                    alt={1}
                    width={'200px'}
                    style={{
                        marginTop: '100px',
                        border: '4px solid #452b75',
                    }}
                />
				<RoomcodeDiv>방 번호</RoomcodeDiv>
				<RoomDiv>{Code}</RoomDiv>
            </QrcodeDiv>
        </div>
    );
}

export default QrPage;

const RoomcodeDiv = styled.div`
    color: rgb(73, 80, 87);
    text-align: center;
	font-size: 16px;
	margin-top:20px
`;

const RoomDiv = styled.div`
    
    text-align: center;
	font-size: 20px;
	margin-top:8px;
`;

const QrcodeDiv = styled.div`
    background-color: #ffffff;
    text-align: center;
    min-height: calc(80vh - 80px);
`;

const QrcodeH3 = styled.h3`
    margin: 0px 30px 8px 30px;
`;

const QrcodeChildDiv = styled.div`
    margin: 0px 30px 30px 30px;
    color: #495057;
    font-size: small;
`;
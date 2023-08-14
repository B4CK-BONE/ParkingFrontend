import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';

const Profile = (props) => {
    const [Name, setName] = useState('');
    const [Usercar, setUsercar] = useState('');
    const [Userphone, setUserphone] = useState('');
    const [Userkakao, setUserkakao] = useState('');
	const [Userkakaovalue, setUserkakaovalue] = useState('');
    const navigate = useNavigate();
    const userinfos = useSelector((state) => state.user);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `${userinfos?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}user/${userinfos?.userData?.result.idx}`, config) //
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);

                setName(response.data.result.address);
                setUsercar(response.data.result.car);
                setUserphone(response.data.result.phone);
                setUserkakao("https://open.kakao.com/o/"+response.data.result.kakao);
				setUserkakaovalue(response.data.result.kakao);
            })
            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);

    const onNameHandler = (event) => {
        const newValue = event.target.value
            .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외의 문자를 제거
            .replace(/(\..*?)\..*/g, '$1'); // 여러 소수점을 하나로 축소

        setName(newValue);
    };

    const onUsercarHandler = (event) => {
        const newValue = event.target.value
            .replace(/[^0-9가-힣]/g, '') // 숫자와 한글 이외의 문자 제거
            .replace(/^\d{2,4}[가-힣]\d{5}$/, ''); // 형식을 만족하는 부분만 남김
        setUsercar(newValue);
    };

    const onUserphoneHandler = (event) => {
        const newValue = event.target.value
            .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외의 문자를 제거
            .replace(/(\..*?)\..*/g, '$1'); // 여러 소수점을 하나로 축소

        setUserphone(newValue);
    };

    const onUserkakaoHandler = (event) => {
        const url = event.target.value;
        const regex = /\/([a-zA-Z0-9]+)$/; // 정규식

        const matches = url.match(regex);
        const extractedValue = matches && matches[1]; // 추출된 값

		setUserkakaovalue(extractedValue)
        setUserkakao(event.target.value);
    };

    const handleJoinRoom = (event) => {
        event.preventDefault();

        const params = { car: Usercar, phone: Userphone, address: Name, kakao: Userkakaovalue };
        //const body = JSON.stringify(params);
        if (Name !== '' || Usercar !== '' || Userphone) {
            //console.log(body);
            // 방 입장하기 버튼 클릭 시 실행되는 로직
            const config = {
                headers: {
                    Authorization: `${userinfos?.accessToken}`,
                },
                withCredentials: true,
            };
            Axios.put(`${API_URL}user/${userinfos?.userData?.result.idx}`, params, config) //
                .then((response) => {
                    // 요청이 성공한 경우의 처리
                    if (response.data.isSuccess) {
                        navigate('/setting');
                    }
                })
                .catch((error) => {
                    // 요청이 실패한 경우의 처리
                    console.error(error);
                });
        } else {
            alert('차량번호 및 호수, 전화번호를 확인해주세요.');
        }
    };

    return (
        <div className="wrap loaded">
            <ContainerDiv>
                <ContainerTitleDiv>회원 정보 수정</ContainerTitleDiv>
            </ContainerDiv>
            <ContainerDiv>
                <ContainersubTitleDiv>세대 호수</ContainersubTitleDiv>
                <NameInput
                    type="text"
                    minLength="3"
                    maxLength="5"
                    value={Name}
                    onChange={onNameHandler}
                    placeholder="세대 호수 예). 201호 -> 201"
                />
                <ContainersubTitleDiv>전화번호</ContainersubTitleDiv>
                <NameInput
                    type="text"
                    minLength="7"
                    maxLength="11"
                    value={Userphone}
                    onChange={onUserphoneHandler}
                    placeholder="전화번호 번호 예). 01011112222"
                />
                <ContainersubTitleDiv>차량 번호</ContainersubTitleDiv>
                <NameInput
                    type="text"
                    minLength="7"
                    maxLength="10"
                    value={Usercar}
                    onChange={onUsercarHandler}
                    placeholder="차량 번호 예). 17가 8526"
                />

                <ContainersubTitleDiv>오픈채팅</ContainersubTitleDiv>
                <NameInput
                    type="text"
                    minLength="7"
                    maxLength="35"
                    value={Userkakao}
                    onChange={onUserkakaoHandler}
                    placeholder="카카오톡 주소 붙혀넣기 예). https://open.kakao.com/o/shC7nIAf"
                />
                <StartBtn onClick={handleJoinRoom}>수정하기</StartBtn>
            </ContainerDiv>
        </div>
    );
};

export default Profile;

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
    max-width: 700px;
    margin: auto;
`;

const ContainerTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: 1000;
    margin: 20px;
    margin-bottom: 2vh;
`;

const ContainersubTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 8px;
    margin-left: 15px;
    margin-right: 80%;
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